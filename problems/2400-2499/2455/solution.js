/*
 * @lc app=leetcode id=2455 lang=javascript
 *
 * [2455] Average Value of Even Numbers That Are Divisible by Three
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
  let sum = 0, count = 0;
  for (const n of nums) {
    if (n % 6 === 0) {
      sum += n;
      count++;
    }
  }
  return count === 0 ? 0 : Math.floor(sum / count);
};
// @lc code=end

// TEST:
console.log(averageValue([1,3,6,10,12,15])); // 9
console.log(averageValue([1,2,4,7,10]));     // 0
console.log(averageValue([6,12,18]));        // 12
