/**
 * This class is a custom implementation of a basic Camera.
 */
class Camera
{
    /**
     * Initialize the Camera and set its default paramets.
     */
    constructor()
    {
        this.rotation            = new Quaternion();
        this.rotationSensability = 0.01;

        this.scale            = 1;
        this.scaleSensability = 0.001;
        this.scaleMin         = 1.0;
        this.scaleMax         = 3.0;
    }

    /**
     * Check for mouse dragging and apply a corresponding rotation to the Camera.
     * 
     * @param {*} event The received mouse event
     */
    mouseDragged = (event) =>
    {
        // Only rotate when right mouse button is pressed
        if (mouseButton == RIGHT)
        {
            this.rotation = this.rotation.mulitply(new Quaternion(  event.movementX * this.rotationSensability, EnumAxis.AxisY));
            this.rotation = this.rotation.mulitply(new Quaternion(- event.movementY * this.rotationSensability, EnumAxis.AxisX));
        }
    }

    /**
     * Check for mouse scrolling and apply a corresponsing scale to the Camera.
     * 
     * @param {*} event The received mouse event
     */
    mouseWheel = (event) =>
    {
        this.scale = Math.min(Math.max(this.scale - event.delta * this.scaleSensability, this.scaleMin), this.scaleMax);
    }

    /**
     * Apply the Camera transformations the to the canvas.
     */
    applyTransformation = () =>
    {
        this.rotation.applyMatrix();
        scale(this.scale);
    }
}