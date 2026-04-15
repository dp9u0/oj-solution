/*
 * @lc app=leetcode id=2808 lang=javascript
 *
 * [2808] Minimum Seconds to Equalize a Circular Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSeconds = function(nums) {
    const n = nums.length;
    const pos = new Map();
    for (let i = 0; i < n; i++) {
        if (!pos.has(nums[i])) pos.set(nums[i], []);
        pos.get(nums[i]).push(i);
    }

    let result = n;
    for (const indices of pos.values()) {
        let maxGap = indices[0] + n - indices[indices.length - 1];
        for (let i = 1; i < indices.length; i++) {
            maxGap = Math.max(maxGap, indices[i] - indices[i - 1]);
        }
        result = Math.min(result, Math.floor(maxGap / 2));
    }
    return result;
};
// @lc code=end

// TEST:
console.log(minimumSeconds([1,2,1,2]));       // 1
console.log(minimumSeconds([2,1,3,3,2]));     // 2
console.log(minimumSeconds([5,5,5,5]));       // 0
