export class Cell {
  defineState(initialNeighboursState: number[]) {
    return this.calculateNeighbours(initialNeighboursState) > 1 ? 1 : 0;
  }
  calculateNeighbours(initialNeighboursState: number[]) {
    return initialNeighboursState.filter((state) => state).length;
  }
}
