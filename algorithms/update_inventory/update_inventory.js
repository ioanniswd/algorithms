"use strict";

// Compare and update the inventory stored in a 2D array against a second 2D
// array of a fresh delivery. Update the current existing inventory item
// quantities (in arr1). If an item cannot be found, add the new item and
// quantity into the inventory array. The returned inventory array should be in
// alphabetical order by item.

module.exports = function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!

  return arr2
    .reduce((acc, curr) => {
      const i = acc.findIndex(item => item[1] == curr[1]);

      if (i == -1) acc.push(curr);
      else acc[i][0] += curr[0];

      return acc;
    }, [...arr1])
    .sort((a, b) => a[1].toUpperCase() < b[1].toUpperCase() ? -1 : a[1].toUpperCase() > b[1].toUpperCase() ? 1 : 0);
};

// Example inventory lists
// var curInv = [
//     [21, "Bowling Ball"],
//     [2, "Dirty Sock"],
//     [1, "Hair Pin"],
//     [5, "Microphone"]
// ];
//
// var newInv = [
//     [2, "Hair Pin"],
//     [3, "Half-Eaten Apple"],
//     [67, "Bowling Ball"],
//     [7, "Toothpaste"]
// ];
//
// updateInventory(curInv, newInv);
