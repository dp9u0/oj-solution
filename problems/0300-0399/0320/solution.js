/*
 * @lc app=leetcode.cn id=320 lang=javascript
 *
 * [320] 列举单词的全部缩写
 */

// @lc code=start
/**
 * @param {string} word
 * @return {string[]}
 */
var generateAbbreviations = function(word) {
    const res = [];
    const n = word.length;

    // backtracking: each position either keeps the char or starts/extends a run
    const dfs = (pos, path, runLen) => {
        if (pos === n) {
            res.push(runLen > 0 ? path + runLen : path);
            return;
        }
        // keep word[pos]
        dfs(pos + 1, path + (runLen > 0 ? runLen : "") + word[pos], 0);
        // abbreviate word[pos] (extend the current number run)
        dfs(pos + 1, path, runLen + 1);
    };
    dfs(0, "", 0);
    return res;
};
// @lc code=end

// TEST:
console.log(generateAbbreviations("word").length); // 16 (2^4)
console.log(generateAbbreviations("word").includes("word")); // true
console.log(generateAbbreviations("word").includes("3d")); // true
console.log(generateAbbreviations("a").length); // 2 ("a", "1")
console.log(generateAbbreviations("").length); // 1 ("")
