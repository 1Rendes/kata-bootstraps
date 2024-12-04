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
  it("cell can calculate alive neighbours", () => {
    const initialNeighboursState = [0, 1, 0, 0, 1, 0, 0, 1];
    const expectedNumberOfAliveNeighbours = 3;

    const cell = new Cell();
    const numberOfAliveNeighbours = cell.calculateNeighbours(
      initialNeighboursState
    );

    expect(numberOfAliveNeighbours).toBe(expectedNumberOfAliveNeighbours);
  });
  it("cell can calculate alive neighbours", () => {
    const initialNeighboursState = [0, 1, 0, 0, 0, 0, 0, 0];
    const expectedNumberOfAliveNeighbours = 1;

    const cell = new Cell();
    const numberOfAliveNeighbours = cell.calculateNeighbours(
      initialNeighboursState
    );

    expect(numberOfAliveNeighbours).toBe(expectedNumberOfAliveNeighbours);
  });
  it("cell become dead if 1 neighbour is alive", () => {
    const initialNeighboursState = [0, 1, 0, 0, 0, 0, 0, 0];
    const initialCellState = 1;
    const expectedCellState = 0;

    const cell = new Cell();
    const cellState = cell.defineState(
      initialNeighboursState,
      initialCellState
    );

    expect(cellState).toBe(expectedCellState);
  });
  it("cell survive if 2 neighbours is alive", () => {
    const initialNeighboursState = [0, 1, 1, 0, 0, 0, 0, 0];
    const initialCellState = 1;
    const expectedCellState = 1;

    const cell = new Cell();
    const cellState = cell.defineState(
      initialNeighboursState,
      initialCellState
    );

    expect(cellState).toBe(expectedCellState);
  });
  it("cell become alive if 3 neighbours is alive", () => {
    const initialNeighboursState = [0, 1, 1, 1, 0, 0, 0, 0];
    const initialCellState = 0;
    const expectedCellState = 1;

    const cell = new Cell();
    const cellState = cell.defineState(
      initialNeighboursState,
      initialCellState
    );

    expect(cellState).toBe(expectedCellState);
  });
  it("cell become dead if 4 neighbours is alive", () => {
    const initialNeighboursState = [0, 1, 1, 1, 1, 0, 0, 0];
    const initialCellState = 1;
    const expectedCellState = 0;

    const cell = new Cell();
    const cellState = cell.defineState(
      initialNeighboursState,
      initialCellState
    );

    expect(cellState).toBe(expectedCellState);
  });
});
