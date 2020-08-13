/**
 * This file represents one of the six Faces of a Cubie.
 */
class Face
{
    /**
     * Initialize the Face by settings its axis, level and color
     * 
     * @param {*} axis  The Axis in which the Face is sitting
     * @param {*} level The level of the Face (-1, 1)
     * @param {*} color The color of the Face
     */
    constructor(axis, level, color)
    {
        this.axis = axis;
        this.level = level;
        this.color = color;
    }

    /**
     * Render the Face with correct translation, rotation and color
     */
    render = () =>
    {
        push();
        {
            rectMode(CENTER);

            stroke(0);
            strokeWeight(2)

            // Get color for Face
            fill(this.color),

            // Translate Face into correct position
            translate(Cubie.SIZE / 2 * (this.axis.x * this.level), Cubie.SIZE / 2 * (this.axis.y * this.level), Cubie.SIZE / 2 * (this.axis.z * this.level))

            // Rotate Face according to its Axis
            const axis = createVector(this.axis.y, this.axis.x, this.axis.z);
            rotate(HALF_PI, axis);

            // Render Face
            rect(0, 0, Cubie.SIZE, Cubie.SIZE)
        }
        pop();
    }
}