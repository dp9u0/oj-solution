/*
 * @lc app=leetcode id=1752 lang=javascript
 *
 * [1752] Check if Array Is Sorted and Rotated
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
  const n = nums.length;
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] > nums[(i + 1) % n]) cnt++;
  }
  return cnt <= 1;
};
// @lc code=end

// TEST:
console.log(check([3,4,5,1,2])); // true
console.log(check([2,1,3,4])); // false
console.log(check([1,2,3])); // true
console.log(check([1,1,1])); // true
