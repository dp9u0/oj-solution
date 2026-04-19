/*
 * @lc app=leetcode id=3121 lang=javascript
 *
 * [3121] Count the Number of Special Characters II
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    // 0=unseen, 1=lower only, 2=valid, 3=invalid
    const st = new Uint8Array(26);
    for (const ch of word) {
        const i = (ch < 'a' ? ch.charCodeAt(0) + 32 : ch.charCodeAt(0)) - 97;
        const upper = ch < 'a';
        if (upper) {
            if (st[i] === 0) st[i] = 3;
            else if (st[i] === 1) st[i] = 2;
        } else {
            if (st[i] >= 2) st[i] = 3;
            else if (st[i] === 0) st[i] = 1;
        }
    }
    let cnt = 0;
    for (let i = 0; i < 26; i++) if (st[i] === 2) cnt++;
    return cnt;
};
// @lc code=end

// TEST:
console.log(numberOfSpecialChars("aaAbcBC")); // 3
console.log(numberOfSpecialChars("abc")); // 0
console.log(numberOfSpecialChars("AbBCab")); // 0
console.log(numberOfSpecialChars("aA")); // 1
console.log(numberOfSpecialChars("Aa")); // 0
