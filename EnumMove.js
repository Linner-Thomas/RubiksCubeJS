const EnumMove =
{
    MoveU : new Move(EnumAxis.AxisY, -1, 1),
    MoveD : new Move(EnumAxis.AxisY,  1, 1),
    MoveR : new Move(EnumAxis.AxisX,  1, 1),
    MoveL : new Move(EnumAxis.AxisX, -1, 1),
    MoveF : new Move(EnumAxis.AxisZ,  1, 1),
    MoveB : new Move(EnumAxis.AxisZ, -1, 1)
}