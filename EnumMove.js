/**
 * This file contains an enumeration storing all available moves on the RubiksCube
 */
const EnumMove =
{
    // Clockwise Moves
    MoveU : new Move(EnumAxis.AxisY, -1, 1),
    MoveE : new Move(EnumAxis.AxisY,  0, 1),
    MoveD : new Move(EnumAxis.AxisY,  1, 1),

    MoveL : new Move(EnumAxis.AxisX, -1, 1),
    MoveM : new Move(EnumAxis.AxisX,  0, 1),
    MoveR : new Move(EnumAxis.AxisX,  1, 1),

    MoveB : new Move(EnumAxis.AxisZ, -1, 1),
    MoveS : new Move(EnumAxis.AxisZ,  0, 1),
    MoveF : new Move(EnumAxis.AxisZ,  1, 1),

    // Counter Clockwise Moves
    MoveU_ : new Move(EnumAxis.AxisY, -1, -1),
    MoveE_ : new Move(EnumAxis.AxisY,  0, -1),
    MoveD_ : new Move(EnumAxis.AxisY,  1, -1),

    MoveL_ : new Move(EnumAxis.AxisX, -1, -1),
    MoveM_ : new Move(EnumAxis.AxisX,  0, -1),
    MoveR_ : new Move(EnumAxis.AxisX,  1, -1),
    
    MoveB_ : new Move(EnumAxis.AxisZ, -1, -1),
    MoveS_ : new Move(EnumAxis.AxisZ,  0, -1),
    MoveF_ : new Move(EnumAxis.AxisZ,  1, -1)
}