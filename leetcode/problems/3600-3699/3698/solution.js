/*
 * @lc app=leetcode id=3698 lang=javascript
 *
 * [3698] Split Array With Minimum Difference
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var splitArray = function(nums) {
  const n = nums.length;
  const leftInc = new Array(n).fill(false);
  const rightDec = new Array(n).fill(false);

  leftInc[0] = true;
  for (let i = 1; i < n; i++) {
    leftInc[i] = leftInc[i - 1] && nums[i] > nums[i - 1];
  }

  rightDec[n - 1] = true;
  for (let i = n - 2; i >= 0; i--) {
    rightDec[i] = rightDec[i + 1] && nums[i] > nums[i + 1];
  }

  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + nums[i];

  let ans = -1;
  for (let i = 0; i < n - 1; i++) {
    if (leftInc[i] && rightDec[i + 1]) {
      const leftSum = prefix[i + 1];
      const rightSum = prefix[n] - prefix[i + 1];
      const diff = Math.abs(leftSum - rightSum);
      if (ans === -1 || diff < ans) ans = diff;
    }
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(splitArray([1,3,2])); // 2
console.log(splitArray([1,2,4,3])); // 4
console.log(splitArray([3,1,2])); // -1
console.log(splitArray([1,2])); // 1
console.log(splitArray([1,5,4,3,2])); // 3
