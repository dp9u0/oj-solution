/*
 * @lc app=leetcode id=718 lang=javascript
 *
 * [718] Maximum Length of Repeated Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  let prev = Array(n + 1).fill(0);
  let ans = 0;
  for (let i = 1; i <= m; i++) {
    const cur = Array(n + 1).fill(0);
    for (let j = 1; j <= n; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        cur[j] = prev[j - 1] + 1;
        if (cur[j] > ans) ans = cur[j];
      }
    }
    prev = cur;
  }
  return ans;
};
// @lc code-end

// TEST:
console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]) === 3);
console.log(findLength([0, 0, 0, 0, 0], [0, 0, 0, 0, 0]) === 5);
console.log(findLength([1], [2]) === 0);
console.log(findLength([1, 2], [2, 1]) === 1);
console.log(findLength([1, 2, 3], [4, 5, 6]) === 0);
console.log(findLength([5, 6, 7], [5, 6, 7]) === 3);
