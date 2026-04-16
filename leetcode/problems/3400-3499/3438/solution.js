/*
 * @lc app=leetcode id=3438 lang=javascript
 *
 * [3438] Find Valid Pair of Adjacent Digits in String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var findValidPair = function(s) {
    let cnt = new Array(10).fill(0);
    for (let c of s) cnt[+c]++;
    for (let i = 0; i < s.length - 1; i++) {
        let a = +s[i], b = +s[i + 1];
        if (a !== b && cnt[a] === a && cnt[b] === b) return s[i] + s[i + 1];
    }
    return '';
};
// @lc code=end

// TEST:
console.log(findValidPair('2523533')); // '23'
console.log(findValidPair('221')); // '21'
console.log(findValidPair('22')); // ''
