/*
 * @lc app=leetcode.cn id=面试题 17.26 lang=javascript
 *
 * [面试题 17.26] 稀疏相似度
 */

// @lc code=start
/**
 * @param {number[][]} docs
 * @return {string[]}
 */
var computeSimilarities = function(docs) {
    // 倒排索引：词 → 含该词的文档 id 列表；文档按定义是集合，去重防重复计数
    const wordDocs = new Map();
    docs.forEach((doc, i) => {
        for (const w of new Set(doc)) {
            if (!wordDocs.has(w)) wordDocs.set(w, []);
            wordDocs.get(w).push(i);
        }
    });
    // 每个词的文档两两共现一次，即该对文档交集 +1；键压成 a*500+b
    const inter = new Map();
    for (const list of wordDocs.values()) {
        for (let a = 0; a < list.length; a++) {
            for (let b = a + 1; b < list.length; b++) {
                const x = list[a];
                const y = list[b];
                const key = x < y ? x * 500 + y : y * 500 + x;
                inter.set(key, (inter.get(key) || 0) + 1);
            }
        }
    }
    // 相似度 4 位小数：精确有理数四舍五入，绕开二进制浮点的 toFixed 偏差
    const fmt = (cnt, union) => {
        const total = cnt * 10000;
        let scaled = Math.floor(total / union);
        if (2 * (total % union) >= union) scaled++;
        const s = String(scaled).padStart(5, '0');
        return s.slice(0, -4) + '.' + s.slice(-4);
    };
    const res = [];
    for (const [key, cnt] of inter) {
        const a = (key / 500) | 0;
        const b = key % 500;
        const union = docs[a].length + docs[b].length - cnt;
        res.push(`${a},${b}: ${fmt(cnt, union)}`);
    }
    return res;
};
// @lc code=end

// TEST:
const eqSet = (a, b) => JSON.stringify(a.slice().sort()) === JSON.stringify(b.slice().sort());
console.log(eqSet(
    computeSimilarities([[14, 15, 100, 9, 3], [32, 1, 9, 3, 5], [15, 29, 2, 6, 8, 7], [7, 10]]),
    ['0,1: 0.2500', '0,2: 0.1000', '2,3: 0.1429']
));
console.log(eqSet(computeSimilarities([[1, 2], [3, 4]]), []));
console.log(eqSet(computeSimilarities([[1], []]), [])); // 空文档忽略
console.log(eqSet(computeSimilarities([[5, 1, 3], [1, 3, 7]]), ['0,1: 0.5000']));
console.log(eqSet(computeSimilarities([[1]]), []));
