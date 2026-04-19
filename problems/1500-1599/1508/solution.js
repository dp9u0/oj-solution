/*
 * @lc app=leetcode id=1508 lang=javascript
 *
 * [1508] Range Sum of Sorted Subarray Sums
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    const MOD = 1e9 + 7;
    const sums = [];
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += nums[j];
            sums.push(sum);
        }
    }
    sums.sort((a, b) => a - b);
    let res = 0;
    for (let i = left - 1; i < right; i++) {
        res = (res + sums[i]) % MOD;
    }
    return res;
};
// @lc code=end

// TEST:
console.log(rangeSum([1,2,3,4], 4, 1, 5)); // 13
console.log(rangeSum([1,2,3,4], 4, 3, 4)); // 6
console.log(rangeSum([1,2,3,4], 4, 1, 10)); // 50
