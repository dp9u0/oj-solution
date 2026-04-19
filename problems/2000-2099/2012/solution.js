/*
 * @lc app=leetcode id=2012 lang=javascript
 *
 * [2012] Sum of Beauty in the Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfBeauties = function(nums) {
    let n = nums.length;
    let prefixMax = new Array(n);
    let suffixMin = new Array(n);
    prefixMax[0] = nums[0];
    for (let i = 1; i < n; i++) prefixMax[i] = Math.max(prefixMax[i-1], nums[i]);
    suffixMin[n-1] = nums[n-1];
    for (let i = n - 2; i >= 0; i--) suffixMin[i] = Math.min(suffixMin[i+1], nums[i]);
    let sum = 0;
    for (let i = 1; i <= n - 2; i++) {
        if (prefixMax[i-1] < nums[i] && nums[i] < suffixMin[i+1]) sum += 2;
        else if (nums[i-1] < nums[i] && nums[i] < nums[i+1]) sum += 1;
    }
    return sum;
};
// @lc code=end

// TEST:
console.log(sumOfBeauties([1,2,3])); // 2
console.log(sumOfBeauties([2,4,6,4])); // 1
console.log(sumOfBeauties([3,2,1])); // 0
