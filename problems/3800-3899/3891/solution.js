/*
 * @lc app=leetcode id=3891 lang=javascript
 *
 * [3891] Minimum Increase to Maximize Special Indices
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrease = function(nums) {
  const n = nums.length;
  const m = n - 2; // candidate indices: 1..n-2 (0-indexed), mapped to 0..m-1

  const getCost = (i) => {
    const need = Math.max(nums[i - 1], nums[i + 1]) + 1;
    return Math.max(0, need - nums[i]);
  };

  // dp: [count, cost], maximize count, minimize cost
  // dp0 = not taking current, dp1 = taking current
  let dp0 = [0, 0];
  let dp1 = null;
  let prev0 = [0, 0]; // dp[i-1][0]
  let prev1 = null;   // dp[i-1][1]

  for (let j = 0; j < m; j++) {
    const cost = getCost(j + 1);
    const newDp0 = best(prev0, prev1);
    const newDp1 = [prev0[0] + 1, prev0[1] + cost];
    prev0 = newDp0;
    prev1 = newDp1;
  }

  const result = best(prev0, prev1);
  return result[1];
};

const best = (a, b) => {
  if (!b) return a;
  if (a[0] > b[0]) return a;
  if (b[0] > a[0]) return b;
  return a[1] <= b[1] ? a : b;
};
// @lc code=end

// TEST:
console.log(minIncrease([1,2,2])); // 1
console.log(minIncrease([2,1,1,3])); // 2
console.log(minIncrease([5,2,1,4,3])); // 4
console.log(minIncrease([1,1,1])); // 1
console.log(minIncrease([3,1,2,1,3])); // 6
