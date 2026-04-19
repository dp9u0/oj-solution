/*
 * @lc app=leetcode id=2220 lang=javascript
 *
 * [2220] Minimum Bit Flips to Convert Number
 */

// @lc code=start
/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
  let xor = start ^ goal;
  let count = 0;
  while (xor) {
    count += xor & 1;
    xor >>= 1;
  }
  return count;
};
// @lc code=end

// TEST:
console.log(minBitFlips(10, 7)); // 3
console.log(minBitFlips(3, 4)); // 3
console.log(minBitFlips(0, 0)); // 0
