/*
 * @lc app=leetcode id=1888 lang=javascript
 *
 * [1888] Minimum Number of Flips to Make the Binary String Alternating
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function(s) {
    const n = s.length;
    const ss = s + s;

    const diff0 = new Array(2 * n + 1).fill(0);
    const diff1 = new Array(2 * n + 1).fill(0);

    for (let i = 0; i < 2 * n; i++) {
        diff0[i + 1] = diff0[i] + (ss[i] !== String(i % 2) ? 1 : 0);
        diff1[i + 1] = diff1[i] + (ss[i] !== String((i + 1) % 2) ? 1 : 0);
    }

    let result = Infinity;
    for (let i = 0; i < n; i++) {
        result = Math.min(result, diff0[i + n] - diff0[i], diff1[i + n] - diff1[i]);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(minFlips('111000'));
console.log(minFlips('010'));
console.log(minFlips('1110'));
console.log(minFlips('010010'));
