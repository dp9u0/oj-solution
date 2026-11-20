/*
 * @lc app=leetcode.cn id=1548 lang=javascript
 *
 * [1548] 图中最相似的路径
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} roads
 * @param {string[]} names
 * @param {string[]} targetPath
 * @return {number[]}
 */
var mostSimilar = function(n, roads, names, targetPath) {
    const adj = Array.from({ length: n }, () => []);
    for (const [a, b] of roads) {
        adj[a].push(b);
        adj[b].push(a);
    }
    const m = targetPath.length;
    const cost = (i, j) => (names[i] === targetPath[j] ? 0 : 1);
    const INF = 1e9;

    const dp = Array.from({ length: m }, () => new Array(n).fill(INF));
    const par = Array.from({ length: m }, () => new Array(n).fill(-1));
    for (let i = 0; i < n; i++) dp[0][i] = cost(i, 0);
    for (let j = 1; j < m; j++) {
        for (let i = 0; i < n; i++) {
            for (const u of adj[i]) {
                const cand = dp[j - 1][u] + cost(i, j);
                if (cand < dp[j][i]) {
                    dp[j][i] = cand;
                    par[j][i] = u;
                }
            }
        }
    }

    let best = 0;
    for (let i = 1; i < n; i++) {
        if (dp[m - 1][i] < dp[m - 1][best]) best = i;
    }
    const path = new Array(m);
    path[m - 1] = best;
    for (let j = m - 1; j > 0; j--) path[j - 1] = par[j][path[j]];
    return path;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(mostSimilar(5,
    [[0,2],[0,3],[1,2],[1,3],[1,4],[2,4]],
    ["ATL","PEK","LAX","DXB","HND"],
    ["ATL","DXB","HND","LAX"]))); // [0,2,4,2] (edit distance 1)
console.log(JSON.stringify(mostSimilar(4,
    [[1,0],[2,0],[3,0],[2,1],[3,1],[3,2]],
    ["ATL","PEK","LAX","DXB"],
    ["ABC","DEF","GHI","JKL","MNO","PQR","STU","VWX"]))); // [0,1,0,1,0,1,0,1]
console.log(JSON.stringify(mostSimilar(6,
    [[0,1],[1,2],[2,3],[3,4],[4,5]],
    ["ATL","PEK","LAX","ATL","DXB","HND"],
    ["ATL","DXB","HND","DXB","ATL","LAX","PEK"]))); // [3,4,5,4,3,2,1]
