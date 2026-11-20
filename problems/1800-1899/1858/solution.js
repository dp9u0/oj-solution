/*
 * @lc app=leetcode.cn id=1858 lang=javascript
 *
 * [1858] 包含所有前缀的最长单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    const sorted = words.slice().sort();
    const valid = new Set();
    let best = '';
    for (const w of sorted) {
        const pre = w.slice(0, -1);
        if (w.length === 1 || valid.has(pre)) {
            valid.add(w);
            if (w.length > best.length) best = w;
        }
    }
    return best;
};
// @lc code=end

// TEST:
console.log(longestWord(["k","ki","kir","kira","kiran"])); // "kiran"
console.log(longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"])); // "apple"
console.log(longestWord(["abc", "bc", "ab", "qwe"])); // ""
console.log(longestWord(["z"])); // "z"
console.log(longestWord(["b","br","bru","brug","bruh"])); // "brug"
