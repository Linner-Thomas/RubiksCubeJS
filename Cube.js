/**
 * This file represents the complete Cube.
 * 
 * The Cube is made up of a total amount of SIZE * SIZE * SIZE Cubies.
 */
class Cube
{
    // Size of Cube n * n * n
    static get SIZE() { return 3 }

    /**
     * Initialize the RubiksCube by creating its Cubies
     */
    constructor()
    {
        this.cubies = [Cube.SIZE * Cube.SIZE * Cube.SIZE];

        let index = 0;

        // Create Cubies
        for (let x = -floor(Cube.SIZE / 2); x <= floor(Cube.SIZE / 2); x ++)
            for (let y = -floor(Cube.SIZE / 2); y <= floor(Cube.SIZE / 2); y ++)
                for (let z = -floor(Cube.SIZE / 2); z <= floor(Cube.SIZE / 2); z ++, index ++)
                    this.cubies[index] = new Cubie(x, y, z);
    }

    /**
     * Render the RubiksCube by rendering all its Cubies
     */
    render = () =>
    {
        this.cubies.forEach(cubie =>
        {
            cubie.render();
        })
    }
}