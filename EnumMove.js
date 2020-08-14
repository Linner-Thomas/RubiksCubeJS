/**
 * This file contains an enumeration storing all available moves on the RubiksCube.
 * 
 * Each move has a set of attributes:
 * - symbol    : Symbol representing the move
 * - axis      : Axis to rotate around
 * - layer     : Layer to rotate
 * - direction : 1 for clockwise rotation, -1 for counter clockwise rotation
 */
const EnumMove =
{
    // Clockwise Moves
    MoveU : new Move('U', EnumAxis.AxisY, -1, 1),
    MoveE : new Move('E', EnumAxis.AxisY,  0, 1),
    MoveD : new Move('D', EnumAxis.AxisY,  1, 1),

    MoveL : new Move('L', EnumAxis.AxisX, -1, 1),
    MoveM : new Move('M', EnumAxis.AxisX,  0, 1),
    MoveR : new Move('R', EnumAxis.AxisX,  1, 1),

    MoveB : new Move('B', EnumAxis.AxisZ, -1, 1),
    MoveS : new Move('S', EnumAxis.AxisZ,  0, 1),
    MoveF : new Move('F', EnumAxis.AxisZ,  1, 1),

    // Counter Clockwise Moves
    MoveU_ : new Move('u', EnumAxis.AxisY, -1, -1),
    MoveE_ : new Move('e', EnumAxis.AxisY,  0, -1),
    MoveD_ : new Move('d', EnumAxis.AxisY,  1, -1),

    MoveL_ : new Move('l', EnumAxis.AxisX, -1, -1),
    MoveM_ : new Move('m', EnumAxis.AxisX,  0, -1),
    MoveR_ : new Move('r', EnumAxis.AxisX,  1, -1),
    
    MoveB_ : new Move('b', EnumAxis.AxisZ, -1, -1),
    MoveS_ : new Move('s', EnumAxis.AxisZ,  0, -1),
    MoveF_ : new Move('f', EnumAxis.AxisZ,  1, -1),
}