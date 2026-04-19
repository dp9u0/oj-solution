/*
 * @lc app=leetcode id=2607 lang=javascript
 *
 * [2607] Make K-Subarray Sums Equal
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var makeSubKSumEqual = function(arr, k) {
  const n = arr.length;
  const g = gcd(n, k);
  let result = 0;

  for (let i = 0; i < g; i++) {
    const group = [];
    for (let j = i; j < n; j += g) {
      group.push(arr[j]);
    }
    group.sort((a, b) => a - b);
    const median = group[group.length >> 1];
    for (const v of group) {
      result += Math.abs(v - median);
    }
  }

  return result;
};

const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
// @lc code=end

// TEST:
console.log(makeSubKSumEqual([1, 4, 1, 3], 2)); // 1
console.log(makeSubKSumEqual([2, 5, 5, 7], 3)); // 5
