/*
 * @lc app=leetcode id=1255 lang=javascript
 *
 * [1255] Maximum Score Words Formed by Letters
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function(words, letters, score) {
    const n = words.length;
    const available = new Array(26).fill(0);
    for (const ch of letters) available[ch.charCodeAt(0) - 97]++;

    const wordCounts = [];
    const wordScores = [];
    for (const word of words) {
        const cnt = new Array(26).fill(0);
        let s = 0;
        for (const ch of word) {
            const idx = ch.charCodeAt(0) - 97;
            cnt[idx]++;
            s += score[idx];
        }
        wordCounts.push(cnt);
        wordScores.push(s);
    }

    let max = 0;
    for (let mask = 1; mask < (1 << n); mask++) {
        const need = new Array(26).fill(0);
        let total = 0;
        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) {
                total += wordScores[i];
                for (let j = 0; j < 26; j++) need[j] += wordCounts[i][j];
            }
        }
        let valid = true;
        for (let j = 0; j < 26; j++) {
            if (need[j] > available[j]) { valid = false; break; }
        }
        if (valid && total > max) max = total;
    }
    return max;
};
// @lc code=end

// TEST:
console.log(maxScoreWords(["dog","cat","dad","good"], ["a","a","c","d","d","d","g","o","o"], [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0])); // 23
console.log(maxScoreWords(["xxxz","ax","bx","cx"], ["z","a","b","c","x","x","x"], [4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10])); // 27
console.log(maxScoreWords(["leetcode"], ["l","e","t","c","o","d"], [0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0])); // 0
console.log(maxScoreWords(["a","b","c"], ["a","b","c"], [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])); // 3
console.log(maxScoreWords(["aa","ab","bc"], ["a","a","b","b","c"], [1,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])); // 8
