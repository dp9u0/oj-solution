/*
 * @lc app=leetcode id=1356 lang=javascript
 *
 * [1356] Sort Integers by The Number of 1 Bits
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
  const popcount = (n) => n.toString(2).replace(/0/g, '').length;
  return arr.sort((a, b) => popcount(a) - popcount(b) || a - b);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]))); // [0,1,2,4,8,3,5,6,7]
console.log(JSON.stringify(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]))); // [1,2,4,8,16,32,64,128,256,512,1024]
