/*
 * @lc app=leetcode id=3489 lang=javascript
 *
 * [3489] Zero Array Transformation IV
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function(nums, queries) {
  const n = nums.length;
  const dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Uint8Array(nums[i] + 1);
    dp[i][0] = 1;
  }

  if (nums.every(v => v === 0)) return 0;

  for (let k = 0; k < queries.length; k++) {
    const [l, r, val] = queries[k];
    for (let i = l; i <= r; i++) {
      if (nums[i] === 0) continue;
      for (let s = nums[i]; s >= val; s--) {
        if (dp[i][s - val]) dp[i][s] = 1;
      }
    }
    let ok = true;
    for (let i = 0; i < n && ok; i++) {
      if (nums[i] > 0 && !dp[i][nums[i]]) ok = false;
    }
    if (ok) return k + 1;
  }

  return -1;
};
// @lc code=end

// TEST:
console.log(minZeroArray([2,0,2], [[0,2,1],[0,2,1],[1,1,3]])); // 2
console.log(minZeroArray([4,3,2,1], [[1,3,2],[0,2,1]])); // -1
console.log(minZeroArray([1,2,3,2,1], [[0,1,1],[1,2,1],[2,3,2],[3,4,1],[4,4,1]])); // 4
console.log(minZeroArray([1,2,3,2,6], [[0,1,1],[0,2,1],[1,4,2],[4,4,4],[3,4,1],[4,4,5]])); // 4
console.log(minZeroArray([0,0,0], [[0,2,1]])); // 0
console.log(minZeroArray([1], [[0,0,1]])); // 1
console.log(minZeroArray([5], [[0,0,2],[0,0,3]])); // 2
