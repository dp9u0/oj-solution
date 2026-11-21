/*
 * @lc app=leetcode.cn id=2268 lang=javascript
 *
 * [2268] 最少按键次数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minimumKeypresses = function(s) {
    const freq = new Array(26).fill(0);
    for (const ch of s) freq[ch.charCodeAt(0) - 97]++;
    freq.sort((a, b) => b - a);
    let total = 0;
    for (let i = 0; i < 26; i++) {
        total += freq[i] * (Math.floor(i / 9) + 1);
    }
    return total;
};
// @lc code=end

// TEST:
console.log(minimumKeypresses("apple")); // 5
console.log(minimumKeypresses("abcdefghijkl")); // 15
console.log(minimumKeypresses("a")); // 1
console.log(minimumKeypresses("aaaaaaaaaa")); // 10
console.log(minimumKeypresses("abcabcabcabcabcabcabcabc")); // 24 (all 1-press letters)
