export class Rover {
  public getComands(
    initialPosition: number[],
    target: number[],
    initialDirection: string
  ) {
    const [initX, initY] = initialPosition;
    const [targetX, targetY] = target;
    if (initX < targetX) return ["right"];
    return ["left"];
  }
}
