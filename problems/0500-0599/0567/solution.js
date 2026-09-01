/*
 * @lc app=leetcode id=567 lang=javascript
 *
 * [567] Permutation in String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;

    const count1 = new Array(26).fill(0);
    const count2 = new Array(26).fill(0);

    for (const ch of s1) count1[ch.charCodeAt(0) - 97]++;

    const len = s1.length;
    for (let i = 0; i < s2.length; i++) {
        count2[s2.charCodeAt(i) - 97]++;

        if (i >= len) {
            count2[s2.charCodeAt(i - len) - 97]--;
        }

        if (i >= len - 1) {
            let match = true;
            for (let j = 0; j < 26; j++) {
                if (count1[j] !== count2[j]) {
                    match = false;
                    break;
                }
            }
            if (match) return true;
        }
    }

    return false;
};
// @lc code=end

// TEST:
console.log(checkInclusion('ab', 'eidbaooo'));
// Expected: true

console.log(checkInclusion('ab', 'eidboaoo'));
// Expected: false

console.log(checkInclusion('adc', 'dcda'));
// Expected: true
