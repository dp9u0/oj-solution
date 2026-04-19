/*
 * @lc app=leetcode id=3675 lang=javascript
 *
 * [3675] Minimum Operations to Transform String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
  const seen = new Set(s);
  let maxDist = 0;
  for (const c of seen) {
    const dist = (26 - (c.charCodeAt(0) - 97)) % 26;
    if (dist > maxDist) maxDist = dist;
  }
  return maxDist;
};
// @lc code=end

// TEST:
console.log(minOperations('yz')); // 2
console.log(minOperations('a')); // 0
console.log(minOperations('z')); // 1
console.log(minOperations('ab')); // 25
console.log(minOperations('bcd')); // 25
console.log(minOperations('za')); // 1
console.log(minOperations('aaaa')); // 0
console.log(minOperations('bz')); // 25
