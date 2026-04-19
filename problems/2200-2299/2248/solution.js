/*
 * @lc app=leetcode id=2248 lang=javascript
 *
 * [2248] Intersection of Multiple Arrays
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
  const count = new Array(1001).fill(0);
  for (const arr of nums) {
    for (const n of arr) count[n]++;
  }
  const result = [];
  for (let i = 1; i <= 1000; i++) {
    if (count[i] === nums.length) result.push(i);
  }
  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(intersection([[3, 1, 2, 4, 5], [1, 2, 3, 4], [3, 4, 5, 6]]))); // [3,4]
console.log(JSON.stringify(intersection([[1, 2, 3], [4, 5, 6]]))); // []
