/*
 * @lc app=leetcode id=3799 lang=javascript
 *
 * [3799] Word Squares II
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[][]}
 */
var wordSquares = function(words) {
    const n = words.length;
    const result = [];

    for (let t = 0; t < n; t++) {
        for (let l = 0; l < n; l++) {
            if (l === t) continue;
            if (words[t][0] !== words[l][0]) continue;
            for (let r = 0; r < n; r++) {
                if (r === t || r === l) continue;
                if (words[t][3] !== words[r][0]) continue;
                for (let b = 0; b < n; b++) {
                    if (b === t || b === l || b === r) continue;
                    if (words[b][0] !== words[l][3]) continue;
                    if (words[b][3] !== words[r][3]) continue;
                    result.push([words[t], words[l], words[r], words[b]]);
                }
            }
        }
    }

    result.sort((a, b) => {
        for (let i = 0; i < 4; i++) {
            if (a[i] < b[i]) return -1;
            if (a[i] > b[i]) return 1;
        }
        return 0;
    });

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(wordSquares(['able','area','echo','also'])));
// [['able','area','echo','also'],['area','able','also','echo']]
console.log(JSON.stringify(wordSquares(['code','cafe','eden','edge'])));
// []
console.log(JSON.stringify(wordSquares(['aaaa','aaab','aaba','aabb','abaa','abab','abba','abbb'])));
