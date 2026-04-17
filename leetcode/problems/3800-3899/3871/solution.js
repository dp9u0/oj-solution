/*
 * @lc app=leetcode id=3871 lang=javascript
 *
 * [3871] Count Commas in Range II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    let ans = 0;
    let d = 1;
    while (true) {
        const start = Math.pow(10, d - 1);
        const end = Math.pow(10, d) - 1;
        if (start > n) break;
        const count = Math.min(n, end) - start + 1;
        const commas = Math.floor((d - 1) / 3);
        ans += count * commas;
        d++;
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(countCommas(1002));              // 3
console.log(countCommas(998));               // 0
console.log(countCommas(1000));              // 1
console.log(countCommas(999999));            // 999000 (1 comma each for 4-6 digit numbers)
console.log(countCommas(1000000));           // 999000 + 2 = 999002
console.log(countCommas(1));                 // 0
