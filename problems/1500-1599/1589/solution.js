/*
 * @lc app=leetcode id=1589 lang=javascript
 *
 * [1589] Maximum Sum Obtained of Any Permutation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} requests
 * @return {number}
 */
var maxSumRangeQuery = function(nums, requests) {
    const n = nums.length;
    const MOD = 1e9 + 7;
    const diff = new Array(n + 1).fill(0);

    for (const [start, end] of requests) {
        diff[start]++;
        diff[end + 1]--;
    }

    const freq = new Array(n);
    freq[0] = diff[0];
    for (let i = 1; i < n; i++) {
        freq[i] = freq[i - 1] + diff[i];
    }

    freq.sort((a, b) => b - a);
    nums.sort((a, b) => b - a);

    let result = 0;
    for (let i = 0; i < n; i++) {
        result = (result + nums[i] * freq[i]) % MOD;
    }

    return result;
};
// @lc code=end

// TEST:
console.log(maxSumRangeQuery([1, 2, 3, 4, 5], [[1, 3], [0, 1]])); // 19
console.log(maxSumRangeQuery([1, 2, 3, 4, 5, 6], [[0, 1]])); // 11
console.log(maxSumRangeQuery([1, 2, 3, 4, 5, 10], [[0, 2], [1, 3], [1, 1]])); // 47
