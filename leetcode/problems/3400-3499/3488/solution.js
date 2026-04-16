/*
 * @lc app=leetcode id=3488 lang=javascript
 *
 * [3488] Closest Equal Element Queries
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var solveQueries = function(nums, queries) {
  const n = nums.length;
  const pos = new Map();

  for (let i = 0; i < n; i++) {
    if (!pos.has(nums[i])) pos.set(nums[i], []);
    pos.get(nums[i]).push(i);
  }

  const ans = new Array(n).fill(-1);

  for (const indices of pos.values()) {
    if (indices.length <= 1) continue;
    const m = indices.length;
    for (let k = 0; k < m; k++) {
      const i = indices[k];
      const prev = indices[(k - 1 + m) % m];
      const next = indices[(k + 1) % m];
      const d1 = Math.min(Math.abs(i - prev), n - Math.abs(i - prev));
      const d2 = Math.min(Math.abs(i - next), n - Math.abs(i - next));
      ans[i] = Math.min(d1, d2);
    }
  }

  return queries.map(qi => ans[qi]);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(solveQueries([1,3,1,4,1,3,2], [0,3,5]))); // [2,-1,3]
console.log(JSON.stringify(solveQueries([1,2,3,4], [0,1,2,3]))); // [-1,-1,-1,-1]
console.log(JSON.stringify(solveQueries([1,1,1,1], [0,1,2,3]))); // [1,1,1,1]
console.log(JSON.stringify(solveQueries([5,5], [0,1]))); // [1,1]
console.log(JSON.stringify(solveQueries([1,2,2,1], [0,1,2,3]))); // [1,1,1,1]
