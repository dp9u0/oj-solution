/*
 * @lc app=leetcode.cn id=269 lang=javascript
 *
 * [269] 火星词典
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    const graph = new Map(); // char -> Set of chars it precedes
    const indeg = new Map();
    for (const w of words) {
        for (const c of w) {
            if (!graph.has(c)) graph.set(c, new Set());
            indeg.set(c, indeg.get(c) || 0);
        }
    }

    for (let i = 1; i < words.length; i++) {
        const a = words[i - 1], b = words[i];
        const len = Math.min(a.length, b.length);
        let found = false;
        for (let j = 0; j < len; j++) {
            if (a[j] !== b[j]) {
                if (!graph.get(a[j]).has(b[j])) {
                    graph.get(a[j]).add(b[j]);
                    indeg.set(b[j], indeg.get(b[j]) + 1);
                }
                found = true;
                break;
            }
        }
        // invalid: a longer word appears before its own prefix
        if (!found && a.length > b.length) return "";
    }

    const queue = [...indeg.entries()].filter(([, d]) => d === 0).map(([c]) => c);
    const res = [];
    while (queue.length) {
        const c = queue.shift();
        res.push(c);
        for (const next of graph.get(c)) {
            indeg.set(next, indeg.get(next) - 1);
            if (indeg.get(next) === 0) queue.push(next);
        }
    }
    return res.length === indeg.size ? res.join("") : "";
};
// @lc code=end

// TEST:
console.log(alienOrder(["wrt", "wrf", "er", "ett", "rftt"])); // "wertf"
console.log(alienOrder(["z", "x"])); // "zx"
console.log(alienOrder(["z", "x", "z"])); // "" (cycle)
console.log(alienOrder(["abc", "ab"])); // "" (prefix violation)
console.log(alienOrder(["a"])); // "a"
