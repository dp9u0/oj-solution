/*
 * @lc app=leetcode id=667 lang=javascript
 *
 * [667] Beautiful Arrangement II
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function(n, k) {
    const result = [];
    // First part: 1, 2, ..., n-k-1 (all diffs = 1)
    for (let i = 1; i <= n - k - 1; i++) result.push(i);

    // Second part: zigzag over [n-k, n] to generate k distinct diffs
    let lo = n - k, hi = n;
    let flip = true;
    while (lo <= hi) {
        result.push(flip ? lo++ : hi--);
        flip = !flip;
    }

    return result;
};
// @lc code=end

// TEST:
const countDistinctDiffs = (arr) => new Set(arr.slice(1).map((v, i) => Math.abs(arr[i] - v))).size;
console.log(JSON.stringify(constructArray(3, 1))); // diffs should have 1 distinct
console.log(JSON.stringify(constructArray(3, 2))); // diffs should have 2 distinct
console.log(countDistinctDiffs(constructArray(5, 2))); // 2
console.log(countDistinctDiffs(constructArray(5, 4))); // 4
console.log(countDistinctDiffs(constructArray(10, 5))); // 5