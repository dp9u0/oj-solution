/*
 * @lc app=leetcode id=3911 lang=javascript
 *
 * [3911] K-th Smallest Remaining Even Integer in Subarray Queries
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var kthRemainingInteger = function(nums, queries) {
  const n = nums.length;
  const preEven = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    preEven[i + 1] = preEven[i] + (nums[i] % 2 === 0 ? 1 : 0);
  }
  // evens in nums[l..r] with value <= x
  const evenCount = (l, r, x) => {
    let lo = l;
    let hi = r + 1;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (nums[mid] <= x) lo = mid + 1;
      else hi = mid;
    }
    if (lo - 1 < l) return 0;
    return preEven[lo] - preEven[l];
  };
  return queries.map(([l, r, k]) => {
    let lo = 1;
    let hi = k + n + 1;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (mid - evenCount(l, r, 2 * mid) >= k) hi = mid;
      else lo = mid + 1;
    }
    return 2 * lo;
  });
};
// @lc code=end

// TEST:
console.log(JSON.stringify(kthRemainingInteger([1, 4, 7], [[0, 2, 1], [1, 1, 2], [0, 0, 3]])) === JSON.stringify([2, 6, 6]));
console.log(JSON.stringify(kthRemainingInteger([2, 5, 8], [[0, 1, 2], [1, 2, 1], [0, 2, 4]])) === JSON.stringify([6, 2, 12]));
console.log(JSON.stringify(kthRemainingInteger([3, 6], [[0, 1, 1], [1, 1, 3]])) === JSON.stringify([2, 8]));
console.log(JSON.stringify(kthRemainingInteger([2], [[0, 0, 1]])) === JSON.stringify([4]));
console.log(JSON.stringify(kthRemainingInteger([2, 4, 6, 8], [[0, 3, 1], [0, 3, 3]])) === JSON.stringify([10, 14]));
