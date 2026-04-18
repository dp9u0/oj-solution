/*
 * @lc app=leetcode id=1722 lang=javascript
 *
 * [1722] Minimize Hamming Distance After Swap Operations
 */

// @lc code=start
/**
 * @param {number[]} source
 * @param {number[]} target
 * @param {number[][]} allowedSwaps
 * @return {number}
 */
var minimumHammingDistance = function(source, target, allowedSwaps) {
    const n = source.length;
    const parent = Array.from({ length: n }, (_, i) => i);
    const find = (x) => parent[x] === x ? x : (parent[x] = find(parent[x]));
    const union = (a, b) => { parent[find(a)] = find(b); };

    for (const [a, b] of allowedSwaps) union(a, b);

    const groups = new Map();
    for (let i = 0; i < n; i++) {
        const root = find(i);
        if (!groups.has(root)) groups.set(root, [[], []]);
        groups.get(root)[0].push(source[i]);
        groups.get(root)[1].push(target[i]);
    }

    let dist = 0;
    for (const [, [src, tgt]] of groups) {
        const cnt = new Map();
        for (const v of src) cnt.set(v, (cnt.get(v) || 0) + 1);
        for (const v of tgt) {
            if (cnt.get(v)) cnt.set(v, cnt.get(v) - 1);
            else dist++;
        }
    }
    return dist;
};
// @lc code=end

// TEST:
console.log(minimumHammingDistance([1,2,3,4], [2,1,4,5], [[0,1],[2,3]])); // 1
console.log(minimumHammingDistance([1,2,3,4], [1,3,2,4], [])); // 2
console.log(minimumHammingDistance([5,1,2,4,3], [1,5,4,2,3], [[0,4],[4,2],[1,3],[1,4]])); // 0
console.log(minimumHammingDistance([1,2,3], [1,2,3], [])); // 0
console.log(minimumHammingDistance([1,2], [3,4], [[0,1]])); // 2
