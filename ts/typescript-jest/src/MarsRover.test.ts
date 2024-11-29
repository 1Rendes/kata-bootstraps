import { Rover } from "./MarsRover";

describe("MarsRover", () => {
  it("return 'left' if current direction is N and target is on W", () => {
    const initialPosition = [1, 0];
    const initialDirection = "N";
    const target = [0, 0];
    const expectedComands = ["left"];
    const rover = new Rover();

    const comands = rover.getComands(initialPosition, target, initialDirection);

    expect(comands).toEqual(expectedComands);
  });
  it("return 'right' if current direction is N and target is on E", () => {
    const initialPosition = [0, 0];
    const initialDirection = "N";
    const target = [1, 0];
    const expectedComands = ["right"];
    const rover = new Rover();

    const comands = rover.getComands(initialPosition, target, initialDirection);

    expect(comands).toEqual(expectedComands);
  });
});
