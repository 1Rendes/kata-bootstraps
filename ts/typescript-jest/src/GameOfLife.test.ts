import { Cell } from "./GameOfLife";

describe("Game of life", () => {
  it("cell can calculate alive neighbours", () => {
    const initialNeighboursState = [0, 1, 1, 0, 1, 0, 0, 1];
    const expectedNumberOfAliveNeighbours = 4;

    const cell = new Cell();
    const numberOfAliveNeighbours = cell.calculateNeighbours(
      initialNeighboursState
    );

    expect(numberOfAliveNeighbours).toBe(expectedNumberOfAliveNeighbours);
  });
});
