/*
 * @lc app=leetcode id=2708 lang=javascript
 *
 * [2708] Maximum Strength of a Group
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxStrength = function(nums) {
    const n = nums.length;
    let ans = -Infinity;
    for (let mask = 1; mask < (1 << n); mask++) {
        let prod = 1;
        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) prod *= nums[i];
        }
        if (prod > ans) ans = prod;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxStrength([3,-1,-5,2,5,-9])); // 1350
console.log(maxStrength([-4,-5,-4])); // 20
console.log(maxStrength([-5])); // -5
console.log(maxStrength([0,0,0])); // 0
console.log(maxStrength([-1,-2,-3,-4])); // 24
