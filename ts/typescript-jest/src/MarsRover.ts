export class Rover {
  public getDirection(
    initialPosition: number[],
    initialDirection: string,
    target: number[]
  ) {
    const [initX, initY] = initialPosition;
    const [targetX, targetY] = target;
    if (initX === targetX && initY === targetY) return [];
    let currentDirection: string = initialDirection;
    const directions = ["N", "W", "S", "E"];
    const currentNumericDirection = directions.indexOf(currentDirection);

    const TargetDirection = this.defineDirectionToTarget(
      initX,
      targetX,
      initY,
      targetY
    );

    const numberOfTurns = TargetDirection - currentNumericDirection;

    switch (numberOfTurns) {
      case 0:
        return [];
      case 1:
        return ["left"];
      case 2:
        return ["left", "left"];
      case 3:
        return ["right"];
      case -1:
        return ["right"];
      case -3:
        return ["right"];
      case -2:
        return ["left", "left"];
      default:
        return;
    }
  }
  private defineDirectionToTarget(
    currectX: number,
    targetX: number,
    currectY: number,
    targetY: number
  ) {
    if (currectX < targetX) {
      return 3;
    } else if (currectX > targetX) {
      return 1;
    } else if (currectY < targetY) {
      return 0;
    } else if (currectY > targetY) {
      return 2;
    }
  }
}
