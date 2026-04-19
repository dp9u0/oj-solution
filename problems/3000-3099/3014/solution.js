/*
 * @lc app=leetcode id=3014 lang=javascript
 *
 * [3014] Minimum Number of Pushes to Type Word I
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    const n = word.length;
    const fullRounds = Math.floor(n / 8);
    const remainder = n % 8;
    return 8 * fullRounds * (fullRounds + 1) / 2 + (fullRounds + 1) * remainder;
};
// @lc code=end

// TEST:
console.log(minimumPushes("abcde")); // 5
console.log(minimumPushes("xycdefghij")); // 12
console.log(minimumPushes("a")); // 1
console.log(minimumPushes("abcdefgh")); // 8
console.log(minimumPushes("abcdefghijklmnopqrstuvwxyz")); // 26 letters: 8*1 + 8*2 + 8*3 + 2*4 = 8+16+24+8 = 56
console.log(minimumPushes("abcdefghijklmnop")); // 16: 8*1 + 8*2 = 24
