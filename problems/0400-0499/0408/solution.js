/*
 * @lc app=leetcode.cn id=408 lang=javascript
 *
 * [408] 有效单词缩写
 */

// @lc code=start
/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    let i = 0, j = 0;
    while (j < abbr.length) {
        const c = abbr[j];
        if (c >= '0' && c <= '9') {
            if (c === '0') return false; // leading zero (a bare "0" too)
            let num = 0;
            while (j < abbr.length && abbr[j] >= '0' && abbr[j] <= '9') {
                num = num * 10 + (+abbr[j++]);
            }
            i += num;
        } else {
            if (i >= word.length || word[i] !== c) return false;
            i++; j++;
        }
    }
    return i === word.length;
};
// @lc code=end

// TEST:
console.log(validWordAbbreviation("internationalization", "i12iz4n")); // true
console.log(validWordAbbreviation("apple", "a2e")); // false
console.log(validWordAbbreviation("apple", "apple")); // true
console.log(validWordAbbreviation("apple", "a3e")); // true
console.log(validWordAbbreviation("apple", "5")); // true
console.log(validWordAbbreviation("apple", "6")); // false (skips too much)
console.log(validWordAbbreviation("internationalization", "i0iz4n")); // false (leading zero)
console.log(validWordAbbreviation("a", "01")); // false (leading zero)
console.log(validWordAbbreviation("hi", "1")); // false (word not fully consumed)
