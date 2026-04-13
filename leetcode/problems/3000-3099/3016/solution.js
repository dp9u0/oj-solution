/*
 * @lc app=leetcode id=3016 lang=javascript
 *
 * [3016] Minimum Number of Pushes to Type Word II
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    const freq = new Array(26).fill(0);
    for (const c of word) {
        freq[c.charCodeAt(0) - 97]++;
    }

    freq.sort((a, b) => b - a);

    let result = 0;
    for (let i = 0; i < 26; i++) {
        if (freq[i] === 0) break;
        result += freq[i] * (Math.floor(i / 8) + 1);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(minimumPushes("abcde")); // 5
console.log(minimumPushes("xyzxyzxyzxyz")); // 12
console.log(minimumPushes("aabbccddeeffgghhiiiiii")); // 24
