/*
 * @lc app=leetcode.cn id=面试题 17.17 lang=javascript
 *
 * [面试题 17.17] 多次搜索
 */

// @lc code=start
/**
 * @param {string} big
 * @param {string[]} smalls
 * @return {number[][]}
 */
var multiSearch = function(big, smalls) {
    // smalls 建 Trie，词尾节点记模式下标；空串跳过
    const root = {};
    smalls.forEach((w, i) => {
        if (!w) return;
        let node = root;
        for (const c of w) {
            if (!node[c]) node[c] = {};
            node = node[c];
        }
        node.idx = i;
    });
    // 从 big 每个起点沿 Trie 前行，途经词尾即一次出现
    const res = smalls.map(() => []);
    for (let i = 0; i < big.length; i++) {
        let node = root;
        for (let j = i; j < big.length; j++) {
            node = node[big[j]];
            if (!node) break;
            if (node.idx !== undefined) res[node.idx].push(i);
        }
    }
    return res;
};
// @lc code=end

// TEST:
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
console.log(eq(multiSearch('mississippi', ['is', 'ppi', 'hi', 'sis', 'i', 'ssippi']), [[1, 4], [8], [], [3], [1, 4, 7, 10], [5]]));
console.log(eq(multiSearch('', ['a', 'b', 'c']), [[], [], []]));
console.log(eq(multiSearch('aaa', ['a']), [[0, 1, 2]])); // 重叠出现
console.log(eq(multiSearch('abc', ['', 'x']), [[], []]));
console.log(eq(multiSearch('mississippi', ['issip']), [[4]]));
