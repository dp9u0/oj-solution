/*
 * @lc app=leetcode.cn id=面试题 01.04 lang=javascript
 *
 * [面试题 01.04] 回文排列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    // 奇数次字符至多 1 个；集合翻转记录奇偶性（用例含大写与符号，不能假设纯小写字母做位向量）
    const odd = new Set();
    for (const c of s) {
        if (odd.has(c)) {
            odd.delete(c);
        } else {
            odd.add(c);
        }
    }
    return odd.size <= 1;
};
// @lc code=end

// TEST:
console.log(canPermutePalindrome('tactcoa') === true);
console.log(canPermutePalindrome('code') === false);
console.log(canPermutePalindrome('') === true);
console.log(canPermutePalindrome('a') === true);
console.log(canPermutePalindrome('aa') === true);
console.log(canPermutePalindrome('aab') === true);
console.log(canPermutePalindrome('ab') === false);
console.log(canPermutePalindrome('AaBb//a') === false); // 大小写敏感，且字符集不限字母
console.log(canPermutePalindrome('Aa') === false); // 大小写敏感
