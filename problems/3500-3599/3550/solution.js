/*
 * @lc app=leetcode.cn id=3550 lang=javascript
 *
 * [3550] 数位和等于下标的最小下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
  const digitSum = (x) => {
    let sum = 0;
    while (x > 0) {
      sum += x % 10;
      x = Math.floor(x / 10);
    }
    return sum;
  };
  for (let i = 0; i < nums.length; i++) {
    if (digitSum(nums[i]) === i) return i;
  }
  return -1;
};
// @lc code=end

// TEST:
console.log(smallestIndex([1, 3, 2])); // 2
console.log(smallestIndex([1, 10, 11])); // 1
console.log(smallestIndex([1, 2, 3])); // -1
console.log(smallestIndex([0])); // 0
console.log(smallestIndex([1000, 1, 2])); // 1
console.log(smallestIndex([10, 20, 30])); // -1
