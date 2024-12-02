export class Rover {
  public getMovement(
    initialPosition: number[],
    initialDirection: string,
    target: number[]
  ) {
    let movements: string[] = [];
    let directionDefine = this.getDirection(
      initialPosition,
      initialDirection,
      target
    );

    movements = [...directionDefine];
    const [initX, initY] = initialPosition;
    const [targetX, targetY] = target;
    let currentX = initX;
    let currentY = initY;
    let currentDirection = this.defineDirectionToTarget(
      currentX,
      currentY,
      targetX,
      targetY
    );
    if (initX < targetX) {
      for (let positionX = initX + 1; positionX <= targetX; ++positionX) {
        currentX = positionX;
        movements.push("forward");
      }
    }
    if (initX > targetX) {
      for (let positionX = initX - 1; positionX >= targetX; --positionX) {
        currentX = positionX;
        movements.push("forward");
      }
    }
    let newDirection = this.defineDirectionToTarget(
      currentX,
      currentY,
      targetX,
      targetY
    );
    movements = [
      ...movements,
      ...this.defineTurns(newDirection, currentDirection),
    ];
    if (initY < targetY) {
      for (let positionY = initY + 1; positionY <= targetY; ++positionY) {
        currentY = positionY;
        movements.push("forward");
      }
    }
    if (initY > targetY) {
      for (let positionY = initY - 1; positionY >= targetY; --positionY) {
        currentY = positionY;
        movements.push("forward");
      }
    }
    return movements;
  }
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
      initY,
      targetX,
      targetY
    );
    return this.defineTurns(TargetDirection, currentNumericDirection);
  }
  private defineTurns(
    TargetDirection: number,
    currentNumericDirection: number
  ) {
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
        return ["left"];
      case -2:
        return ["left", "left"];
      default:
        return;
    }
  }

  private defineDirectionToTarget(
    currectX: number,
    currectY: number,
    targetX: number,
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
