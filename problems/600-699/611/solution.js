/*
 * @lc app=leetcode id=611 lang=javascript
 *
 * [611] Valid Triangle Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let count = 0;

  for (let k = n - 1; k >= 2; k--) {
    let i = 0, j = k - 1;
    while (i < j) {
      if (nums[i] + nums[j] > nums[k]) {
        count += j - i;
        j--;
      } else {
        i++;
      }
    }
  }

  return count;
};
// @lc code=end

// TEST:
console.log(triangleNumber([2, 2, 3, 4])); // 3
console.log(triangleNumber([4, 2, 3, 4])); // 4
console.log(triangleNumber([0, 0, 0])); // 0
