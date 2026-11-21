/*
 * @lc app=leetcode.cn id=2219 lang=javascript
 *
 * [2219] 数组的最大总分
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSumScore = function(nums) {
    const total = nums.reduce((a, b) => a + b, 0);
    let prefix = 0, best = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        prefix += nums[i];
        const score = Math.max(prefix, total - prefix + nums[i]);
        if (score > best) best = score;
    }
    return best;
};
// @lc code=end

// TEST:
console.log(maximumSumScore([4,3,-2,5])); // 10
console.log(maximumSumScore([-3,-5])); // -3
console.log(maximumSumScore([1])); // 1
console.log(maximumSumScore([0,-1,2])); // 2 (i=0: max(0,1)=1; i=1: max(-1,1)=1; i=2: max(1,2)=2)
console.log(maximumSumScore([-1,-2,-3])); // -1
