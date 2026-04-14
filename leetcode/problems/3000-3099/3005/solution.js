/*
 * @lc app=leetcode id=3005 lang=javascript
 *
 * [3005] Count Elements With Maximum Frequency
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const freq = new Map();
    let maxF = 0;
    for (const n of nums) {
        const f = (freq.get(n) || 0) + 1;
        freq.set(n, f);
        maxF = Math.max(maxF, f);
    }
    let count = 0;
    for (const f of freq.values()) {
        if (f === maxF) count++;
    }
    return maxF * count;
};
// @lc code=end

// TEST:
console.log(maxFrequencyElements([1,2,2,3,1,4]));
console.log(maxFrequencyElements([1,2,3,4,5]));
console.log(maxFrequencyElements([1,1,1,1]));
