/*
 * @lc app=leetcode id=1017 lang=javascript
 *
 * [1017] Convert to Base -2
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var baseNeg2 = function(n) {
    if (n === 0) return '0';
    let res = '';
    while (n !== 0) {
        let r = n & 1;
        if (r < 0) r += 2;
        res = r + res;
        n = (n - r) / (-2);
    }
    return res;
};
// @lc code=end

// TEST:
console.log(baseNeg2(2)); // '110'
console.log(baseNeg2(3)); // '111'
console.log(baseNeg2(4)); // '100'
console.log(baseNeg2(0)); // '0'
