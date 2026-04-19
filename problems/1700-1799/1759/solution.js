/*
 * @lc app=leetcode id=1759 lang=javascript
 *
 * [1759] Count Number of Homogenous Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    const MOD = 1e9 + 7;
    let result = 0, count = 1;

    for (let i = 0; i < s.length; i++) {
        if (i > 0 && s[i] === s[i - 1]) {
            count++;
        } else {
            count = 1;
        }
        result = (result + count) % MOD;
    }

    return result;
};
// @lc code=end

// TEST:
console.log(countHomogenous('abbcccaa'));
console.log(countHomogenous('xy'));
console.log(countHomogenous('zzzzz'));
