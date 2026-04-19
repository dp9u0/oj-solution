/*
 * @lc app=leetcode id=3689 lang=javascript
 *
 * [3689] Maximum Total Subarray Value I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function(nums, k) {
    let mn = Infinity, mx = -Infinity;
    for (const x of nums) {
        if (x < mn) mn = x;
        if (x > mx) mx = x;
    }
    return k * (mx - mn);
};
// @lc code=end

// TEST:
console.log(maxTotalValue([1,3,2], 2)); // 4
console.log(maxTotalValue([4,2,5,1], 3)); // 12
console.log(maxTotalValue([5], 1)); // 0
console.log(maxTotalValue([1,2], 100000)); // 100000
console.log(maxTotalValue([0,1000000000], 100000)); // large
