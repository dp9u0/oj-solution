/*
 * @lc app=leetcode id=3637 lang=javascript
 *
 * [3637] Trionic Array I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function(nums) {
    let n = nums.length;
    let inc = (l, r) => {
      for (let i = l + 1; i <= r; i++)
        if (nums[i] <= nums[i - 1]) return false;
      return true;
    };
    let dec = (l, r) => {
      for (let i = l + 1; i <= r; i++)
        if (nums[i] >= nums[i - 1]) return false;
      return true;
    };
    for (let p = 1; p < n - 1; p++) {
      for (let q = p + 1; q < n - 1; q++) {
        if (inc(0, p) && dec(p, q) && inc(q, n - 1)) return true;
      }
    }
    return false;
};
// @lc code=end

// TEST:
console.log(isTrionic([1,3,5,4,2,6]));
console.log(isTrionic([2,1,3]));
console.log(isTrionic([1,2,1,2,3]));
