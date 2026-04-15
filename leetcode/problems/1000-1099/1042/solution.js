/*
 * @lc app=leetcode id=1042 lang=javascript
 *
 * [1042] Flower Planting With No Adjacent
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(n, paths) {
    const adj = Array.from({ length: n }, () => []);
    for (const [x, y] of paths) {
        adj[x - 1].push(y - 1);
        adj[y - 1].push(x - 1);
    }

    const ans = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        const used = new Set(adj[i].map(j => ans[j]));
        for (let c = 1; c <= 4; c++) {
            if (!used.has(c)) {
                ans[i] = c;
                break;
            }
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(gardenNoAdj(3, [[1,2],[2,3],[3,1]])); // [1,2,3]
console.log(gardenNoAdj(4, [[1,2],[3,4]])); // [1,2,1,2]
console.log(gardenNoAdj(4, [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]])); // [1,2,3,4]
