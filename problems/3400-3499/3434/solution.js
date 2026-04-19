/*
 * @lc app=leetcode id=3434 lang=javascript
 *
 * [3434] Maximum Frequency After Subarray Operation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    const n = nums.length;
    let countK = 0;
    for (const num of nums) {
        if (num === k) countK++;
    }

    let maxGain = 0;
    for (let v = 1; v <= 50; v++) {
        if (v === k) continue;
        let cur = 0, best = 0;
        for (let i = 0; i < n; i++) {
            if (nums[i] === v) cur++;
            else if (nums[i] === k) cur--;
            if (cur < 0) cur = 0;
            if (cur > best) best = cur;
        }
        maxGain = Math.max(maxGain, best);
    }

    return countK + maxGain;
};
// @lc code=end

// TEST:
console.log(maxFrequency([1,2,3,4,5,6], 1));                        // 2
console.log(maxFrequency([10,2,3,4,5,5,4,3,2,2], 10));             // 4
