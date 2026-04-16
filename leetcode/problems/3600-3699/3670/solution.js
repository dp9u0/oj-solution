/*
 * @lc app=leetcode id=3670 lang=javascript
 *
 * [3670] Maximum Product of Two Integers With No Common Bits
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxVal = 0;
    for (let num of nums) if (num > maxVal) maxVal = num;
    let BITS = 32 - Math.clz32(maxVal);
    let N = 1 << BITS;
    let ALL = N - 1;
    let dp = new Int32Array(N);
    for (let num of nums) {
        if (num > dp[num]) dp[num] = num;
    }
    // SOS DP: dp[m] = max value among all submasks of m
    for (let b = 0; b < BITS; b++) {
        let bit = 1 << b;
        for (let m = 0; m < N; m++) {
            if ((m & bit) && dp[m ^ bit] > dp[m]) {
                dp[m] = dp[m ^ bit];
            }
        }
    }
    let ans = 0;
    for (let num of nums) {
        let v = dp[ALL ^ num];
        if (v > 0 && num * v > ans) ans = num * v;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maxProduct([1,2,3,4,5,6,7])); // 12
console.log(maxProduct([5,6,4])); // 0
console.log(maxProduct([64,8,32])); // 2048
