/*
 * @lc app=leetcode id=2973 lang=javascript
 *
 * [2973] Find Number of Coins to Place in Tree Nodes
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @param {number[]} cost
 * @return {number[]}
 */
var placedCoins = function(edges, cost) {
    const n = cost.length;
    const adj = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) {
        adj[a].push(b);
        adj[b].push(a);
    }

    const result = new Array(n);

    const dfs = (node, parent) => {
        let vals = [cost[node]];

        for (const child of adj[node]) {
            if (child === parent) continue;
            vals.push(...dfs(child, node));
        }

        vals.sort((a, b) => a - b);

        if (vals.length < 3) {
            result[node] = 1;
        } else {
            const len = vals.length;
            const opt1 = vals[len - 1] * vals[len - 2] * vals[len - 3];
            const opt2 = vals[0] * vals[1] * vals[len - 1];
            result[node] = Math.max(opt1, opt2, 0);
        }

        // Keep only top 3 max and bottom 2 min
        if (vals.length > 5) {
            vals = [vals[0], vals[1], vals[vals.length - 3], vals[vals.length - 2], vals[vals.length - 1]];
        }
        return vals;
    };

    dfs(0, -1);
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(placedCoins([[0,1],[0,2],[0,3],[0,4],[0,5]], [1,2,3,4,5,6])));
// Expected: [120,1,1,1,1,1]
console.log(JSON.stringify(placedCoins([[0,1],[0,2],[1,3],[1,4],[1,5],[2,6],[2,7],[2,8]], [1,4,2,3,5,7,8,-4,2])));
// Expected: [280,140,32,1,1,1,1,1,1]
console.log(JSON.stringify(placedCoins([[0,1],[0,2]], [1,2,-2])));
// Expected: [0,1,1]
console.log(JSON.stringify(placedCoins([[0,1],[1,2],[2,3]], [1,2,-3,-4])));
// Expected: node0 subtree [1,2,-3,-4], max product = max(-3*-4*2=24, 1*2*-4=-8) = 24; node1 subtree [2,-3,-4], max=max(-3*-4*2=24, -4*-3*2=24)=24; node2 subtree [-3,-4] size=2 -> 1; node3 leaf -> 1
// Expected: [24,24,1,1]
console.log(JSON.stringify(placedCoins([[0,1],[0,2]], [1,1,1])));
// Expected: node0 subtree [1,1,1] product=1; node1 leaf->1; node2 leaf->1
// Expected: [1,1,1]
