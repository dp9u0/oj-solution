/*
 * @lc app=leetcode id=3281 lang=javascript
 *
 * [3281] Maximize Score of Numbers in Ranges
 */

// @lc code=start
/**
 * @param {number[]} start
 * @param {number} d
 * @return {number}
 */
var maxPossibleScore = function(start, d) {
  start.sort((a, b) => a - b);
  const n = start.length;

  const check = (mid) => {
    let prev = start[0];
    for (let i = 1; i < n; i++) {
      const need = prev + mid;
      if (need > start[i] + d) return false;
      prev = Math.max(start[i], need);
    }
    return true;
  };

  let lo = 0, hi = start[n - 1] + d - start[0];
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    if (check(mid)) lo = mid;
    else hi = mid - 1;
  }
  return lo;
};
// @lc code=end

// TEST:
console.log(maxPossibleScore([6,0,3], 2)); // 4
console.log(maxPossibleScore([2,6,13,13], 5)); // 5
console.log(maxPossibleScore([1,3], 0)); // 2
console.log(maxPossibleScore([0,0], 0)); // 0
console.log(maxPossibleScore([1,100], 0)); // 99
