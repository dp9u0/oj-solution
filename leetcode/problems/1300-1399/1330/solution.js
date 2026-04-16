/*
 * @lc app=leetcode id=1330 lang=javascript
 *
 * [1330] Reverse Subarray To Maximize Array Value
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxValueAfterReverse = function(nums) {
  const n = nums.length;
  let V = 0;
  for (let i = 0; i < n - 1; i++) V += Math.abs(nums[i] - nums[i + 1]);

  let maxDelta = 0;

  // Case: reverse prefix [0, r]
  for (let r = 0; r < n - 1; r++) {
    maxDelta = Math.max(maxDelta,
      Math.abs(nums[0] - nums[r + 1]) - Math.abs(nums[r] - nums[r + 1]));
  }

  // Case: reverse suffix [l, n-1]
  for (let l = 1; l < n; l++) {
    maxDelta = Math.max(maxDelta,
      Math.abs(nums[l - 1] - nums[n - 1]) - Math.abs(nums[l - 1] - nums[l]));
  }

  // Case: reverse middle [l, r], 1 <= l <= r <= n-2
  // h[i] = min(a[i], a[i+1]), k[i] = max(a[i], a[i+1])
  const h = new Array(n - 1);
  const k = new Array(n - 1);
  for (let i = 0; i < n - 1; i++) {
    h[i] = Math.min(nums[i], nums[i + 1]);
    k[i] = Math.max(nums[i], nums[i + 1]);
  }

  // Case A: max 2*(maxH[j-1] - k[j]) over j >= 1
  let maxH = h[0];
  for (let j = 1; j < n - 1; j++) {
    maxDelta = Math.max(maxDelta, 2 * (maxH - k[j]));
    maxH = Math.max(maxH, h[j]);
  }

  // Case D: max 2*(h[j] - minK[j-1]) over j >= 1
  let minK = k[0];
  for (let j = 1; j < n - 1; j++) {
    maxDelta = Math.max(maxDelta, 2 * (h[j] - minK));
    minK = Math.min(minK, k[j]);
  }

  return V + maxDelta;
};
// @lc code=end

// TEST:
console.log(maxValueAfterReverse([2, 3, 1, 5, 4])); // 10
console.log(maxValueAfterReverse([2, 4, 9, 24, 2, 1, 10])); // 68
console.log(maxValueAfterReverse([1, 2])); // 1
console.log(maxValueAfterReverse([5, 1, 5])); // 8
console.log(maxValueAfterReverse([3, 3, 3])); // 0
