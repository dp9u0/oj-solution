/*
 * @lc app=leetcode id=3163 lang=javascript
 *
 * [3163] String Compression III
 */

// @lc code=start
/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    let res = '';
    let i = 0;
    while (i < word.length) {
        const c = word[i];
        let cnt = 0;
        while (i < word.length && word[i] === c && cnt < 9) {
            cnt++;
            i++;
        }
        res += cnt + c;
    }
    return res;
};
// @lc code=end

// TEST:
console.log(compressedString('abcde'));                    // '1a1b1c1d1e'
console.log(compressedString('aaaaaaaaaaaaaabb'));         // '9a5a2b'
console.log(compressedString('a'));                        // '1a'
console.log(compressedString('aaaaaaaaaa'));               // '9a1a'
console.log(compressedString('zzzzzzzzzzzzzzzzzzz'));      // '9z9z1z'
