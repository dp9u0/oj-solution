/*
 * @lc app=leetcode id=1422 lang=javascript
 *
 * [1422] Maximum Score After Splitting a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    const n = s.length;
    let rightOnes = 0;
    for (const c of s) {
        if (c === '1') rightOnes++;
    }
    let leftZeros = 0;
    let max = 0;
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === '0') leftZeros++;
        else rightOnes--;
        max = Math.max(max, leftZeros + rightOnes);
    }
    return max;
};
// @lc code=end

// TEST:
console.log(maxScore('011101')); // 5
console.log(maxScore('00111')); // 5
console.log(maxScore('1111')); // 3
console.log(maxScore('00')); // 1
