/*
 * @lc app=leetcode.cn id=面试题 01.01 lang=javascript
 *
 * [面试题 01.01] 判定字符是否唯一
 */

// @lc code=start
/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
    // 鸽笼提前否决；26 位位向量判重（题目保证纯小写字母）
    if (astr.length > 26) return false;
    let mask = 0;
    for (let i = 0; i < astr.length; i++) {
        const bit = 1 << (astr.charCodeAt(i) - 97);
        if (mask & bit) return false;
        mask |= bit;
    }
    return true;
};
// @lc code=end

// TEST:
console.log(isUnique('leetcode') === false);
console.log(isUnique('abc') === true);
console.log(isUnique('') === true);
console.log(isUnique('aa') === false);
console.log(isUnique('abcdefghijklmnopqrstuvwxyz') === true);
console.log(isUnique('abcdefghijklmnopqrstuvwxyza') === false); // 鸽笼提前否决
