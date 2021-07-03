"use strict";

const expect = require("chai").expect;

const Cell = require("../lib/Cell");
const Map = require("../lib/Map");

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

  describe("Uniqueness", () => {

    it("should calculate identical hashes of cells with the same x and y coordinates", () => {
      expect(new Cell(1, 1).hashCode()).to.equal(new Cell(1, 1).hashCode());
    })

    it("should create only one entry for cells with the same x and y coordinates", () => {
      const collection = new Map();
      collection.addCells([
        new Cell(0, 0), 
        new Cell(0, 0),
        new Cell(1, 1),
      ]);

      expect(collection.size).to.equal(2);
    });

    it("should identify two equivalent sets of cells containing cells with identical x and y coordinates", function () {
      const collection1 = new Map();
      collection1.addCells([new Cell(1, 1)]);

      const collection2 = new Map();
      collection2.addCells([new Cell(1, 1)]);

      expect(collection1.equals(collection2)).to.equal(true);
    });
  });
});
