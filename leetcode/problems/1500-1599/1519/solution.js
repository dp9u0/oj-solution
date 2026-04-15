/*
 * @lc app=leetcode id=1519 lang=javascript
 *
 * [1519] Number of Nodes in the Sub-Tree With the Same Label
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function(n, edges, labels) {
    const adj = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) {
        adj[a].push(b);
        adj[b].push(a);
    }

    const ans = new Array(n).fill(0);

    const dfs = (node, parent) => {
        const count = new Array(26).fill(0);
        count[labels.charCodeAt(node) - 97]++;
        for (const child of adj[node]) {
            if (child === parent) continue;
            const childCount = dfs(child, node);
            for (let i = 0; i < 26; i++) {
                count[i] += childCount[i];
            }
        }
        ans[node] = count[labels.charCodeAt(node) - 97];
        return count;
    };

    dfs(0, -1);
    return ans;
};
// @lc code=end

// TEST:
console.log(countSubTrees(7, [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], "abaedcd")); // [2,1,1,1,1,1,1]
console.log(countSubTrees(4, [[0,1],[1,2],[0,3]], "bbbb")); // [4,2,1,1]
console.log(countSubTrees(5, [[0,1],[0,2],[1,3],[0,4]], "aabab")); // [3,2,1,1,1]
