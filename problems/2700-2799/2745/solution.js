/*
 * @lc app=leetcode id=2745 lang=javascript
 *
 * [2745] Construct the Longest New String
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var longestString = function(x, y, z) {
    const m = Math.min(x, y);
    // Use m pairs of AA-BB alternating, all z AB's, plus one extra if x != y
    let ans = 2 * (2 * m + z);
    if (x !== y) ans += 2;
    return ans;
};
// @lc code=end

// TEST:
console.log(longestString(2, 5, 1));  // 12
console.log(longestString(3, 2, 2));  // 14
console.log(longestString(1, 1, 1));  // 6
console.log(longestString(5, 5, 5));  // 30
