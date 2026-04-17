/*
 * @lc app=leetcode id=3715 lang=javascript
 *
 * [3715] Sum of Perfect Square Ancestors
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} nums
 * @return {number}
 */
var sumOfAncestors = function(n, edges, nums) {
    // Compute square-free part: remove all squared prime factors
    const squareFree = (x) => {
        for (let p = 2; p * p <= x; p++) {
            while (x % (p * p) === 0) x = Math.floor(x / (p * p));
        }
        return x;
    };

    // Build adjacency list
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    // Precompute square-free parts
    const sf = nums.map(x => squareFree(x));

    let result = 0;
    const count = new Map();

    const dfs = (node, parent) => {
        if (node !== 0) {
            result += (count.get(sf[node]) || 0);
        }
        count.set(sf[node], (count.get(sf[node]) || 0) + 1);
        for (const child of adj[node]) {
            if (child !== parent) dfs(child, node);
        }
        count.set(sf[node], count.get(sf[node]) - 1);
    };

    dfs(0, -1);
    return result;
};
// @lc code=end

// TEST:
console.log(sumOfAncestors(3, [[0,1],[1,2]], [2,8,2])); // 3
console.log(sumOfAncestors(3, [[0,1],[0,2]], [1,2,4])); // 1
console.log(sumOfAncestors(4, [[0,1],[0,2],[1,3]], [1,2,9,4])); // 2
console.log(sumOfAncestors(1, [], [5])); // 0
console.log(sumOfAncestors(2, [[0,1]], [4,9])); // 1 (4*9=36, square)
