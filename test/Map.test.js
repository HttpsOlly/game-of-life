"use strict";

const expect = require("chai").expect;

const Map = require("../lib/Map");

describe("Map Tests", () => {

  describe("Emptyness", () => {

    it("should create an empty Map", () => {
      const map = new Map();

      expect(map.size).to.equal(0);
    });
  });


});
