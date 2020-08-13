class Move
{
    /**
     * Initialize the Move.
     * 
     * @param {*} symbol    The symbol representing the Move
     * @param {*} axis      The Axis to rotate around 
     * @param {*} layer     The layer of the side
     * @param {*} direction The direction to rotate in
     */
    constructor(symbol, axis, layer, direction)
    {
        this.symbol = symbol;

        this.axis = axis;
        this.layer = layer;
        this.direction = layer != 0 ? layer * direction : direction;

        this.executing = false;
        this.angle = 0;
    }

    /**
     * Get a Move by its symbol
     * 
     * @param {*} symbol The symbol of the Move to get 
     */
    static getBySymbol = (symbol) =>
    {
        for (let index = 0; index < Object.values(EnumMove).length; index ++)
            if (Object.values(EnumMove)[index].symbol == symbol)
                return Object.values(EnumMove)[index];
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