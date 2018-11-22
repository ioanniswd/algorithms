"use strict";

const expect = require('chai').expect;
const symmetric_difference = require('./symmetric_difference');
const symmetric_difference_reduce = require('./symmetric_difference_reduce');

describe('symmetric_difference', function() {
  describe('simple', function() {
    it('[1, 2, 3], [5, 2, 1, 4]', function() {
      expect(symmetric_difference([1, 2, 3], [5, 2, 1, 4])).to.deep.equal([
        3, 4, 5
      ]);
    });

    it('[1, 2, 3, 3], [5, 2, 1, 4]', function() {
      // NOTE: tmp error to test build failing
      // expect(symmetric_difference([1, 2, 3, 3], [5, 2, 1, 4])).to.deep.equal([
      //   3, 4, 5
      // ]);
      expect(symmetric_difference([1, 2, 3, 3], [5, 2, 1, 4])).to.deep.equal([]);
    });

    it('[1, 2, 3], [5, 2, 1, 4, 5]', function() {
      expect(symmetric_difference([1, 2, 3], [5, 2, 1, 4, 5])).to.deep.equal([
        3, 4, 5
      ]);
    });

    it('[1, 2, 5], [2, 3, 5], [3, 4, 5]', function() {
      expect(symmetric_difference([1, 2, 5], [2, 3, 5], [3, 4, 5])).to.deep.equal([
        1, 4, 5
      ]);
    });

    it('[1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]', function() {
      expect(symmetric_difference([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])).to.deep.equal([
        1, 4, 5
      ]);
    });

    it('[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]', function() {
      expect(symmetric_difference([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])).to.deep.equal([
        2, 3, 4, 6, 7
      ]);
    });

    it('[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]', function() {
      expect(symmetric_difference([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])).to.deep.equal([
        1, 2, 4, 5, 6, 7, 8, 9
      ]);
    });
  });

  describe('reduce', function() {
    it('[1, 2, 3], [5, 2, 1, 4]', function() {
      expect(symmetric_difference_reduce([1, 2, 3], [5, 2, 1, 4])).to.deep.equal([
        3, 4, 5
      ]);
    });

    it('[1, 2, 3, 3], [5, 2, 1, 4]', function() {
      expect(symmetric_difference_reduce([1, 2, 3, 3], [5, 2, 1, 4])).to.deep.equal([
        3, 4, 5
      ]);
    });

    it('[1, 2, 3], [5, 2, 1, 4, 5]', function() {
      expect(symmetric_difference_reduce([1, 2, 3], [5, 2, 1, 4, 5])).to.deep.equal([
        3, 4, 5
      ]);
    });

    it('[1, 2, 5], [2, 3, 5], [3, 4, 5]', function() {
      expect(symmetric_difference_reduce([1, 2, 5], [2, 3, 5], [3, 4, 5])).to.deep.equal([
        1, 4, 5
      ]);
    });

    it('[1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]', function() {
      expect(symmetric_difference_reduce([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])).to.deep.equal([
        1, 4, 5
      ]);
    });

    it('[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]', function() {
      expect(symmetric_difference_reduce([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])).to.deep.equal([
        2, 3, 4, 6, 7
      ]);
    });

    it('[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]', function() {
      expect(symmetric_difference_reduce([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])).to.deep.equal([
        1, 2, 4, 5, 6, 7, 8, 9
      ]);
    });
  });
});
