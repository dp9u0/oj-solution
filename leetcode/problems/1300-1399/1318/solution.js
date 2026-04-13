/*
 * @lc app=leetcode id=1318 lang=javascript
 *
 * [1318] Minimum Flips to Make a OR b Equal to c
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        const bitA = (a >> i) & 1;
        const bitB = (b >> i) & 1;
        const bitC = (c >> i) & 1;
        if (bitC === 0) {
            result += bitA + bitB;
        } else {
            if (bitA === 0 && bitB === 0) result++;
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(minFlips(2, 6, 5)); // 3
console.log(minFlips(4, 2, 7)); // 1
console.log(minFlips(1, 2, 3)); // 0
console.log(minFlips(8, 3, 5)); // 3
