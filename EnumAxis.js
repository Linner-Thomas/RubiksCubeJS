/**
 * This file contains an enumeration storing the three available axis (x, y, z).
 * 
 * Each axis has a set of attributes:
 * - color : RGB color value of the axis (used for rendering)
 * - x     : 1 if the axis is in x direction, else 0
 * - y     : 1 if the axis is in y direction, else 0
 * - z     : 1 if the axis is in z direction, else 0
 */
EnumAxis =
{
    AxisX : {color : [255,   0,   0], x : 1, y : 0, z : 0},
    AxisY : {color : [  0, 255,   0], x : 0, y : 1, z : 0},
    AxisZ : {color : [  0,   0, 255], x : 0, y : 0, z : 1}
};