import { Rover } from "./MarsRoverV2";

describe("RoverV2", () => {
  it("should return [1,1,w] after 'left' if initial position is [1,1,n]", () => {
    const initialPosition = { x: 1, y: 1, d: "n" };
    const expectedPosition = { x: 1, y: 1, d: "w" };

    const initRover = new Rover();
    const roverAfterTurnLeft = initRover.left(initialPosition);

    expect(roverAfterTurnLeft).toEqual(expectedPosition);
  });
  it("should return [1,1,e] after 'right' if initial position is [1,1,s]", () => {
    const initialPosition = { x: 1, y: 1, d: "e" };
    const expectedPosition = { x: 1, y: 1, d: "s" };

    const initRover = new Rover();
    const roverAfterTurnRight = initRover.right(initialPosition);

    expect(roverAfterTurnRight).toEqual(expectedPosition);
  });
  it("should return [1,0,s] after 'forward' if initial position is [1,1,s]", () => {
    const initialPosition = { x: 1, y: 1, d: "s" };
    const expectedPosition = { x: 1, y: 0, d: "s" };

    const initRover = new Rover();
    const roverAfterForward = initRover.forward(initialPosition);

    expect(roverAfterForward).toEqual(expectedPosition);
  });
  it("should return [1,2,n] after 'forward' if initial position is [1,1,n]", () => {
    const initialPosition = { x: 1, y: 1, d: "n" };
    const expectedPosition = { x: 1, y: 2, d: "n" };

    const initRover = new Rover();
    const roverAfterForward = initRover.forward(initialPosition);

    expect(roverAfterForward).toEqual(expectedPosition);
  });
  it("should return [2,1,e] after 'forward' if initial position is [1,1,e]", () => {
    const initialPosition = { x: 1, y: 1, d: "e" };
    const expectedPosition = { x: 2, y: 1, d: "e" };

    const initRover = new Rover();
    const roverAfterForward = initRover.forward(initialPosition);

    expect(roverAfterForward).toEqual(expectedPosition);
  });
  it("should return [0,1,e] after 'back' if initial position is [1,1,e]", () => {
    const initialPosition = { x: 1, y: 1, d: "e" };
    const expectedPosition = { x: 0, y: 1, d: "e" };

    const initRover = new Rover();
    const roverAfterBack = initRover.back(initialPosition);

    expect(roverAfterBack).toEqual(expectedPosition);
  });
  it("should return [1,2,s] after 'back' if initial position is [1,1,s]", () => {
    const initialPosition = { x: 1, y: 1, d: "s" };
    const expectedPosition = { x: 1, y: 2, d: "s" };

    const initRover = new Rover();
    const roverAfterBack = initRover.back(initialPosition);

    expect(roverAfterBack).toEqual(expectedPosition);
  });
});
