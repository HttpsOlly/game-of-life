'use strict';

const { expect, assert } = require("chai");

const Cell = require("../lib/Cell");
const Map  = require("../lib/Map");
const Life = require("../lib/Life");

describe("Life Tests", () => {

  describe("Scenario 0: No interactions", () => {
    it("should produce no live cells from no live cells", () => {
      const life = new Life();
      expect(life.next().getLiveCells().size).to.equal(0);
    })
  })
  
  describe("Scenario 1: Underpopulation", () => {
    it("should die when a cell has fewer than two neighbours", () => {
      const life = new Life(new Map());
      expect(life.isCellSurvivable(0)).to.equal(false);
      expect(life.isCellSurvivable(1)).to.equal(false);
    })
  })
  
  describe("Scenario 2: Overcrowding", () => {
    it("should die when a cell has more than three neighbours", () => {
      const life = new Life(new Map());
      expect(life.isCellSurvivable(4)).to.equal(false);
      expect(life.isCellSurvivable(5)).to.equal(false);
      expect(life.isCellSurvivable(6)).to.equal(false);
      expect(life.isCellSurvivable(7)).to.equal(false);
      expect(life.isCellSurvivable(8)).to.equal(false);
    })
  })

  describe("Scenario 3: Survival", () => {
    it("should stay alive when a cell has two or three neighbours", () => {
      const life = new Life(new Map());
      expect(life.isCellSurvivable(2)).to.equal(true);
    })
  })

  describe("Scenario 4: Creation of Life", () => {
    it("should create a new cell when an empty cell has exactly three neighbours", () => {
      const life = new Life(new Map());
      expect(life.isCellSurvivable(3)).to.equal(true);
    })
  })

  describe("Scenario 5: Grid with no live cells", () => {
    it("should evolve an empty grid into an empty grid", () => {
      const emptyLiveCells = new Map();
      const life1 = new Life(emptyLiveCells);
      assert.deepEqual(life1, life1.next());
    })
  })

  describe("Neighbours", () => {

    it("should be zero with no neighbours", () => {
      const cell = new Cell(0,1);
      const cells = new Map();
      cells.addCells([cell]);
      const life = new Life(cells);

      expect(life.neighbours(cell)).to.equal(0);
    })

    it("should count vertical neighbours", () => {
      const cell1 = new Cell(1,0);
      const cell2 = new Cell(1,1);
      const cells = new Map();
      cells.addCells([cell1, cell2]);
      const life = new Life(cells);

      expect(life.neighbours(cell1)).to.equal(1);
      expect(life.neighbours(cell2)).to.equal(1);
    })

    it("should not count itself", () => {
      const cell = new Cell(13,13);
      const cells = new Map();
      cells.addCells([cell]);
      const life = new Life(cells);

      expect(life.neighbours(cell)).to.equal(0);
    })

    it("should count horizontal neighbours", () => {
      const cell1 = new Cell(0,1);
      const cell2 = new Cell(1,1);
      const cells = new Map();
      cells.addCells([cell1, cell2]);
      const life = new Life(cells);

      expect(life.neighbours(cell1)).to.equal(1);
      expect(life.neighbours(cell2)).to.equal(1); 
    })

    it("should count diagonal neighbours", () => {
      const topLeft     = new Cell(1, 3);
      const topRight    = new Cell(3, 3);
      const bottomLeft  = new Cell(1, 1);
      const bottomRight = new Cell(3, 1);
      const middle      = new Cell(2, 2);

      const cells = new Map();
      cells.addCells([topLeft, bottomLeft, bottomRight, topRight, middle]);
      const life = new Life(cells);

      expect(life.neighbours(middle)).to.equal(4);
    })
  })

  describe("Scenario 6: Expected game outcome for seeded grid", () => {
    const horzLiveCells = new Map();
    horzLiveCells.addCells([new Cell(1, 2), new Cell(2, 2), new Cell(3, 2)]);
    
    const vertLiveCells = new Map();
    vertLiveCells.addCells([new Cell(2, 1), new Cell(2, 2), new Cell(2, 3)]);

    it("should follow the pattern of a Blinker", () => {
      expect(horzLiveCells.size).to.equal(3);

      const horzLife = new Life(horzLiveCells);
      const vertLife = new Life(vertLiveCells);

      assert.deepEqual(horzLife.next(), vertLife);
      assert.deepEqual(vertLife.next(), horzLife);
    })
  })
});
