"use strict";

const Map  = require("../lib/Map");
const Cell = require("./Cell");

module.exports = class Life {

  constructor(initialLiveCells) {
    this.liveCells = initialLiveCells || new Map();
  }

  getLiveCells() {
    return this.liveCells;
  }

  next() {
    const nextLiveCells = new Map();
    for (const liveCell of this.liveCells.values())
      for (let x = -1; x <= 1; x++)
        for (let y = -1; y <= 1; y++) {
          const testCell = new Cell(liveCell.x + x, liveCell.y + y);
          const neighbours = this.neighbours(testCell);
          const isLive = this.liveCells.hasCell(testCell);
          if (this.isCellSurvivable(isLive, neighbours))
            nextLiveCells.addCells([testCell]);
        }
    
    return new Life(nextLiveCells);
  }

  isCellSurvivable(isLive, neighbours) {
    if (isLive === false) {
      return (neighbours === 3);
    }
    switch (neighbours) {
      case 2: case 3:
        return true;
      case 0: case 1: case 4: case 5: case 6: case 7: case 8:
        return false;
      default:
        throw new Error("Argument out of bounds")
    }
  }

  neighbours(cell) {
    let count = 0;
    for (let x = -1; x <= 1; x++)
      for (let y = -1; y <= 1; y++) {
        const neighbour = new Cell(cell.x + x, cell.y + y);
        const isSelf = (x === 0 && y === 0);
        const isLive = this.liveCells.hasCell(neighbour);
        if (!isSelf && isLive)
          count++;
      }
    return count;
  }
};