export class Rover {
  public getComands(
    initialPosition: number[],
    initialDirection: string,
    target: number[]
  ) {
    const [initX, initY] = initialPosition;
    const [targetX, targetY] = target;
    if (initX === targetX && initY === targetY) return [];
    if (initX < targetX) return ["right"];
    if (initY > targetY) return ["left", "left"];
    if (initY < targetY && initialDirection === "W") return ["right"];
    if (initY < targetY) return ["left", "left"];
    return ["left"];
  }
}
