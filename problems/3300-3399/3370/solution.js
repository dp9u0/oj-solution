/*
 * @lc app=leetcode id=3370 lang=javascript
 *
 * [3370] Smallest Number With All Set Bits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    let k = 1;
    while ((1 << k) - 1 < n) k++;
    return (1 << k) - 1;
};
// @lc code=end

// TEST:
console.log(smallestNumber(5)); // 7
console.log(smallestNumber(10)); // 15
console.log(smallestNumber(3)); // 3
