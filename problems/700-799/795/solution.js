/*
 * @lc app=leetcode id=795 lang=javascript
 *
 * [795] Number of Subarrays with Bounded Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function(nums, left, right) {
  const count = (bound) => {
    let ans = 0, cur = 0;
    for (const x of nums) {
      if (x <= bound) {
        cur++;
        ans += cur;
      } else {
        cur = 0;
      }
    }
    return ans;
  };
  return count(right) - count(left - 1);
};
// @lc code=end

// TEST:
console.log(numSubarrayBoundedMax([2,1,4,3], 2, 3)); // 3
console.log(numSubarrayBoundedMax([2,9,2,5,6], 2, 8)); // 7
console.log(numSubarrayBoundedMax([1], 1, 1)); // 1
console.log(numSubarrayBoundedMax([1,2,3], 1, 3)); // 6
console.log(numSubarrayBoundedMax([0,0,0], 1, 2)); // 0
