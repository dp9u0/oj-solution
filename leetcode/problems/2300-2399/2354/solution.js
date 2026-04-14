/*
 * @lc app=leetcode id=2354 lang=javascript
 *
 * [2354] Number of Excellent Pairs
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countExcellentPairs = function(nums, k) {
  const unique = [...new Set(nums)];
  const bits = unique.map(x => {
    let count = 0, n = x;
    while (n) {
      n &= n - 1;
      count++;
    }
    return count;
  });

  bits.sort((a, b) => a - b);
  const n = bits.length;
  let result = 0;

  for (let i = 0; i < n; i++) {
    const target = k - bits[i];
    let lo = 0, hi = n;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (bits[mid] >= target) hi = mid;
      else lo = mid + 1;
    }
    result += n - lo;
  }

  return result;
};
// @lc code=end

// TEST:
console.log(countExcellentPairs([1, 2, 3, 1], 3)); // 5
console.log(countExcellentPairs([5, 1, 1], 10)); // 0
console.log(countExcellentPairs([1, 2, 4, 8, 16, 32], 2)); // 36
