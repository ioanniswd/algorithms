"use strict";

const expect = require('chai').expect;
const perm_alone = require('./perm_alone');

describe('perm_alone module', function() {
  it('aab', function() {
    expect(perm_alone('aab')).to.equal(2);
  });

  it('aaa', function() {
    expect(perm_alone('aaa')).to.equal(0);
  });

  it('aabb', function() {
    expect(perm_alone('aabb')).to.equal(8);
  });

  it('abcdefa', function() {
    expect(perm_alone('abcdefa')).to.equal(3600);
  });

  it('abfdefa', function() {
    expect(perm_alone('abfdefa')).to.equal(2640);
  });

  it('zzzzzzzz', function() {
    expect(perm_alone('zzzzzzzz')).to.equal(0);
  });

  it('a', function() {
    expect(perm_alone('a')).to.equal(1);
  });

  it('aaab', function() {
    expect(perm_alone('aaab')).to.equal(0);
  });

  it('aaabb', function() {
    expect(perm_alone('aaabb')).to.equal(12);
  });

});
