/*
 * @lc app=leetcode id=3282 lang=javascript
 *
 * [3282] Reach End of Array With Max Score
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumScore = function(nums) {
    const n = nums.length;
    let result = 0;
    let curVal = nums[0];
    let curIdx = 0;

    for (let i = 1; i < n; i++) {
        if (nums[i] > curVal || i === n - 1) {
            result += (i - curIdx) * curVal;
            curVal = nums[i];
            curIdx = i;
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(findMaximumScore([1,3,1,5]));      // 7
console.log(findMaximumScore([4,3,1,3,2]));    // 16
