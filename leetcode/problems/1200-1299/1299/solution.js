/*
 * @lc app=leetcode id=1299 lang=javascript
 *
 * [1299] Replace Elements with Greatest Element on Right Side
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  let maxRight = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    const temp = arr[i];
    arr[i] = maxRight;
    maxRight = Math.max(maxRight, temp);
  }
  return arr;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(replaceElements([17, 18, 5, 4, 6, 1]))); // [18,6,6,6,1,-1]
console.log(JSON.stringify(replaceElements([400]))); // [-1]
