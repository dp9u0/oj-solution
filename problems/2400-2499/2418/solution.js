/*
 * @lc app=leetcode id=2418 lang=javascript
 *
 * [2418] Sort the People
 */

// @lc code=start
/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
  const indices = names.map((_, i) => i);
  indices.sort((a, b) => heights[b] - heights[a]);
  return indices.map(i => names[i]);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(sortPeople(["Mary","John","Emma"], [180,165,170])));  // ["Mary","Emma","John"]
console.log(JSON.stringify(sortPeople(["Alice","Bob","Bob"], [155,185,150])));   // ["Bob","Alice","Bob"]
