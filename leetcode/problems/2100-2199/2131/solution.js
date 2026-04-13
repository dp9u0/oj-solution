/*
 * @lc app=leetcode id=2131 lang=javascript
 *
 * [2131] Longest Palindrome by Concatenating Two Letter Words
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    const count = new Map();
    for (const w of words) {
        count.set(w, (count.get(w) || 0) + 1);
    }

    let result = 0;
    let hasCenter = false;

    for (const [word, cnt] of count) {
        const reversed = word[1] + word[0];

        if (word === reversed) {
            const pairs = Math.floor(cnt / 2);
            result += pairs * 4;
            if (cnt % 2 === 1) hasCenter = true;
        } else if (word < reversed) {
            const pairCnt = Math.min(cnt, count.get(reversed) || 0);
            result += pairCnt * 4;
        }
    }

    if (hasCenter) result += 2;

    return result;
};
// @lc code=end

// TEST:
console.log(longestPalindrome(["lc", "cl", "gg"])); // 6
console.log(longestPalindrome(["ab", "ty", "yt", "lc", "cl", "ab"])); // 8
console.log(longestPalindrome(["cc", "ll", "xx"])); // 2
console.log(longestPalindrome(["ab", "ba"])); // 4
console.log(longestPalindrome(["aa", "aa"])); // 4
