/*
 * @lc app=leetcode id=2645 lang=javascript
 *
 * [2645] Minimum Additions to Make Valid String
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var addMinimum = function(word) {
    const n = word.length;
    let groups = 1;
    for (let i = 1; i < n; i++) {
        if (word[i] <= word[i - 1]) groups++;
    }
    return 3 * groups - n;
};
// @lc code=end

// TEST:
console.log(addMinimum("b"));     // 2
console.log(addMinimum("aaa"));   // 6
console.log(addMinimum("abc"));   // 0
console.log(addMinimum("abcab")); // 1
