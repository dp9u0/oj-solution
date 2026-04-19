/*
 * @lc app=leetcode id=673 lang=javascript
 *
 * [673] Number of Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    const n = nums.length;
    const lengths = new Array(n).fill(1);
    const counts = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (lengths[j] + 1 > lengths[i]) {
                    lengths[i] = lengths[j] + 1;
                    counts[i] = counts[j];
                } else if (lengths[j] + 1 === lengths[i]) {
                    counts[i] += counts[j];
                }
            }
        }
    }

    const maxLen = Math.max(...lengths);
    let result = 0;
    for (let i = 0; i < n; i++) {
        if (lengths[i] === maxLen) result += counts[i];
    }

    return result;
};
// @lc code=end

// TEST:
console.log(findNumberOfLIS([1,3,5,4,7])); // 2
console.log(findNumberOfLIS([2,2,2,2,2])); // 5
console.log(findNumberOfLIS([1,2,4,3,5,4,7,2])); // 3
