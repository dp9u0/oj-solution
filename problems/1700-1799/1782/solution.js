/*
 * @lc app=leetcode id=1782 lang=javascript
 *
 * [1782] Count Pairs Of Nodes
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} queries
 * @return {number[]}
 */
var countPairs = function(n, edges, queries) {
    const deg = new Int32Array(n + 1);
    const edgeCnt = new Map();

    for (const [u, v] of edges) {
        deg[u]++;
        deg[v]++;
        const a = Math.min(u, v), b = Math.max(u, v);
        const key = a * 20001 + b;
        edgeCnt.set(key, (edgeCnt.get(key) || 0) + 1);
    }

    const sorted = Array.from({ length: n }, (_, i) => deg[i + 1]).sort((a, b) => a - b);

    const res = [];
    for (const q of queries) {
        let cnt = 0, l = 0, r = n - 1;
        while (l < r) {
            if (sorted[l] + sorted[r] > q) {
                cnt += r - l;
                r--;
            } else {
                l++;
            }
        }

        for (const [key, c] of edgeCnt) {
            const u = Math.floor(key / 20001);
            const v = key % 20001;
            const sum = deg[u] + deg[v];
            if (sum > q && sum - c <= q) cnt--;
        }

        res.push(cnt);
    }

    return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(countPairs(4, [[1,2],[2,4],[1,3],[2,3],[2,1]], [2,3]))); // [6,5]
console.log(JSON.stringify(countPairs(5, [[1,5],[1,5],[3,4],[2,5],[1,3],[5,1],[2,3],[2,5]], [1,2,3,4,5]))); // [10,10,9,8,6]
console.log(JSON.stringify(countPairs(3, [[1,2],[2,3]], [1]))); // [3]
console.log(JSON.stringify(countPairs(2, [[1,2],[1,2]], [0,1,2]))); // [1,1,0]
console.log(JSON.stringify(countPairs(4, [[1,2],[2,3],[3,4]], [1,2]))); // [6,3]
