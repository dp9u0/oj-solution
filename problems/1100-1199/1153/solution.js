/*
 * @lc app=leetcode.cn id=1153 lang=javascript
 *
 * [1153] 字符串转化
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canConvert = function(str1, str2) {
    const map = new Map();
    for (let i = 0; i < str1.length; i++) {
        const a = str1[i], b = str2[i];
        if (map.has(a) && map.get(a) !== b) return false;
        map.set(a, b);
    }
    if (str1 === str2) return true; // zero conversions needed, cycles irrelevant
    // cycles need a spare letter absent from str2 as intermediate
    return new Set(str2).size < 26;
};
// @lc code=end

// TEST:
console.log(canConvert("aabcc", "ccdee")); // true
console.log(canConvert("leetcode", "codeleet")); // false (mapping conflict)
console.log(canConvert("ab", "ba")); // true (cycle broken via spare letter)
console.log(canConvert("abcdefghijklmnopqrstuvwxyz", "bcdefghijklmnopqrstuvwxyza")); // false (cycle, all 26 used in str2)
console.log(canConvert("aa", "aa")); // true (identical)
console.log(canConvert("ab", "aa")); // true (b->a, no cycle)
