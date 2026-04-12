/*
 * @lc app=leetcode id=1567 lang=javascript
 *
 * [1567] Maximum Length of Subarray With Positive Product
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {
    let posLen = 0, negLen = 0;
    let result = 0;

    for (const num of nums) {
        if (num > 0) {
            posLen = posLen + 1;
            negLen = negLen > 0 ? negLen + 1 : 0;
        } else if (num < 0) {
            const newPos = negLen > 0 ? negLen + 1 : 0;
            negLen = posLen + 1;
            posLen = newPos;
        } else {
            posLen = 0;
            negLen = 0;
        }
        result = Math.max(result, posLen);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(getMaxLen([1,-2,-3,4])); // 4
console.log(getMaxLen([0,1,-2,-3,-4])); // 3
console.log(getMaxLen([-1,-2,-3,0,1])); // 2
