/*
 * @lc app=leetcode id=3663 lang=javascript
 *
 * [3663] Find The Least Frequent Digit
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var getLeastFrequentDigit = function(n) {
    const freq = new Array(10).fill(0);
    const s = String(n);
    for (const ch of s) {
        freq[ch.charCodeAt(0) - 48]++;
    }

    let minFreq = Infinity, result = -1;
    for (let d = 0; d <= 9; d++) {
        if (freq[d] > 0 && freq[d] < minFreq) {
            minFreq = freq[d];
            result = d;
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(getLeastFrequentDigit(1553322)); // 1
console.log(getLeastFrequentDigit(723344511)); // 2
console.log(getLeastFrequentDigit(1)); // 1
console.log(getLeastFrequentDigit(999)); // 9
console.log(getLeastFrequentDigit(102030)); // 1
