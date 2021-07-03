"use strict";

module.exports = class Life {

  constructor(initialLiveCells) {
    this.liveCells = initialLiveCells;
  }

  getLiveCells() {
    return this.liveCells;
  }
};