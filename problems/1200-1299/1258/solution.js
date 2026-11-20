/*
 * @lc app=leetcode.cn id=1258 lang=javascript
 *
 * [1258] 近义词句子
 */

// @lc code=start
/**
 * @param {string[][]} synonyms
 * @param {string} text
 * @return {string[]}
 */
var generateSentences = function(synonyms, text) {
    const parent = new Map();
    const find = (x) => {
        while (parent.get(x) !== x) {
            parent.set(x, parent.get(parent.get(x))); // path halving
            x = parent.get(x);
        }
        return x;
    };
    for (const [a, b] of synonyms) {
        if (!parent.has(a)) parent.set(a, a);
        if (!parent.has(b)) parent.set(b, b);
        parent.set(find(a), find(b));
    }

    const groups = new Map(); // root -> sorted member list
    for (const w of parent.keys()) {
        const r = find(w);
        if (!groups.has(r)) groups.set(r, []);
        groups.get(r).push(w);
    }
    for (const list of groups.values()) list.sort();

    const words = text.split(' ');
    const res = [];
    const buf = [];
    const dfs = (i) => {
        if (i === words.length) {
            res.push(buf.join(' '));
            return;
        }
        const w = words[i];
        const opts = parent.has(w) ? groups.get(find(w)) : [w];
        for (const opt of opts) { // sorted groups => output is already lexicographic
            buf.push(opt);
            dfs(i + 1);
            buf.pop();
        }
    };
    dfs(0);
    return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(generateSentences(
    [["happy","joy"],["sad","sorrow"],["joy","cheerful"]],
    "I am happy today but was sad yesterday"))); // 6 sentences
console.log(JSON.stringify(generateSentences([], "a b"))); // ["a b"]
console.log(JSON.stringify(generateSentences([["x","y"]], "a x c"))); // ["a x c","a y c"]
console.log(JSON.stringify(generateSentences([["b","a"],["b","c"]], "b"))); // ["a","b","c"] (transitive group)
