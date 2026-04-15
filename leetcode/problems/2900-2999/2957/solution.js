/*
 * @lc app=leetcode id=2957 lang=javascript
 *
 * [2957] Remove Adjacent Almost-Equal Characters
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var removeAlmostEqualCharacters = function(word) {
    let n = word.length;
    let ops = 0;
    let arr = word.split('');
    for (let i = 1; i < n; i++) {
        if (Math.abs(arr[i].charCodeAt(0) - arr[i - 1].charCodeAt(0)) <= 1) {
            ops++;
            arr[i] = '#';
        }
    }
    return ops;
};
// @lc code=end

// TEST:
console.log(removeAlmostEqualCharacters('aaaaa'));
console.log(removeAlmostEqualCharacters('abddez'));
console.log(removeAlmostEqualCharacters('zyxyxyz'));
