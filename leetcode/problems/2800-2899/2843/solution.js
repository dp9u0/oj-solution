/*
 * @lc app=leetcode id=2843 lang=javascript
 *
 * [2843]   Count Symmetric Integers
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let count = 0;
    for (let x = low; x <= high; x++) {
        const s = String(x);
        if (s.length % 2 !== 0) continue;
        const n = s.length >> 1;
        let left = 0, right = 0;
        for (let i = 0; i < n; i++) left += +s[i];
        for (let i = n; i < s.length; i++) right += +s[i];
        if (left === right) count++;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(countSymmetricIntegers(1, 100));      // 9
console.log(countSymmetricIntegers(1200, 1230));  // 4
