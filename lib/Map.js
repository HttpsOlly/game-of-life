"use strict";

Map.prototype.addCells = function (cells) {
  for (const cell of cells) {
    this.set(cell.hashCode(), cell);
  }
}

module.exports = Map