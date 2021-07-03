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

  describe("Equality", () => {

    it("should discover equality for two identical Map objects", () => {
        const map1 = new Map();
        const map2 = new Map();
        map1.addCells([new Cell(1,2), new Cell(3,4)]);
        map2.addCells([new Cell(1,2), new Cell(3,4)]);

        expect(map1.equals(map2)).to.equal(true);
    })

    it("should discover inequality for two non-identical Map objects", () => {
      const map1 = new Map();
      const map2 = new Map();
      map1.addCells([new Cell(0,0), new Cell(0,0)]);
      map2.addCells([new Cell(1,1), new Cell(1,1)]);

      expect(map1.equals(map2)).to.equal(false);
    })

    it("should discover inequality for two non-identical sized Map objects", () => {
      const map1 = new Map();
      const map2 = new Map();
      map1.addCells([new Cell(0,0)]);
      map2.addCells([new Cell(0,0), new Cell(1,1)]);

      expect(map1.equals(map2)).to.equal(false);
    })
  });
});
