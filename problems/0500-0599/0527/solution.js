/*
 * @lc app=leetcode.cn id=527 lang=javascript
 *
 * [527] 单词缩写
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var wordsAbbreviation = function(words) {
    const n = words.length;
    // abbreviations preserve length + first/last char -> conflicts only within a group
    const groups = new Map();
    for (let i = 0; i < n; i++) {
        const w = words[i];
        const key = w.length + '|' + w[0] + w[w.length - 1];
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(i);
    }

    const res = new Array(n);
    for (const idxs of groups.values()) {
        if (idxs.length === 1) {
            const idx = idxs[0], w = words[idx];
            res[idx] = w.length - 2 > 1 ? w[0] + (w.length - 2) + w[w.length - 1] : w;
            continue;
        }
        // trie with pass-through counts
        const root = { count: 0, children: new Map() };
        for (const idx of idxs) {
            let node = root;
            for (const ch of words[idx]) {
                if (!node.children.has(ch)) node.children.set(ch, { count: 0, children: new Map() });
                node = node.children.get(ch);
                node.count++;
            }
        }
        for (const idx of idxs) {
            const w = words[idx];
            let node = root, p = w.length;
            for (let i = 0; i < w.length; i++) {
                node = node.children.get(w[i]);
                if (node.count === 1) { p = i + 1; break; } // unique from here on
            }
            const mid = w.length - p - 1;
            res[idx] = mid > 1 ? w.slice(0, p) + mid + w[w.length - 1] : w;
        }
    }
    return res;
};
// @lc code=end

// TEST:
const t1 = ["like", "god", "internal", "me", "internet", "interval", "intension", "face", "intrusion"];
console.log(JSON.stringify(wordsAbbreviation(t1)));
// ["l2e","god","internal","me","i6t","interval","inte4n","f2e","intr4n"]
console.log(JSON.stringify(wordsAbbreviation(["aa", "aaa"]))); // ["aa","aaa"]
console.log(JSON.stringify(wordsAbbreviation(["abcdef", "abcdxf"]))); // ["abcdef","abcdxf"] (mid=0 -> keep)
console.log(JSON.stringify(wordsAbbreviation(["internal", "interval"]))); // ["internal","interval"]
console.log(JSON.stringify(wordsAbbreviation(["like"]))); // ["l2e"]
console.log(JSON.stringify(wordsAbbreviation(["abcdf", "abcdeg"]))); // ["a3f","a4g"] (different last -> separate groups)
