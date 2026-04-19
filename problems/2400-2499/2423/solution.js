/*
 * @lc app=leetcode id=2423 lang=javascript
 *
 * [2423] Remove Letter To Equalize Frequency
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {
    let n = word.length;
    for (let i = 0; i < n; i++) {
        let cnt = new Array(26).fill(0);
        for (let j = 0; j < n; j++) {
            if (j !== i) cnt[word.charCodeAt(j) - 97]++;
        }
        let freq = 0;
        let valid = true;
        for (let k = 0; k < 26; k++) {
            if (cnt[k] > 0) {
                if (freq === 0) freq = cnt[k];
                else if (cnt[k] !== freq) { valid = false; break; }
            }
        }
        if (valid) return true;
    }
    return false;
};
// @lc code=end

// TEST:
console.log(equalFrequency('abcc')); // true
console.log(equalFrequency('aazz')); // false
console.log(equalFrequency('abc')); // true
