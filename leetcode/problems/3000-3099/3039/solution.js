/*
 * @lc app=leetcode id=3039 lang=javascript
 *
 * [3039] Apply Operations to Make String Empty
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var lastNonEmptyString = function(s) {
    let freq = new Array(26).fill(0);
    for (let c of s) freq[c.charCodeAt(0) - 97]++;

    let maxFreq = Math.max(...freq);
    let count = new Array(26).fill(0);
    let res = '';
    for (let c of s) {
        let idx = c.charCodeAt(0) - 97;
        count[idx]++;
        if (count[idx] === maxFreq) res += c;
    }
    return res;
};
// @lc code=end

// TEST:
console.log(lastNonEmptyString('aabcbbca')); // 'ba'
console.log(lastNonEmptyString('abcd')); // 'abcd'
console.log(lastNonEmptyString('aaabbb')); // 'ab'
