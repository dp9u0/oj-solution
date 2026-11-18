/*
 * @lc app=leetcode.cn id=616 lang=javascript
 *
 * [616] 给字符串添加加粗标签
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {string}
 */
var addBoldTag = function(s, words) {
    const n = s.length;
    const bold = new Array(n).fill(false);
    for (const w of words) {
        for (let i = 0; i + w.length <= n; i++) {
            if (s.startsWith(w, i)) {
                for (let k = i; k < i + w.length; k++) bold[k] = true;
            }
        }
    }
    let res = '', inBold = false;
    for (let i = 0; i < n; i++) {
        if (bold[i] && !inBold) { res += '<b>'; inBold = true; }
        else if (!bold[i] && inBold) { res += '</b>'; inBold = false; }
        res += s[i];
    }
    if (inBold) res += '</b>';
    return res;
};
// @lc code=end

// TEST:
console.log(addBoldTag('abcxyz123', ['abc', '123'])); // "<b>abc</b>xyz<b>123</b>"
console.log(addBoldTag('aaabbb', ['aa', 'b'])); // "<b>aaabbb</b>"
console.log(addBoldTag('abc', ['xyz'])); // "abc"
console.log(addBoldTag('abc', [])); // "abc"
console.log(addBoldTag('a', ['a'])); // "<b>a</b>"
console.log(addBoldTag('abcd', ['ab', 'cd'])); // "<b>abcd</b>" (adjacent merged)
console.log(addBoldTag('abxcd', ['ab', 'cd'])); // "<b>ab</b>x<b>cd</b>"
