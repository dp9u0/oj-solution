/*
 * @lc app=leetcode id=3040 lang=javascript
 *
 * [3040] Maximum Number of Operations With the Same Score II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
  const n = nums.length;

  const solve = (target) => {
    const memo = new Map();
    const dfs = (l, r) => {
      if (l >= r) return 0;
      const key = l * n + r;
      if (memo.has(key)) return memo.get(key);
      let result = 0;
      if (nums[l] + nums[l + 1] === target) result = Math.max(result, 1 + dfs(l + 2, r));
      if (nums[r - 1] + nums[r] === target) result = Math.max(result, 1 + dfs(l, r - 2));
      if (nums[l] + nums[r] === target) result = Math.max(result, 1 + dfs(l + 1, r - 1));
      memo.set(key, result);
      return result;
    };
    return dfs(0, n - 1);
  };

  const t1 = nums[0] + nums[1];
  const t2 = nums[n - 2] + nums[n - 1];
  const t3 = nums[0] + nums[n - 1];

  return Math.max(solve(t1), solve(t2), solve(t3));
};
// @lc code=end

// TEST:
console.log(maxOperations([3,2,1,2,3,4])); // 3
console.log(maxOperations([3,2,6,1,4])); // 2
