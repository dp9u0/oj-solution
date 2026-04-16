/*
 * @lc app=leetcode id=3179 lang=javascript
 *
 * [3179] Find the N-th Value After K Seconds
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var valueAfterKSeconds = function(n, k) {
    const MOD = 1e9 + 7;
    const a = new Array(n).fill(1);
    for (let s = 0; s < k; s++) {
        for (let i = 1; i < n; i++) {
            a[i] = (a[i] + a[i - 1]) % MOD;
        }
    }
    return a[n - 1];
};
// @lc code=end

// TEST:
console.log(valueAfterKSeconds(4, 5)); // 56
console.log(valueAfterKSeconds(5, 3)); // 35
console.log(valueAfterKSeconds(1, 1)); // 1
console.log(valueAfterKSeconds(1, 1000)); // 1
console.log(valueAfterKSeconds(1000, 1000)); // large
