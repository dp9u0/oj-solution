/*
 * @lc app=leetcode id=2553 lang=javascript
 *
 * [2553] Separate the Digits in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
  let res = [];
  for (const n of nums) {
    for (const ch of String(n)) {
      res.push(Number(ch));
    }
  }
  return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(separateDigits([13,25,83,77]))); // [1,3,2,5,8,3,7,7]
console.log(JSON.stringify(separateDigits([7,1,3,9]))); // [7,1,3,9]
console.log(JSON.stringify(separateDigits([10921]))); // [1,0,9,2,1]
