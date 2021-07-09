"use strict";

const Cell = require("../lib/Cell");

Map.prototype.addCells = function (cells) {
  for (const cell of cells) {
    this.set(cell.hashCode(), cell);
  }
}

Map.prototype.hasCell = function (cell) {
  return this.has(cell.hashCode());
}

module.exports = Map