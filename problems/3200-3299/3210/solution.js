/*
 * @lc app=leetcode id=3210 lang=javascript
 *
 * [3210] Find the Encrypted String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
    const n = s.length;
    k = k % n;
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(s[(i + k) % n]);
    }
    return result.join('');
};
// @lc code=end

// TEST:
console.log(getEncryptedString('dart', 3));  // tdar
console.log(getEncryptedString('aaa', 1));   // aaa
