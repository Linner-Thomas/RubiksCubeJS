/**
 * This file represents one of the small Cubies inside the Cube.
 */
class Cubie
{
    // Size of one Cubie
    static get SIZE() { return 30; }
    
    /**
     * Initialize the Cubie by settings its position and creating its Faces.
     * 
     * @param {*} x The x-Position of the Cubie
     * @param {*} y The y-Position of the Cubie
     * @param {*} z The z-Position of the Cubie
     */
    constructor(x, y, z)
    {
        this.position = createVector(x, y, z);
        this.rotation = new Quaternion();

        // Initialize Colors for Faces
        this.colors = this.initColors(x, y, z);

        // Initialize Faces
        this.faces = this.initFaces();
    }

    /**
     * Initialize the Colors based on the position in the Cube.
     * 
     * @param {*} x The x-Position of the Cubie
     * @param {*} y The y-Position of the Cubie
     * @param {*} z The z-Position of the Cubie
     */
    initColors = (x, y, z) =>
    {
        let colors = [];

        // LEFT and RIGHT
        if      (x == -floor(Cube.SIZE / 2)) colors[0] = EnumColor.ColorGreen;
        else if (x ==  floor(Cube.SIZE / 2)) colors[3] = EnumColor.ColorBlue;

        // UP and DOWN
        if      (y == -floor(Cube.SIZE / 2)) colors[1] = EnumColor.ColorWhite;
        else if (y ==  floor(Cube.SIZE / 2)) colors[4] = EnumColor.ColorYellow;

        // BACK and FRONT
        if      (z == -floor(Cube.SIZE / 2)) colors[2] = EnumColor.ColorOrange;
        else if (z ==  floor(Cube.SIZE / 2)) colors[5] = EnumColor.ColorRed;

        // Inner Faces
        for (let index = 0; index < 6; index ++)
            if (colors[index] == undefined)
                colors[index] = EnumColor.ColorBlack;

        return colors;
    }

    /**
     * Initialize Faces.
     */
    initFaces = () =>
    {
        let faces = [];

        faces[0] = new Face(EnumAxis.AxisX, -1, this.colors[0]);
        faces[1] = new Face(EnumAxis.AxisY, -1, this.colors[1]);
        faces[2] = new Face(EnumAxis.AxisZ, -1, this.colors[2]);

        faces[3] = new Face(EnumAxis.AxisX, 1, this.colors[3]);
        faces[4] = new Face(EnumAxis.AxisY, 1, this.colors[4]);
        faces[5] = new Face(EnumAxis.AxisZ, 1, this.colors[5]);

        return faces;
    }

    /**
     * Render the Cubie by rendering all its Faces.
     */
    render = () =>
    {
        push();
        {
            // Translate into center of Cubie
            translate(Cubie.SIZE * this.position.x, Cubie.SIZE * this.position.y, Cubie.SIZE * this.position.z);

            // Rotate Cubie
            this.rotation.applyMatrix();

            // Loop through Faces and render
            this.faces.forEach(face =>
            {
                face.render();
            })
        }
        pop();
    }

    /**
     * Rotate a Cubie.
     * 
     * @param {*} axis     The Axis to rotate the Cubie around 
     * @param {*} angle    The angle to rotate the Cubie
     * @param {*} finished Signalizes if the rotation is finished
     */
    rotate = (axis, angle, finished) =>
    {
        // Calculate x-Position
        this.position.x = this.position.z * sin(angle * axis.y) + this.position.x * cos(angle * axis.y);
        this.position.x = this.position.x * cos(angle * axis.z) - this.position.y * sin(angle * axis.z);
        
        // Calculate y-Position
        this.position.y = this.position.x * sin(angle * axis.z) + this.position.y * cos(angle * axis.z);
        this.position.y = this.position.y * cos(angle * axis.x) - this.position.z * sin(angle * axis.x);
        
        // Calculate z-Position
        this.position.z = this.position.y * sin(angle * axis.x) + this.position.z * cos(angle * axis.x);
        this.position.z = this.position.z * cos(angle * axis.y) - this.position.x * sin(angle * axis.y);

        // Calculate rotation
        this.rotation = this.rotation.mulitply(new Quaternion(angle, axis));

        // Clean up position after rotation is finished
        if (finished == true)
        {
            this.position.x = round(this.position.x);
            this.position.y = round(this.position.y);
            this.position.z = round(this.position.z);
        }
    }
}