/*
 * @lc app=leetcode id=2562 lang=javascript
 *
 * [2562] Find the Array Concatenation Value
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
  let res = 0, l = 0, r = nums.length - 1;
  while (l < r) {
    res += Number(String(nums[l]) + String(nums[r]));
    l++;
    r--;
  }
  if (l === r) res += nums[l];
  return res;
};
// @lc code=end

// TEST:
console.log(findTheArrayConcVal([7,52,2,4])); // 596
console.log(findTheArrayConcVal([5,14,13,8,12])); // 673
console.log(findTheArrayConcVal([1])); // 1
console.log(findTheArrayConcVal([1,2])); // 12
console.log(findTheArrayConcVal([10,1])); // 101
