import { Rover } from "./MarsRoverV2";

describe("RoverV2", () => {
  it("should return [1,1,w] after turnLeft if initial position is [1,1,n]", () => {
    const initialPosition = { x: 1, y: 2, d: "n" };
    const expectedPosition = { x: 1, y: 2, d: "w" };

    const initRover = new Rover();
    const roverAfterTurnLeft = initRover.turnLeft(initialPosition);

    expect(roverAfterTurnLeft).toEqual(expectedPosition);
  });
  it("should return [1,1,e] after turnRight if initial position is [1,1,s]", () => {
    const initialPosition = { x: 1, y: 2, d: "e" };
    const expectedPosition = { x: 1, y: 2, d: "s" };

    const initRover = new Rover();
    const roverAfterTurnLeft = initRover.turnLeft(initialPosition);

    expect(roverAfterTurnLeft).toEqual(expectedPosition);
  });
});
