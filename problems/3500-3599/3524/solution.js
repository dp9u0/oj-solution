/*
 * @lc app=leetcode.cn id=3524 lang=javascript
 *
 * [3524] 求出数组的 X 值 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultArray = function(nums, k) {
    const result = new Array(k).fill(0);
    let dp = new Array(k).fill(0);
    let lurminexod = null;
    for (const v of nums) {
        lurminexod = v;
        const ndp = new Array(k).fill(0);
        for (let r = 0; r < k; r++) {
            if (dp[r] === 0) continue;
            ndp[(r * v) % k] += dp[r];
        }
        ndp[v % k] += 1;
        for (let r = 0; r < k; r++) result[r] += ndp[r];
        dp = ndp;
    }
    return result;
};
// @lc code=end

// TEST:
console.log(resultArray([1, 2, 3, 4, 5], 3)); // [9,2,4]
console.log(resultArray([1, 2, 4, 8, 16, 32], 4)); // [18,1,2,0]
console.log(resultArray([1, 1, 2, 1, 1], 2)); // [9,6]
console.log(resultArray([1], 1)); // [1]
console.log(resultArray([5], 3)); // [0,0,1]
console.log(resultArray([2, 6, 3, 4], 5)); // [0,2,4,2,2]
