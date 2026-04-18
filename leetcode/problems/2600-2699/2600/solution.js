/*
 * @lc app=leetcode id=2600 lang=javascript
 *
 * [2600] K Items With the Maximum Sum
 */

// @lc code=start
/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
  const ones = Math.min(numOnes, k);
  k -= ones;
  const zeros = Math.min(numZeros, k);
  k -= zeros;
  const negs = Math.min(numNegOnes, k);
  return ones - negs;
};
// @lc code=end

// TEST:
console.log(kItemsWithMaximumSum(3, 2, 0, 2)); // 2
console.log(kItemsWithMaximumSum(3, 2, 0, 4)); // 3
console.log(kItemsWithMaximumSum(0, 0, 3, 2)); // -2
console.log(kItemsWithMaximumSum(1, 1, 1, 3)); // 0
console.log(kItemsWithMaximumSum(0, 0, 0, 0)); // 0
