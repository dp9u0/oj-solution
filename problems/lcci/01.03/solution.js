/*
 * @lc app=leetcode.cn id=面试题 01.03 lang=javascript
 *
 * [面试题 01.03] URL化
 */

// @lc code=start
/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function(S, length) {
    // 只处理前 length 个字符；尾部缓冲区忽略
    let res = '';
    for (let i = 0; i < length; i++) {
        res += S[i] === ' ' ? '%20' : S[i];
    }
    return res;
};
// @lc code=end

// TEST:
console.log(replaceSpaces('Mr John Smith    ', 13) === 'Mr%20John%20Smith');
console.log(replaceSpaces('               ', 5) === '%20%20%20%20%20');
console.log(replaceSpaces('abc', 3) === 'abc');
console.log(replaceSpaces('', 0) === '');
console.log(replaceSpaces('a b  ', 4) === 'a%20b%20'); // 尾部缓冲忽略
console.log(replaceSpaces('   ', 3) === '%20%20%20');
