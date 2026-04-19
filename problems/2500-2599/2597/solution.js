/*
 * @lc app=leetcode id=2597 lang=javascript
 *
 * [2597] The Number of Beautiful Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function(nums, k) {
  const groups = {};
  for (const num of nums) {
    const r = num % k;
    if (!groups[r]) groups[r] = {};
    groups[r][num] = (groups[r][num] || 0) + 1;
  }

  let result = 1;

  for (const r in groups) {
    const keys = Object.keys(groups[r]).map(Number).sort((a, b) => a - b);
    let dp0 = 1, dp1 = (1 << groups[r][keys[0]]) - 1;

    for (let i = 1; i < keys.length; i++) {
      const c = groups[r][keys[i]];
      const takeWays = (1 << c) - 1;
      const ndp0 = dp0 + dp1;
      const ndp1 = keys[i] - keys[i - 1] === k ? dp0 * takeWays : (dp0 + dp1) * takeWays;
      dp0 = ndp0;
      dp1 = ndp1;
    }
    result *= (dp0 + dp1);
  }

  return result - 1;
};
// @lc code=end

// TEST:
console.log(beautifulSubsets([2,4,6], 2)); // 4
console.log(beautifulSubsets([1], 1)); // 1
console.log(beautifulSubsets([4,2,5,9,10,3], 1)); // 23
