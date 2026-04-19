/*
 * @lc app=leetcode id=3022 lang=javascript
 *
 * [3022] Minimize OR of Remaining Elements Using Operations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOrAfterOperations = function(nums, k) {
  let mask = 0;
  for (let b = 29; b >= 0; b--) {
    const target = mask | (1 << b);
    let ops = 0;
    let curAnd = (1 << 30) - 1; // all 1s
    for (const num of nums) {
      curAnd &= num;
      if ((curAnd & target) === 0) {
        // This segment is good, no need to merge further
        curAnd = (1 << 30) - 1;
      } else {
        ops++;
      }
    }
    if (ops <= k) {
      mask = target;
    }
  }
  return ((1 << 30) - 1) ^ mask;
};
// @lc code=end

// TEST:
console.log(minOrAfterOperations([3, 5, 3, 2, 7], 2)); // 3
console.log(minOrAfterOperations([7, 3, 15, 14, 2, 8], 4)); // 2
console.log(minOrAfterOperations([10, 7, 10, 3, 9, 14, 9, 4], 1)); // 15
