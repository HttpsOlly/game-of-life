'use strict';

const { expect, assert } = require("chai");

const Life = require("../lib/Life");

describe("Life Tests", () => {

  describe("Scenario 0: No interactions", () => {
    it("should produce no live cells from no live cells", () => {
      const life = new Life();
      expect(life.next().getLiveCells().size).to.equal(0);
    })
  })
});
