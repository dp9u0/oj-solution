/*
 * @lc app=leetcode id=805 lang=javascript
 *
 * [805] Split Array With Same Average
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var splitArraySameAverage = function(nums) {
    const n = nums.length;
    if (n < 2) return false;
    const total = nums.reduce((a, b) => a + b, 0);

    // dp[k]: bitset (BigInt) of sums achievable by picking exactly k elements
    const dp = new Array(n).fill(0n);
    dp[0] = 1n;
    for (const num of nums) {
        for (let k = n - 1; k >= 1; k--) {
            dp[k] |= dp[k - 1] << BigInt(num);
        }
    }

    // A valid split needs a non-empty proper subset of size k with sum = total * k / n
    for (let k = 1; k <= n - 1; k++) {
        if ((total * k) % n !== 0) continue;
        const target = (total * k) / n;
        if ((dp[k] >> BigInt(target)) & 1n) return true;
    }
    return false;
};
// @lc code=end

// TEST:
console.log(splitArraySameAverage([1,2,3,4,5,6,7,8])); // true  ([1,4,5,8] & [2,3,6,7])
console.log(splitArraySameAverage([3,1]));             // false
console.log(splitArraySameAverage([5,5]));             // true  ([5],[5] both avg 5)
console.log(splitArraySameAverage([0,0]));             // true  ([0],[0])
console.log(splitArraySameAverage([1]));               // false (n < 2, cannot split into two non-empty)
console.log(splitArraySameAverage([2,12,18,4,10,14,6,16,8])); // true
