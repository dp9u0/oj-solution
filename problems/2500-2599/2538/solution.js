/*
 * @lc app=leetcode id=2538 lang=javascript
 *
 * [2538] Difference Between Maximum and Minimum Price Sum
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} price
 * @return {number}
 */
var maxOutput = function(n, edges, price) {
    if (n === 1) return 0;

    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    // Root at 0, build parent and children arrays
    const parent = new Int32Array(n).fill(-1);
    const children = Array.from({ length: n }, () => []);
    const order = [0];
    parent[0] = -2; // mark as visited
    for (let i = 0; i < order.length; i++) {
        const u = order[i];
        for (const v of adj[u]) {
            if (parent[v] === -1) {
                parent[v] = u;
                children[u].push(v);
                order.push(v);
            }
        }
    }

    // down[u] = max path sum from u to any descendant
    const down = new Float64Array(n);
    for (let i = order.length - 1; i >= 0; i--) {
        const u = order[i];
        down[u] = price[u];
        for (const c of children[u]) {
            down[u] = Math.max(down[u], price[u] + down[c]);
        }
    }

    // Reroot: up[u] = max path sum from u going through parent
    const up = new Float64Array(n);
    up[0] = 0; // root has no "up" direction
    let ans = 0;

    for (let i = 0; i < order.length; i++) {
        const u = order[i];
        // g(u) = max path sum from u to any node
        const g = Math.max(down[u], up[u]);
        ans = Math.max(ans, g - price[u]);

        // Precompute top-2 (price[u] + down[c]) among children
        let max1 = 0, max2 = 0;
        for (const c of children[u]) {
            const val = price[u] + down[c];
            if (val > max1) { max2 = max1; max1 = val; }
            else if (val > max2) { max2 = val; }
        }

        for (const c of children[u]) {
            const siblingBest = (price[u] + down[c] === max1) ? max2 : max1;
            // up[c]: max path from c to nodes outside c's subtree
            // Options: stop at parent (price[u]), go further up (up[u]), or go to sibling subtree
            up[c] = price[c] + Math.max(up[u], siblingBest, price[u]);
        }
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(maxOutput(6, [[0,1],[1,2],[1,3],[3,4],[3,5]], [9,8,7,6,10,5])); // 24
console.log(maxOutput(3, [[0,1],[1,2]], [1,1,1])); // 2
console.log(maxOutput(1, [], [1])); // 0
console.log(maxOutput(2, [[0,1]], [5,10])); // 10
console.log(maxOutput(4, [[0,1],[1,2],[2,3]], [1,2,3,4])); // 9
console.log(maxOutput(3, [[0,1],[1,2]], [100,1,1])); // 101