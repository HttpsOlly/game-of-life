"use strict";

const Cell = require("../lib/Cell");

Map.prototype.addCells = function (cells) {
  for (const cell of cells) {
    this.set(cell.hashCode(), cell);
  }
}

Map.prototype.equals = function (that) {
  if (this.size !== that.size)
    return false;

  for (const [key, val] of this) {
    let testVal = that.get(key);
    if (JSON.stringify(testVal) !== JSON.stringify(val) ||
      (testVal === undefined && !that.has(key)))
      return false;
  }

  return true;
}

module.exports = Map