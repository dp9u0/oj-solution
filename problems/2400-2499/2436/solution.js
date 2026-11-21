/*
 * @lc app=leetcode.cn id=2436 lang=javascript
 *
 * [2436] 使子数组最大公约数大于一的最小分割数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSplits = function(nums) {
    const n = nums.length;
    const gcd = (a, b) => {
        while (b) { [a, b] = [b, a % b]; }
        return a;
    };
    const dp = new Int32Array(n).fill(n);
    for (let j = 0; j < n; j++) {
        let g = 0;
        for (let i = j; i < n; i++) {
            g = gcd(g, nums[i]);
            if (g === 1) break;
            const prev = j === 0 ? 0 : dp[j - 1];
            if (prev + 1 < dp[i]) dp[i] = prev + 1;
        }
    }
    return dp[n - 1];
};
// @lc code=end

// TEST:
console.log(minimumSplits([12,6,3,14,8])); // 2
console.log(minimumSplits([4,12,6,14])); // 1
console.log(minimumSplits([2])); // 1
console.log(minimumSplits([2,3,4,5])); // 4 (all coprime pairs)
console.log(minimumSplits([6,10,15])); // 2 ([6,10] gcd 2, [15] gcd 15)
