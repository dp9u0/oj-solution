/*
 * @lc app=leetcode id=1247 lang=javascript
 *
 * [1247] Minimum Swaps to Make Strings Equal
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function(s1, s2) {
    let xy = 0, yx = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === 'x' && s2[i] === 'y') xy++;
        else if (s1[i] === 'y' && s2[i] === 'x') yx++;
    }
    if ((xy + yx) % 2 === 1) return -1;
    return Math.floor(xy / 2) + Math.floor(yx / 2) + (xy % 2) * 2;
};
// @lc code=end

// TEST:
console.log(minimumSwap("xx", "yy")); // 1
console.log(minimumSwap("xy", "yx")); // 2
console.log(minimumSwap("xx", "xy")); // -1
