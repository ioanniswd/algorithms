"use strict";

const expect = require('chai').expect;
const update_inventory = require('./update_inventory');

describe('update_inventory', function() {
  it('some same items, some new', function() {
    expect(update_inventory([
      [21, "Bowling Ball"],
      [2, "Dirty Sock"],
      [1, "Hair Pin"],
      [5, "Microphone"]
    ], [
      [2, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [67, "Bowling Ball"],
      [7, "Toothpaste"]
    ])).to.deep.equal([
      [88, "Bowling Ball"],
      [2, "Dirty Sock"],
      [3, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [5, "Microphone"],
      [7, "Toothpaste"]
    ]);
  });

  it('only items found in inventory', function() {
    expect(update_inventory([
      [21, "Bowling Ball"],
      [2, "Dirty Sock"],
      [1, "Hair Pin"],
      [5, "Microphone"]
    ], [])).to.deep.equal([
      [21, "Bowling Ball"],
      [2, "Dirty Sock"],
      [1, "Hair Pin"],
      [5, "Microphone"]
    ]);
  });

  it('only items found in inventory but not in same order', function() {
    expect(update_inventory([], [
      [2, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [67, "Bowling Ball"],
      [7, "Toothpaste"]
    ])).to.deep.equal([
      [67, "Bowling Ball"],
      [2, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [7, "Toothpaste"]
    ]);
  });

  it('previously empty inventory', function() {
    expect(update_inventory([
      [0, "Bowling Ball"],
      [0, "Dirty Sock"],
      [0, "Hair Pin"],
      [0, "Microphone"]
    ], [
      [1, "Hair Pin"],
      [1, "Half-Eaten Apple"],
      [1, "Bowling Ball"],
      [1, "Toothpaste"]
    ])).to.deep.equal([
      [1, "Bowling Ball"],
      [0, "Dirty Sock"],
      [1, "Hair Pin"],
      [1, "Half-Eaten Apple"],
      [0, "Microphone"],
      [1, "Toothpaste"]
    ]);
  });
});
