/*
 * @lc app=leetcode.cn id=2464 lang=javascript
 *
 * [2464] 有效分割中的最少子数组数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var validSubarraySplit = function(nums) {
    const n = nums.length;
    const gcd = (a, b) => {
        while (b) { [a, b] = [b, a % b]; }
        return a;
    };
    const INF = n + 1;
    const dp = new Int32Array(n + 1).fill(INF);
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] === INF) continue;
            if (gcd(nums[j], nums[i - 1]) > 1 && dp[j] + 1 < dp[i]) {
                dp[i] = dp[j] + 1;
            }
        }
    }
    return dp[n] === INF ? -1 : dp[n];
};
// @lc code=end

// TEST:
console.log(validSubarraySplit([2,6,3,4,3])); // 2
console.log(validSubarraySplit([3,5])); // 2
console.log(validSubarraySplit([1,2,1])); // -1
console.log(validSubarraySplit([2])); // 1
console.log(validSubarraySplit([4,6,9,8])); // 1 (gcd(4,8)=4)
