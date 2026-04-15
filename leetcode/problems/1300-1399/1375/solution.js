/*
 * @lc app=leetcode id=1375 lang=javascript
 *
 * [1375] Number of Times Binary String Is Prefix-Aligned
 */

// @lc code=start
/**
 * @param {number[]} flips
 * @return {number}
 */
var numTimesAllBlue = function(flips) {
  let maxPos = 0;
  let result = 0;

  for (let i = 0; i < flips.length; i++) {
    maxPos = Math.max(maxPos, flips[i]);
    if (maxPos === i + 1) result++;
  }

  return result;
};
// @lc code=end

// TEST:
console.log(numTimesAllBlue([3,2,4,1,5])); // 2
console.log(numTimesAllBlue([4,1,2,3])); // 1
console.log(numTimesAllBlue([1,2,3,4,5])); // 5
