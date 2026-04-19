/*
 * @lc app=leetcode id=3249 lang=javascript
 *
 * [3249] Count the Number of Good Nodes
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number}
 */
var countGoodNodes = function(edges) {
    const n = edges.length + 1;
    const adj = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) {
        adj[a].push(b);
        adj[b].push(a);
    }

    let good = 0;
    const dfs = (node, parent) => {
        let total = 1;
        const sizes = [];
        for (const child of adj[node]) {
            if (child === parent) continue;
            const sz = dfs(child, node);
            sizes.push(sz);
            total += sz;
        }
        if (sizes.length === 0 || sizes.every(s => s === sizes[0])) good++;
        return total;
    };
    dfs(0, -1);
    return good;
};
// @lc code=end

// TEST:
console.log(countGoodNodes([[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]])); // 7
console.log(countGoodNodes([[0,1],[1,2],[2,3],[3,4],[0,5],[1,6],[2,7],[3,8]])); // 6
console.log(countGoodNodes([[0,1],[1,2],[1,3],[1,4],[0,5],[5,6],[6,7],[7,8],[0,9],[9,10],[9,12],[10,11]])); // 12
console.log(countGoodNodes([[0,1]])); // 2
console.log(countGoodNodes([[0,1],[0,2],[0,3]])); // 4
