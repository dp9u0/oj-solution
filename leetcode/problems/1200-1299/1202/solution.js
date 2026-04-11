/*
 * @lc app=leetcode id=1202 lang=javascript
 *
 * [1202] Smallest String With Swaps
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
    const n = s.length;
    const parent = Array.from({ length: n }, (_, i) => i);

    const find = (x) => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };

    const union = (a, b) => {
        const ra = find(a), rb = find(b);
        if (ra !== rb) parent[ra] = rb;
    };

    for (const [a, b] of pairs) {
        union(a, b);
    }

    const groups = new Map();
    for (let i = 0; i < n; i++) {
        const root = find(i);
        if (!groups.has(root)) groups.set(root, []);
        groups.get(root).push(i);
    }

    const result = new Array(n);
    for (const indices of groups.values()) {
        const chars = indices.map(i => s[i]).sort();
        indices.sort((a, b) => a - b);
        for (let i = 0; i < indices.length; i++) {
            result[indices[i]] = chars[i];
        }
    }

    return result.join('');
};
// @lc code=end

// TEST:
console.log(smallestStringWithSwaps("dcab", [[0,3],[1,2]])); // 'bacd'
console.log(smallestStringWithSwaps("dcab", [[0,3],[1,2],[0,2]])); // 'abcd'
console.log(smallestStringWithSwaps("cba", [[0,1],[1,2]])); // 'abc'
