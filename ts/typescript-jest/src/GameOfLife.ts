export class Cell {
  defineState(initialNeighboursState: number[], initialCellState: number) {
    const numberOfAliveNeighbours = this.calculateNeighbours(
      initialNeighboursState
    );
    return numberOfAliveNeighbours >= 2 && numberOfAliveNeighbours <= 3 ? 1 : 0;
  }
  calculateNeighbours(initialNeighboursState: number[]) {
    return initialNeighboursState.filter((state) => state).length;
  }
}
