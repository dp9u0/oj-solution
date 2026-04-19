/*
 * @lc app=leetcode id=3541 lang=javascript
 *
 * [3541] Find Most Frequent Vowel and Consonant
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let vowels = new Set('aeiou');
    let cnt = new Array(26).fill(0);
    for (let c of s) cnt[c.charCodeAt(0) - 97]++;
    let maxV = 0, maxC = 0;
    for (let i = 0; i < 26; i++) {
        if (cnt[i] === 0) continue;
        if (vowels.has(String.fromCharCode(97 + i))) maxV = Math.max(maxV, cnt[i]);
        else maxC = Math.max(maxC, cnt[i]);
    }
    return maxV + maxC;
};
// @lc code=end

// TEST:
console.log(maxFreqSum('successes')); // 6
console.log(maxFreqSum('aeiaeia')); // 3
