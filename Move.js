class Move
{
    /**
     * Initialize the Move.
     * 
     * @param {*} axis      The Axis to rotate around 
     * @param {*} layer     The layer of the side
     * @param {*} direction The direction to rotate in
     */
    constructor(axis, layer, direction)
    {
        this.axis = axis;
        this.layer = layer;
        this.direction = layer != 0 ? layer * direction : direction;

        this.executing = false;
        this.angle = 0;
    }

    /**
     * Start executing the Move.
     */
    start = () =>
    {
        this.executing = true;
    }

    /**
     * Update the move, gets called every frame.
     * 
     * Rotate the Cube according to the Move.
     */
    update = () =>
    {
        if (this.executing == true)
        {
            if (abs(this.angle) <= HALF_PI)
            {
                this.angle += PI / 100 * this.direction;

                cube.rotate(this.axis, this.layer, PI / 100 * this.direction, false);
            }

            else
                this.finish();
        }
    }

    /**
     * Finish the execution of the Move.
     */
    finish = () =>
    {
        // Clean up
        cube.rotate(this.axis, this.layer, 0, true);

        // Reset state
        this.executing = false;
        this.angle = 0;
    }
}