export class Rover {
  public forward(initPosition: { x: number; y: number; d: string }) {
    const forward = 1;
    return this.move(initPosition, forward);
  }
  public back(initPosition: { x: number; y: number; d: string }) {
    const back = -1;
    return this.move(initPosition, back);
  }
  private move(
    initPosition: { x: number; y: number; d: string },
    directionOfMoving: number
  ) {
    if (initPosition.d === "w")
      return { ...initPosition, x: initPosition.x - directionOfMoving };
    if (initPosition.d === "e")
      return { ...initPosition, x: initPosition.x + directionOfMoving };
    if (initPosition.d === "n")
      return { ...initPosition, y: initPosition.y + directionOfMoving };
    if (initPosition.d === "s")
      return { ...initPosition, y: initPosition.y - directionOfMoving };
  }
  public right(initPosition: { x: number; y: number; d: string }) {
    const numericSidesOfWorld = ["n", "w", "s", "e"];
    const numericTurnRight = -1;
    const newDirection =
      numericSidesOfWorld[
        numericSidesOfWorld.indexOf(initPosition.d) + numericTurnRight
      ] || numericSidesOfWorld[numericSidesOfWorld.length - 1];
    return { ...initPosition, d: newDirection };
  }
  public left(initPosition: { x: number; y: number; d: string }) {
    const numericSidesOfWorld = ["n", "w", "s", "e"];
    const numericTurnLeft = 1;
    const newDirection =
      numericSidesOfWorld[
        numericSidesOfWorld.indexOf(initPosition.d) + numericTurnLeft
      ] || numericSidesOfWorld[0];
    return { ...initPosition, d: newDirection };
  }
}
