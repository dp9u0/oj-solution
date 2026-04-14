/*
 * @lc app=leetcode id=396 lang=javascript
 *
 * [396] Rotate Function
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
    const n = nums.length;
    let sum = 0, f = 0;
    for (let i = 0; i < n; i++) {
        sum += nums[i];
        f += i * nums[i];
    }
    let maxF = f;
    for (let k = 1; k < n; k++) {
        f = f + sum - n * nums[n - k];
        if (f > maxF) maxF = f;
    }
    return maxF;
};
// @lc code=end

// TEST:
console.log(maxRotateFunction([4,3,2,6]));
console.log(maxRotateFunction([100]));
console.log(maxRotateFunction([1,2,3,4,5]));
