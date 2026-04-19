/*
 * @lc app=leetcode id=1283 lang=javascript
 *
 * [1283] Find the Smallest Divisor Given a Threshold
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    let lo = 1, hi = Math.max(...nums);

    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        let sum = 0;
        for (const num of nums) {
            sum += Math.floor((num + mid - 1) / mid);
        }
        if (sum <= threshold) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }

    return lo;
};
// @lc code=end

// TEST:
console.log(smallestDivisor([1, 2, 5, 9], 6)); // 5
console.log(smallestDivisor([44, 22, 33, 11, 1], 5)); // 44
console.log(smallestDivisor([1], 1)); // 1
console.log(smallestDivisor([2, 3, 5, 7, 11], 11)); // 3
