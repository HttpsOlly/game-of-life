"use strict";

module.exports = class Life {

  constructor(initialLiveCells) {
    this.liveCells = initialLiveCells;
  }

  getLiveCells() {
    return this.liveCells;
  }

  isCellSurvivable(neighbours) {
    switch(neighbours) {
      case 0: case 1:
        return false;
      default:
        throw new Error ("Argument out of bounds")
    }
  }
};