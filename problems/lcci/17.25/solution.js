/*
 * @lc app=leetcode.cn id=面试题 17.25 lang=javascript
 *
 * [面试题 17.25] 单词矩阵
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var maxRectangle = function(words) {
    // 按单词长度分组：行宽 l 的词表与列高 h 的词表独立
    const byLen = new Map();
    for (const w of words) {
        if (!byLen.has(w.length)) byLen.set(w.length, []);
        byLen.get(w.length).push(w);
    }
    // Trie：节点为普通对象，end 标记单词结尾
    const trieCache = new Map();
    const getTrie = len => {
        if (trieCache.has(len)) return trieCache.get(len);
        const root = {};
        for (const w of byLen.get(len)) {
            let node = root;
            for (const c of w) {
                if (!node[c]) node[c] = {};
                node = node[c];
            }
            node.end = true;
        }
        trieCache.set(len, root);
        return root;
    };

    let best = [];
    let bestArea = 0;

    // 已选 rows 行；colNodes[j] 为第 j 列在 byLen[h] Trie 上的当前节点
    const dfs = (rows, l, h, wordList, colNodes, chosen) => {
        if (rows === h) {
            // 列长 = Trie 词长，走到此处必为完整单词
            best = chosen.slice();
            bestArea = h * l;
            return true;
        }
        for (const w of wordList) {
            const next = new Array(l);
            let ok = true;
            for (let j = 0; j < l; j++) {
                const nx = colNodes[j][w[j]];
                if (!nx) {
                    ok = false;
                    break;
                }
                next[j] = nx;
            }
            if (!ok) continue;
            chosen.push(w);
            if (dfs(rows + 1, l, h, wordList, next, chosen)) return true;
            chosen.pop();
        }
        return false;
    };

    const lengths = [...byLen.keys()].sort((a, b) => b - a);
    for (const l of lengths) {
        // l 更小则面积上界 l*maxLen 不会超过已有最优
        if (l * lengths[0] <= bestArea) break;
        const wordList = byLen.get(l);
        for (const h of lengths) {
            if (h * l <= bestArea) break;
            const colNodes = new Array(l).fill(getTrie(h));
            dfs(0, l, h, wordList, colNodes, []);
        }
    }
    return best;
};
// @lc code=end

// TEST:
// 校验器：矩形合法（行列均为词表单词、形状一致）
const isValid = (words, rect) => {
    const set = new Set(words);
    const h = rect.length;
    if (!h) return false;
    const l = rect[0].length;
    if (rect.some(r => r.length !== l)) return false;
    for (const r of rect) {
        if (!set.has(r)) return false;
    }
    for (let j = 0; j < l; j++) {
        let col = '';
        for (let i = 0; i < h; i++) col += rect[i][j];
        if (!set.has(col)) return false;
    }
    return true;
};
const r1 = maxRectangle(['this', 'real', 'hard', 'trh', 'hea', 'iar', 'sld']);
console.log(isValid(['this', 'real', 'hard', 'trh', 'hea', 'iar', 'sld'], r1) && r1.length * r1[0].length === 12);
console.log(JSON.stringify(maxRectangle(['aa'])) === JSON.stringify(['aa', 'aa']));
const r3 = maxRectangle(['ab', 'ba']);
console.log(isValid(['ab', 'ba'], r3) && r3.length * r3[0].length === 4);
const r4 = maxRectangle(['a', 'b']);
console.log(isValid(['a', 'b'], r4) && r4.length * r4[0].length === 1);
