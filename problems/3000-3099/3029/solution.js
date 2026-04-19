/*
 * @lc app=leetcode id=3029 lang=javascript
 *
 * [3029] Minimum Time to Revert Word to Initial State I
 */

// @lc code=start
/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumTimeToInitialState = function(word, k) {
    let n = word.length;
    for (let t = 1; t * k < n; t++) {
        let pos = t * k;
        let len = n - pos;
        if (word.substring(pos) === word.substring(0, len)) return t;
    }
    return Math.ceil(n / k);
};
// @lc code=end

// TEST:
console.log(minimumTimeToInitialState('abacaba', 3)); // 2
console.log(minimumTimeToInitialState('abacaba', 4)); // 1
console.log(minimumTimeToInitialState('abcbabcd', 2)); // 4
