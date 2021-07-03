'use strict';

const { expect, assert } = require("chai");

const Map = require("../lib/Map");
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
      expect(life.isCellSurvivable(3)).to.equal(true);
    })
  })


});
