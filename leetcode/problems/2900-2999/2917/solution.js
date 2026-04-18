/*
 * @lc app=leetcode id=2917 lang=javascript
 *
 * [2917] Find the K-or of an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKOr = function(nums, k) {
  let res = 0;
  for (let b = 0; b < 31; b++) {
    let cnt = 0;
    for (const x of nums) {
      if ((x >> b) & 1) cnt++;
    }
    if (cnt >= k) res |= (1 << b);
  }
  return res;
};
// @lc code=end

// TEST:
console.log(findKOr([7,12,9,8,9,15], 4)); // 9
console.log(findKOr([2,12,1,11,4,5], 6)); // 0
console.log(findKOr([10,8,5,9,11,6,8], 1)); // 15
console.log(findKOr([1], 1)); // 1
console.log(findKOr([0,0,0], 1)); // 0
