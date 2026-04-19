/*
 * @lc app=leetcode id=1191 lang=javascript
 *
 * [1191] K-Concatenation Maximum Sum
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kConcatenationMaxSum = function(arr, k) {
    const MOD = 1e9 + 7;
    const n = arr.length;

    // Kadane's on single arr
    let kadane1 = 0, cur = 0;
    for (const x of arr) {
        cur = Math.max(0, cur + x);
        kadane1 = Math.max(kadane1, cur);
    }

    if (k === 1) return kadane1 % MOD;

    // Kadane's on arr + arr
    let kadane2 = 0;
    cur = 0;
    for (let rep = 0; rep < 2; rep++) {
        for (const x of arr) {
            cur = Math.max(0, cur + x);
            kadane2 = Math.max(kadane2, cur);
        }
    }

    // Total sum, max prefix sum, max suffix sum
    let total = 0, prefixMax = 0, suffixMax = 0;
    let prefix = 0, suffix = 0;
    for (let i = 0; i < n; i++) {
        total += arr[i];
        prefix += arr[i];
        prefixMax = Math.max(prefixMax, prefix);
    }
    for (let i = n - 1; i >= 0; i--) {
        suffix += arr[i];
        suffixMax = Math.max(suffixMax, suffix);
    }

    let ans = Math.max(kadane1, kadane2);
    if (total > 0) {
        ans = Math.max(ans, Number(BigInt(suffixMax) + BigInt(k - 2) * BigInt(total) + BigInt(prefixMax)));
    }
    return Number(BigInt(Math.max(0, ans)) % BigInt(MOD));
};
// @lc code=end

// TEST:
console.log(kConcatenationMaxSum([1,2], 3));           // 9
console.log(kConcatenationMaxSum([1,-2,1], 5));         // 2
console.log(kConcatenationMaxSum([-1,-2], 7));          // 0
console.log(kConcatenationMaxSum([1,2], 1));             // 3
console.log(kConcatenationMaxSum([-5,8], 2));           // 11
