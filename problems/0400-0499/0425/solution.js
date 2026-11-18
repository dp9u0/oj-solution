/*
 * @lc app=leetcode.cn id=425 lang=javascript
 *
 * [425] 单词方块
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[][]}
 */
var wordSquares = function(words) {
    const L = words[0].length;

    // index every word under each of its prefixes ('' -> all words)
    const byPrefix = new Map();
    for (const w of words) {
        for (let l = 0; l <= L; l++) {
            const p = w.slice(0, l);
            if (!byPrefix.has(p)) byPrefix.set(p, []);
            byPrefix.get(p).push(w);
        }
    }

    const res = [];
    const square = [];
    const dfs = r => {
        if (r === L) { res.push([...square]); return; }
        // row r must start with column r built so far
        const prefix = square.map(w => w[r]).join('');
        for (const w of byPrefix.get(prefix) || []) {
            square.push(w);
            dfs(r + 1);
            square.pop();
        }
    };
    dfs(0);
    return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(wordSquares(["area", "lead", "wall", "lady", "ball"])));
// [["ball","area","lead","lady"],["wall","area","lead","lady"]]
console.log(JSON.stringify(wordSquares(["abat", "baba", "atan", "atal"])));
// [["baba","abat","baba","atan"],["baba","abat","baba","atal"]]
console.log(JSON.stringify(wordSquares(["a"]))); // [["a"]]
console.log(JSON.stringify(wordSquares(["ab"]))); // [] (1 row can't cover 2 columns)
console.log(JSON.stringify(wordSquares(["ab", "ba"]))); // [["ab","ba"],["ba","ab"]]
console.log(JSON.stringify(wordSquares(["abc", "bca"]))); // []
