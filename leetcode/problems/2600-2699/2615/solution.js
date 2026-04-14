/*
 * @lc app=leetcode id=2615 lang=javascript
 *
 * [2615] Sum of Distances
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function(nums) {
    const n = nums.length;
    const groups = new Map();
    for (let i = 0; i < n; i++) {
        if (!groups.has(nums[i])) groups.set(nums[i], []);
        groups.get(nums[i]).push(i);
    }
    const result = new Array(n).fill(0);
    for (const indices of groups.values()) {
        if (indices.length <= 1) continue;
        const m = indices.length;
        const prefix = new Array(m + 1).fill(0);
        for (let i = 0; i < m; i++) prefix[i + 1] = prefix[i] + indices[i];
        for (let k = 0; k < m; k++) {
            const left = k * indices[k] - prefix[k];
            const right = (prefix[m] - prefix[k + 1]) - (m - k - 1) * indices[k];
            result[indices[k]] = left + right;
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(distance([1,3,1,1,2]));
console.log(distance([0,5,3]));
console.log(distance([1,1,1]));
