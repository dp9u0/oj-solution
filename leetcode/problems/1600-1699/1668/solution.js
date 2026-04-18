/*
 * @lc app=leetcode id=1668 lang=javascript
 *
 * [1668] Maximum Repeating Substring
 */

// @lc code=start
/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let k = 0, s = word;
    while (sequence.includes(s)) { k++; s += word; }
    return k;
};
// @lc code=end

// TEST:
console.log(maxRepeating("ababc", "ab")); // 2
console.log(maxRepeating("ababc", "ba")); // 1
console.log(maxRepeating("ababc", "ac")); // 0
console.log(maxRepeating("aaaaa", "a")); // 5
console.log(maxRepeating("abc", "abcd")); // 0
