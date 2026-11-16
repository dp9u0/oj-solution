/*
 * @lc app=leetcode.cn id=1065 lang=javascript
 *
 * [1065] 字符串的索引对
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
var indexPairs = function(text, words) {
    const res = [];
    for (const w of words) {
        let from = 0;
        while (true) {
            const idx = text.indexOf(w, from);
            if (idx < 0) break;
            res.push([idx, idx + w.length - 1]);
            from = idx + 1;
        }
    }
    return res.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
};
// @lc code=end

// TEST:
console.log(indexPairs("thestoryofleetcodeandme", ["story", "fleet", "leetcode"])); // [[3,7],[9,13],[10,17]]
console.log(indexPairs("ababa", ["aba"])); // [[0,2],[2,4]]
console.log(indexPairs("ababa", ["ab", "ba"])); // [[0,1],[1,2],[2,3],[3,4]]
console.log(indexPairs("a", ["a"])); // [[0,0]]
console.log(indexPairs("abc", ["d"])); // []
