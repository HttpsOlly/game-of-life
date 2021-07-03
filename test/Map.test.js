"use strict";

const expect = require("chai").expect;

const Cell = require("../lib/Cell");
const Map = require("../lib/Map");

describe("Map Tests", () => {

  describe("Emptyness", () => {

    it("should create an empty Map", () => {
      const map = new Map();

      expect(map.size).to.equal(0);
    });
  });

  describe("Populate", () => {

    it("should create a Map with one Cell", () => {
      const map = new Map();
      map.addCells([new Cell(0,0)]);

      expect(map.size).to.equal(1);
    });

    it("should create a Map with one Cell with identical Cells passed as an array", () => {
      const map = new Map();
      map.addCells([new Cell(0,0), new Cell(0,0)]);

      expect(map.size).to.equal(1);
    });
  });
});
