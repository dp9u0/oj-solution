/*
 * @lc app=leetcode id=1529 lang=javascript
 *
 * [1529] Minimum Suffix Flips
 */

// @lc code=start
/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function(target) {
    let flips = 0;
    let current = '0';
    for (const c of target) {
        if (c !== current) {
            flips++;
            current = c;
        }
    }
    return flips;
};
// @lc code=end

// TEST:
console.log(minFlips("10111")); // 3
console.log(minFlips("101")); // 3
console.log(minFlips("00000")); // 0
console.log(minFlips("111")); // 1
