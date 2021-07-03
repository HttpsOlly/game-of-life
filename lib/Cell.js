"use strict";

module.exports = class Cell {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  hashCode() {
    return 31 * 31 * this.x + 31 * this.y;
  }

  equals(that) {
    return that.x === this.x && that.y === this.y;
  }
};
