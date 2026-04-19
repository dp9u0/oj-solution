/*
 * @lc app=leetcode id=2919 lang=javascript
 *
 * [2919] Minimum Increment Operations to Make Array Beautiful
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minIncrementOperations = function(nums, k) {
    const n = nums.length;
    const dp = new Array(n).fill(Infinity);
    for (let i = 0; i < n; i++) {
        const cost = Math.max(0, k - nums[i]);
        const prev = i < 3 ? 0 : Math.min(dp[i - 1], dp[i - 2], dp[i - 3]);
        dp[i] = prev + cost;
    }
    return Math.min(dp[n - 1], dp[n - 2], dp[n - 3]);
};
// @lc code=end

// TEST:
const test = (fn, args, expected) => {
    const result = fn(...args);
    console.log(JSON.stringify(args), '=>', result, result === expected ? 'OK' : 'FAIL expected ' + expected);
};
test(minIncrementOperations, [[2, 3, 0, 0, 2], 4], 3);
test(minIncrementOperations, [[0, 1, 3, 3], 5], 2);
test(minIncrementOperations, [[1, 1, 2], 1], 0);
test(minIncrementOperations, [[1, 1, 1], 10], 9);
test(minIncrementOperations, [[7, 7, 7, 7], 5], 0);
test(minIncrementOperations, [[1, 2, 3, 4, 5], 6], 3);
