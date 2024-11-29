import { Rover } from "./MarsRover";

describe("MarsRover", () => {
  it("return 'left' if current direction is N and target is on W", () => {
    const initialData = [[0, 0], "N"];
    const expectedComands = ["left"];
    const rover = new Rover();

    const comands = rover.getComands(initialData);

    expect(comands).toEqual(expectedComands);
  });
});
