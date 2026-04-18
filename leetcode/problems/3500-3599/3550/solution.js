/*
 * @lc app=leetcode id=3550 lang=javascript
 *
 * [3550] Smallest Index With Digit Sum Equal to Index
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
  const digitSum = (n) => {
    let s = 0;
    while (n > 0) { s += n % 10; n = Math.floor(n / 10); }
    return s;
  };
  for (let i = 0; i < nums.length; i++) {
    if (digitSum(nums[i]) === i) return i;
  }
  return -1;
};
// @lc code=end

// TEST:
console.log(smallestIndex([1,3,2])); // 2
console.log(smallestIndex([1,10,11])); // 1
console.log(smallestIndex([1,2,3])); // -1
console.log(smallestIndex([0])); // 0
console.log(smallestIndex([100, 1, 2])); // 1
