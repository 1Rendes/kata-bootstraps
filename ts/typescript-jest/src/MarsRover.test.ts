import { Rover } from "./MarsRover";

describe("MarsRover", () => {
  it("can turn to target from N to W", () => {
    const initialData = [[0, 0], "N", [1, 0]];
    const expectedPosition = [[0, 0], "W"];
    const rover = new Rover();

    const currentPosition = rover.turn(initialData);

    expect(currentPosition).toEqual(expectedPosition);
  });
  it("can turn to target from N to E", () => {
    const initialData = [[1, 0], "N", [0, 0]];
    const expectedPosition = [[1, 0], "E"];
    const rover = new Rover();

    const currentPosition = rover.turn(initialData);

    expect(currentPosition).toEqual(expectedPosition);
  });
});
