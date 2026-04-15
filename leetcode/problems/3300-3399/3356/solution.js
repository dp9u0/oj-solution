/*
 * @lc app=leetcode id=3356 lang=javascript
 *
 * [3356] Zero Array Transformation II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function(nums, queries) {
  const n = nums.length;
  const q = queries.length;

  const check = (k) => {
    const diff = new Array(n + 1).fill(0);
    for (let i = 0; i < k; i++) {
      const [l, r, val] = queries[i];
      diff[l] += val;
      diff[r + 1] -= val;
    }
    let cur = 0;
    for (let j = 0; j < n; j++) {
      cur += diff[j];
      if (cur < nums[j]) return false;
    }
    return true;
  };

  if (!check(q)) return -1;

  let lo = 0, hi = q;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (check(mid)) hi = mid;
    else lo = mid + 1;
  }

  return lo;
};
// @lc code=end

// TEST:
console.log(minZeroArray([2,0,2], [[0,2,1],[0,2,1],[1,1,3]])); // 2
console.log(minZeroArray([4,3,2,1], [[1,3,2],[0,2,1]])); // -1
console.log(minZeroArray([0,0,0], [[0,2,1]])); // 0
