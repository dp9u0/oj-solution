/*
 * @lc app=leetcode id=3747 lang=javascript
 *
 * [3747] Count Distinct Integers After Removing Zeros
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countDistinct = function(n) {
    let s = String(n);
    let len = s.length;
    let pow9 = [1];
    for (let i = 1; i <= len; i++) pow9[i] = pow9[i - 1] * 9;
    let result = 0;
    // Numbers with fewer digits
    for (let k = 1; k < len; k++) result += pow9[k];
    // Digit DP for len-digit numbers <= n
    for (let i = 0; i < len; i++) {
        let d = parseInt(s[i]);
        result += Math.max(0, d - 1) * pow9[len - i - 1];
        if (d === 0) break;
        if (i === len - 1) result++;
    }
    return result;
};
// @lc code=end

// TEST:
console.log(countDistinct(10)); // 9
console.log(countDistinct(3)); // 3
console.log(countDistinct(100)); // 90
console.log(countDistinct(21)); // 19
