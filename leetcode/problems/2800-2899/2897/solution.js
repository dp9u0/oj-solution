/*
 * @lc app=leetcode id=2897 lang=javascript
 *
 * [2897] Apply Operations on Array to Maximize Sum of Squares
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSum = function(nums, k) {
    let MOD = 1000000007n;
    let count = new Array(31).fill(0);
    for (let x of nums) {
        for (let b = 0; b <= 30; b++) {
            if (x & (1 << b)) count[b]++;
        }
    }
    let vals = new Array(k).fill(0);
    for (let b = 0; b <= 30; b++) {
        let cnt = Math.min(count[b], k);
        for (let i = 0; i < cnt; i++) {
            vals[i] += (1 << b);
        }
    }
    let sum = 0n;
    for (let v of vals) {
        sum = (sum + BigInt(v) * BigInt(v)) % MOD;
    }
    return Number(sum);
};
// @lc code=end

// TEST:
console.log(maxSum([2,6,5,8], 2)); // 261
console.log(maxSum([4,5,4,7], 3)); // 90
