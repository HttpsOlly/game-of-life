"use strict";

const expect = require("chai").expect;

const Cell = require("../lib/Cell");

describe("Cell Tests", () => {

  describe("Equality", () => {

    it("should return true for cells with the same x and y coordinates", () => {
      const c1 = new Cell(0, 1);
      const c2 = new Cell(0, 1);

      expect(c1.equals(c2)).to.equal(true);
    });
  });

  describe("Inequality", () => {

    it("should return false for cells with same x but different y coordinates", () => {
      let cell1 = new Cell(0, 0);
      let cell2 = new Cell(0, 1);
      expect(cell1.equals(cell2)).to.equal(false);
    });

    it("should return false for cells with same y but different x coordinates", () => {
      let cell1 = new Cell(0, 0);
      let cell2 = new Cell(1, 0);
      expect(cell1.equals(cell2)).to.equal(false);
    });

    it("should return false for cells with different x and y coordinates", () => {
      let cell1 = new Cell(0, 1);
      let cell2 = new Cell(1, 0);
      expect(cell1.equals(cell2)).to.equal(false);
    });
  });

});
