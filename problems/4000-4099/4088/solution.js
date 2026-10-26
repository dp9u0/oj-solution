/*
 * @lc app=leetcode.cn id=4088 lang=javascript
 *
 * [4088] 峰值与谷值的差
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var peakValleyDifference = function(nums) {
    let peakSum = 0;
    let valleySum = 0;
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) peakSum += nums[i];
        else if (nums[i] < nums[i - 1] && nums[i] < nums[i + 1]) valleySum += nums[i];
    }
    return peakSum - valleySum;
};
// @lc code=end

// TEST:
console.log(peakValleyDifference([1,5,2,4,1,3,0]) === 9);
console.log(peakValleyDifference([-5,-6,-1,-2,5,3,2]) === 12);
console.log(peakValleyDifference([6,5,2,5,5,3,6]) === -5);
console.log(peakValleyDifference([1,2,3]) === 0);
console.log(peakValleyDifference([3,2,1]) === 0);
console.log(peakValleyDifference([1,3,2]) === 3);
