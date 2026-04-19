/*
 * @lc app=leetcode id=3177 lang=javascript
 *
 * [3177] Find the Maximum Length of a Good Subsequence II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function(nums, k) {
    const dp = new Map();
    const top = new Array(k + 1).fill(0);

    for (const x of nums) {
        if (!dp.has(x)) dp.set(x, new Array(k + 1).fill(0));
        const d = dp.get(x);
        for (let j = k; j >= 0; j--) {
            d[j]++;
            if (j > 0) d[j] = Math.max(d[j], top[j - 1] + 1);
            top[j] = Math.max(top[j], d[j]);
        }
    }

    return top[k];
};
// @lc code=end

// TEST:
console.log(maximumLength([1, 2, 1, 1, 3], 2)); // 4
console.log(maximumLength([1, 2, 3, 4, 5, 1], 0)); // 2
console.log(maximumLength([1, 1, 1, 1], 0)); // 4
console.log(maximumLength([1, 2, 3, 4, 5], 1)); // 3
console.log(maximumLength([1], 0)); // 1
console.log(maximumLength([1, 2, 1, 2, 1, 2], 2)); // 6
