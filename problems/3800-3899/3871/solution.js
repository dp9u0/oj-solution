/*
 * @lc app=leetcode.cn id=3871 lang=javascript
 *
 * [3871] 统计范围内的逗号 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    // Numbers in [10^(3k), 10^(3k+3) - 1] each have exactly k commas.
    let total = 0;
    for (let k = 1; 10 ** (3 * k) <= n; k++) {
        const lo = 10 ** (3 * k);
        const hi = Math.min(n, 10 ** (3 * (k + 1)) - 1);
        total += (hi - lo + 1) * k;
    }
    return total;
};
// @lc code=end

// TEST:
console.log(countCommas(1002) === 3);
console.log(countCommas(998) === 0);
console.log(countCommas(1000) === 1);
console.log(countCommas(1) === 0);
console.log(countCommas(999999) === 999000);
console.log(countCommas(1000000) === 999002);   // "1,000,000" has 2 commas
console.log(countCommas(1000000000000) === 2998998999004); // "1,000,000,000,000" has 4 commas
console.log(countCommas(1000000000000000) === 3998998998999005); // up to 10^15, 5 commas for 10^15 itself
const brute = (n) => { let t = 0; for (let x = 1; x <= n; x++) t += Math.floor((String(x).length - 1) / 3); return t; };
console.log(countCommas(1234567) === brute(1234567));
