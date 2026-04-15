/*
 * @lc app=leetcode id=2496 lang=javascript
 *
 * [2496] Maximum Value of a String in an Array
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
  let ans = 0;
  for (const s of strs) {
    const val = /^\d+$/.test(s) ? parseInt(s) : s.length;
    ans = Math.max(ans, val);
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(maximumValue(["alic3","bob","3","4","00000"])); // 5
console.log(maximumValue(["1","01","001","0001"])); // 1
