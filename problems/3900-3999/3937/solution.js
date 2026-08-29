/*
 * @lc app=leetcode id=3937 lang=javascript
 *
 * [3937] Minimum Operations to Make Array Modulo Alternating I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
  const evenCost = Array(k).fill(0);
  const oddCost = Array(k).fill(0);
  for (let i = 0; i < nums.length; i++) {
    const r0 = nums[i] % k;
    const target = i % 2 === 0 ? evenCost : oddCost;
    for (let r = 0; r < k; r++) {
      const d = Math.abs(r0 - r);
      target[r] += Math.min(d, k - d);
    }
  }
  let ans = Infinity;
  for (let x = 0; x < k; x++) {
    for (let y = 0; y < k; y++) {
      if (x === y) continue;
      const total = evenCost[x] + oddCost[y];
      if (total < ans) ans = total;
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(minOperations([1, 4, 2, 8], 3) === 2);
console.log(minOperations([1, 1, 1], 3) === 1);
console.log(minOperations([1], 2) === 0);
console.log(minOperations([2, 2], 3) === 1);
console.log(minOperations([1, 2, 3, 4], 2) === 0);
console.log(minOperations([5, 5, 5, 5], 3) === 2);
console.log(minOperations([0, 0], 5) === 1);
console.log(minOperations([1000000000], 100) === 0);
