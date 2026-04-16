/*
 * @lc app=leetcode id=3827 lang=javascript
 *
 * [3827] Count Monobit Integers
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countMonobit = function(n) {
    // Monobit integers: 0, and all (2^k - 1) for k >= 1
    let count = 0;
    if (n >= 0) count++; // 0 is monobit
    for (let k = 1; (1 << k) - 1 <= n; k++) {
        count++;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(countMonobit(1)); // 2
console.log(countMonobit(4)); // 3
console.log(countMonobit(0)); // 1
console.log(countMonobit(7)); // 4 (0,1,3,7)
