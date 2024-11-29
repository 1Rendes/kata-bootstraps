import { Rover } from "./MarsRover";

describe("MarsRover", () => {
  it("dont move if target equal to initial position", () => {
    const initialPosition = [0, 0];
    const initialDirection = "N";
    const target = [0, 0];
    const expectedComands = [];
    const rover = new Rover();

    const comands = rover.getDirection(
      initialPosition,
      initialDirection,
      target
    );

    expect(comands).toEqual(expectedComands);
  });
  it("return 'left' if current direction is N and target is on W", () => {
    const initialPosition = [1, 0];
    const initialDirection = "N";
    const target = [0, 0];
    const expectedComands = ["left"];
    const rover = new Rover();

    const comands = rover.getDirection(
      initialPosition,
      initialDirection,
      target
    );

    expect(comands).toEqual(expectedComands);
  });
  it("return 'right' if current direction is N and target is on E", () => {
    const initialPosition = [0, 0];
    const initialDirection = "N";
    const target = [1, 0];
    const expectedComands = ["right"];
    const rover = new Rover();

    const comands = rover.getDirection(
      initialPosition,
      initialDirection,
      target
    );

    expect(comands).toEqual(expectedComands);
  });
  it("return 'left,left' if current direction is N and target is on S", () => {
    const initialPosition = [0, 1];
    const initialDirection = "N";
    const target = [0, 0];
    const expectedComands = ["left", "left"];
    const rover = new Rover();

    const comands = rover.getDirection(
      initialPosition,
      initialDirection,
      target
    );

    expect(comands).toEqual(expectedComands);
  });
  it("return 'left,left' if current direction is S and target is on N", () => {
    const initialPosition = [0, 0];
    const initialDirection = "S";
    const target = [0, 1];
    const expectedComands = ["left", "left"];
    const rover = new Rover();

    const comands = rover.getDirection(
      initialPosition,
      initialDirection,
      target
    );

    expect(comands).toEqual(expectedComands);
  });
  it("return 'right' if current direction is W and target is on N", () => {
    const initialPosition = [0, 0];
    const initialDirection = "W";
    const target = [0, 1];
    const expectedComands = ["right"];
    const rover = new Rover();

    const comands = rover.getDirection(
      initialPosition,
      initialDirection,
      target
    );

    expect(comands).toEqual(expectedComands);
  });
  it("return 'right' if current direction is E and target is on S", () => {
    const initialPosition = [0, 5];
    const initialDirection = "E";
    const target = [0, 1];
    const expectedComands = ["right"];
    const rover = new Rover();

    const comands = rover.getDirection(
      initialPosition,
      initialDirection,
      target
    );

    expect(comands).toEqual(expectedComands);
  });
});
