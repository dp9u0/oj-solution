/*
 * @lc app=leetcode id=3786 lang=javascript
 *
 * [3786] Total Sum of Interaction Cost in Tree Groups
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} group
 * @return {number}
 */
var interactionCosts = function(n, edges, group) {
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    // Count total nodes per group
    const groupTotal = {};
    for (const g of group) {
        groupTotal[g] = (groupTotal[g] || 0) + 1;
    }

    // DFS to count group sizes in each subtree
    const subCounts = Array.from({ length: n }, () => ({}));
    let result = 0;

    const dfs = (u, parent) => {
        subCounts[u][group[u]] = 1;
        for (const v of adj[u]) {
            if (v === parent) continue;
            dfs(v, u);
            for (const g in subCounts[v]) {
                subCounts[u][g] = (subCounts[u][g] || 0) + subCounts[v][g];
            }
        }
        // Edge contribution: for each group, cntInSub * (total - cntInSub)
        if (parent !== -1) {
            for (const g in subCounts[u]) {
                const cnt = subCounts[u][g];
                result += cnt * (groupTotal[g] - cnt);
            }
        }
    };

    dfs(0, -1);
    return result;
};
// @lc code=end

// TEST:
console.log(interactionCosts(3, [[0,1],[1,2]], [1,1,1])); // 4
console.log(interactionCosts(3, [[0,1],[1,2]], [3,2,3])); // 2
console.log(interactionCosts(4, [[0,1],[0,2],[0,3]], [1,1,4,4])); // 3
console.log(interactionCosts(2, [[0,1]], [9,8])); // 0
