"use strict";

// Create a function that takes two or more arrays and returns an array of the
// symmetric difference (△ or ⊕) of the provided arrays.
//
// Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the
// mathematical term "symmetric difference" of two sets is the set of elements
//  which are in either of the two sets, but not in both (A △ B = C = {1, 4}).
// For every additional symmetric difference you take (say on a set D = {2, 3}),
//  you should get the set with elements which are in either of the two the sets
//  but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). The resulting array
// must contain only unique values (no duplicates).
module.exports = function sym() {
  const uniq = new Set();
  // const deleted = new Set();

  for (let i = 0; i < arguments.length; i++) {
    [...new Set(arguments[i])].reduce((acc, curr) => {
      if (acc.has(curr)) acc.delete(curr);
      else acc.add(curr);
      return uniq;
    }, uniq);
  }

  // console.log('uniq:' + [...uniq].sort());

  return [...uniq].sort();
};

// sym([1, 2, 3], [5, 2, 1, 4]);
