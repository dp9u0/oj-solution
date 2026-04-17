/*
 * @lc app=leetcode id=2531 lang=javascript
 *
 * [2531] Make Number of Distinct Characters Equal
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var isItPossible = function(word1, word2) {
    const cnt1 = new Int32Array(26);
    const cnt2 = new Int32Array(26);
    for (const c of word1) cnt1[c.charCodeAt(0) - 97]++;
    for (const c of word2) cnt2[c.charCodeAt(0) - 97]++;

    let d1 = 0, d2 = 0;
    for (let i = 0; i < 26; i++) {
        if (cnt1[i] > 0) d1++;
        if (cnt2[i] > 0) d2++;
    }

    for (let i = 0; i < 26; i++) {
        if (cnt1[i] === 0) continue;
        for (let j = 0; j < 26; j++) {
            if (cnt2[j] === 0) continue;
            if (i === j) {
                if (d1 === d2) return true;
                continue;
            }
            // swap char i from word1 with char j from word2
            let nd1 = d1, nd2 = d2;
            // Remove i from word1
            if (cnt1[i] === 1) nd1--;
            // Add j to word1
            if (cnt1[j] === 0) nd1++;
            // Remove j from word2
            if (cnt2[j] === 1) nd2--;
            // Add i to word2
            if (cnt2[i] === 0) nd2++;

            if (nd1 === nd2) return true;
        }
    }

    return false;
};
// @lc code=end

// TEST:
console.log(isItPossible("ac", "b") === false);
console.log(isItPossible("abcc", "aab") === true);
console.log(isItPossible("abcde", "fghij") === true);
console.log(isItPossible("a", "a") === true);
console.log(isItPossible("aa", "ab") === false);
