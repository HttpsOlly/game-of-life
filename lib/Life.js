"use strict";

const Map = require("../lib/Map");

module.exports = class Life {

  constructor(initialLiveCells) {
    this.liveCells = initialLiveCells;
  }

  getLiveCells() {
    return this.liveCells;
  }

  next() {
    const nextLiveCells = new Map();
    return new Life(nextLiveCells);
  }

  isCellSurvivable(neighbours) {
    switch(neighbours) {
      case 2: case 3: 
        return true;
      case 0: case 1: case 4: case 5: case 6: case 7: case 8: 
        return false;
      default:
        throw new Error ("Argument out of bounds")
    }
  }
};