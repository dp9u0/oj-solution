/*
 * @lc app=leetcode id=3950 lang=javascript
 *
 * [3950] Exactly One Consecutive Set Bits Pair
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var consecutiveSetBits = function(n) {
  let x = n & (n >> 1);
  let count = 0;
  while (x) {
    x &= x - 1;
    count++;
  }
  return count === 1;
};
// @lc code=end

// TEST:
console.log(consecutiveSetBits(6) === true);   // 110 -> one '11'
console.log(consecutiveSetBits(5) === false);  // 101 -> no '11'
console.log(consecutiveSetBits(0) === false);  // 0 -> no bits
console.log(consecutiveSetBits(3) === true);   // 11 -> one '11'
console.log(consecutiveSetBits(7) === false);  // 111 -> two overlapping pairs
console.log(consecutiveSetBits(14) === false); // 1110 -> two pairs
console.log(consecutiveSetBits(12) === true);  // 1100 -> one '11'
console.log(consecutiveSetBits(100000) === false); // 11000011010100000 -> pairs at high end
