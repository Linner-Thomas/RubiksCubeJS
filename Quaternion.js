/**
 * This class implements the basic functionality of Quaternions.
 * 
 * These are used for complex rotations.
 */
class Quaternion
{
    /**
     * Initialize the Quaternion using Angle and Axis.
     * 
     * If one of the two parameter is undefined, a default Quaternion will be created.
     * 
     * @param {*} angle The angle of the rotation
     * @param {*} axis  The axis to rotate around
     */
    constructor(angle, axis)
    {
        if (angle == undefined || axis == undefined)
        {
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.w = 1;
        }

        else
        {
            const im = sin(angle / 2);
            const re = cos(angle / 2);
            
            this.x = im * axis.x;
            this.y = im * axis.y;
            this.z = im * axis.z;
            this.w = re; 
        }
    }

    /**
     * Quaternion multiplication.
     * 
     * @param {*} other The Quaternion to multiply with
     * 
     * @returns Result of multiplication (new rotation)
     */
    mulitply = (other) =>
    {
        const product = new Quaternion();

        product.x = other.w * this.x + other.x * this.w + other.y * this.z - other.z * this.y;
        product.y = other.w * this.y - other.x * this.z + other.y * this.w + other.z * this.x;
        product.z = other.w * this.z + other.x * this.y - other.y * this.x + other.z * this.w;
        product.w = other.w * this.w - other.x * this.x - other.y * this.y - other.z * this.z;

        return product;
    }

    /**
     * Apply the Quaternion rotation Matrix.
     */
    applyMatrix = () =>
    {
        applyMatrix(1 - 2 * this.y * this.y - 2 * this.z * this.z,     2 * this.x * this.y + 2 * this.z * this.w,     2 * this.x * this.z - 2 * this.y * this.w, 0,
                        2 * this.x * this.y - 2 * this.z * this.w, 1 - 2 * this.x * this.x - 2 * this.z * this.z,     2 * this.y * this.z + 2 * this.x * this.w, 0,
                        2 * this.x * this.z + 2 * this.y * this.w,     2 * this.y * this.z - 2 * this.x * this.w, 1 - 2 * this.x * this.x - 2 * this.y * this.y, 0,
                    0,                                             0,                                             0,                                             1);
    }
}