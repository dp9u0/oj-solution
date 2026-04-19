/*
 * @lc app=leetcode id=2269 lang=javascript
 *
 * [2269] Find the K-Beauty of a Number
 */

// @lc code=start
/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    let s = String(num);
    let count = 0;
    for (let i = 0; i <= s.length - k; i++) {
        let val = parseInt(s.slice(i, i + k));
        if (val !== 0 && num % val === 0) count++;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(divisorSubstrings(240, 2)); // 2
console.log(divisorSubstrings(430043, 2)); // 2
console.log(divisorSubstrings(10, 1)); // 1
