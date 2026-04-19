/*
 * @lc app=leetcode id=1689 lang=javascript
 *
 * [1689] Partitioning Into Minimum Number Of Deci-Binary Numbers
 */

// @lc code=start
/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
  let max = 0;
  for (const ch of n) {
    const d = ch.charCodeAt(0) - 48;
    if (d > max) max = d;
    if (max === 9) break;
  }
  return max;
};
// @lc code=end

// TEST:
console.log(minPartitions('32')); // 3
console.log(minPartitions('82734')); // 8
console.log(minPartitions('27346209830709182346')); // 9
