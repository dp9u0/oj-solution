/*
 * @lc app=leetcode.cn id=4110 lang=javascript
 *
 * [4110] 找出有效子序列的最大长度 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function(nums, k) {
    // dp[r]: longest valid subsequence ending with an element of remainder r
    // transition: next element must have remainder (k - r) % k
    const dp = new Array(k).fill(0);
    let best = 0;
    for (const x of nums) {
        const r = x % k;
        dp[r] = dp[(k - r) % k] + 1;
        best = Math.max(best, dp[r]);
    }
    return best;
};
// @lc code=end

// TEST:
console.log(maximumLength([1, 2, 3, 4, 5], 3)); // 4
console.log(maximumLength([5, 10, 15], 5)); // 3
console.log(maximumLength([1, 3, 5, 7, 9], 4)); // 5
console.log(maximumLength([1, 2], 2)); // 1
console.log(maximumLength([2, 4, 6, 8], 2)); // 4
console.log(maximumLength([3, 3, 1, 2], 3)); // 2
