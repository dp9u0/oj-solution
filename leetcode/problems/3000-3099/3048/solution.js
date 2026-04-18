/*
 * @lc app=leetcode id=3048 lang=javascript
 *
 * [3048] Earliest Second to Mark Indices I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} changeIndices
 * @return {number}
 */
var earliestSecondToMarkIndices = function(nums, changeIndices) {
  const n = nums.length, m = changeIndices.length;
  const check = (T) => {
    const last = new Int32Array(n + 1).fill(-1);
    for (let s = 0; s < T; s++) {
      last[changeIndices[s]] = s + 1;
    }
    for (let i = 1; i <= n; i++) {
      if (last[i] === -1) return false;
    }
    const indices = Array.from({ length: n }, (_, i) => i + 1);
    indices.sort((a, b) => last[a] - last[b]);
    let totalDec = 0;
    for (let k = 0; k < n; k++) {
      totalDec += nums[indices[k] - 1];
      if (totalDec + k + 1 > last[indices[k]]) return false;
    }
    return true;
  };
  let lo = n, hi = m;
  // Need at least sum(nums) + n seconds, but hi = m
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (check(mid)) hi = mid;
    else lo = mid + 1;
  }
  return check(lo) ? lo : -1;
};
// @lc code=end

// TEST:
console.log(earliestSecondToMarkIndices([2, 2, 0], [2, 2, 2, 2, 3, 2, 2, 1])); // 8
console.log(earliestSecondToMarkIndices([1, 3], [1, 1, 1, 2, 1, 1, 1])); // 6
console.log(earliestSecondToMarkIndices([0, 1], [2, 2, 2])); // -1
console.log(earliestSecondToMarkIndices([1, 1], [1, 2])); // 2
console.log(earliestSecondToMarkIndices([3, 0], [1, 1, 1, 2])); // 4
