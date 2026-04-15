/*
 * @lc app=leetcode id=2765 lang=javascript
 *
 * [2765] Longest Alternating Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function(nums) {
    let maxLen = -1;
    let curLen = 0;
    let expectedDiff = 1;

    for (let i = 1; i < nums.length; i++) {
        const diff = nums[i] - nums[i - 1];
        if (diff === expectedDiff) {
            curLen = curLen === 0 ? 2 : curLen + 1;
            expectedDiff = -expectedDiff;
            maxLen = Math.max(maxLen, curLen);
        } else if (diff === 1) {
            curLen = 2;
            expectedDiff = -1;
            maxLen = Math.max(maxLen, curLen);
        } else {
            curLen = 0;
            expectedDiff = 1;
        }
    }
    return maxLen;
};
// @lc code=end

// TEST:
console.log(alternatingSubarray([2,3,4,3,4])); // 4
console.log(alternatingSubarray([4,5,6]));     // 2
console.log(alternatingSubarray([1,2,1,2,1])); // 5
