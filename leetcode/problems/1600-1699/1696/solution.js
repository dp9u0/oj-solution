/*
 * @lc app=leetcode id=1696 lang=javascript
 *
 * [1696] Jump Game VI
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function(nums, k) {
    const n = nums.length;
    const dp = new Array(n);
    dp[0] = nums[0];

    const deque = [0];

    for (let i = 1; i < n; i++) {
        while (deque[0] < i - k) deque.shift();
        dp[i] = dp[deque[0]] + nums[i];

        while (deque.length > 0 && dp[deque[deque.length - 1]] <= dp[i]) {
            deque.pop();
        }
        deque.push(i);
    }

    return dp[n - 1];
};
// @lc code=end

// TEST:
console.log(maxResult([1, -1, -2, 4, -7, 3], 2)); // 7
console.log(maxResult([10, -5, -2, 4, 0, 3], 3)); // 17
console.log(maxResult([1, -5, -20, 4, -1, 3, -6, -3], 2)); // 0
console.log(maxResult([1], 1)); // 1
