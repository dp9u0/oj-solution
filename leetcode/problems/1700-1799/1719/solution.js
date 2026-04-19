/*
 * @lc app=leetcode id=1719 lang=javascript
 *
 * [1719] Number Of Ways To Reconstruct A Tree
 */

// @lc code=start
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var checkWays = function(pairs) {
    // Build adjacency: for each node, set of nodes it appears with
    const adj = new Map();
    for (const [x, y] of pairs) {
        if (!adj.has(x)) adj.set(x, new Set([x]));
        if (!adj.has(y)) adj.set(y, new Set([y]));
        adj.get(x).add(y);
        adj.get(y).add(x);
    }

    // Sort nodes by degree (set size) descending
    const nodes = [...adj.keys()].sort((a, b) => adj.get(b).size - adj.get(a).size);

    // Root must have max degree = number of all nodes
    const n = nodes.length;
    if (adj.get(nodes[0]).size !== n) return 0;

    let multiple = false;
    const parent = new Map();

    for (let i = 1; i < n; i++) {
        const node = nodes[i];
        const neighbors = adj.get(node);
        let found = false;

        // Find parent: a node j < i whose set contains all of node's neighbors
        for (let j = i - 1; j >= 0; j--) {
            const candidate = nodes[j];
            const candSet = adj.get(candidate);
            // Check if candSet is a superset of neighbors
            let isSuperset = true;
            for (const v of neighbors) {
                if (!candSet.has(v)) { isSuperset = false; break; }
            }
            if (isSuperset) {
                if (!found) {
                    parent.set(node, candidate);
                    found = true;
                    // If same set size, they're interchangeable → multiple ways
                    if (candSet.size === neighbors.size) multiple = true;
                }
                // Don't set multiple for higher ancestors - they may not be valid parents
                break;
            }
        }

        if (!found) return 0;
    }

    // Verify all pairs
    for (const [x, y] of pairs) {
        // Check x is ancestor of y or y is ancestor of x
        // Trace x up to root, see if y is on the path, or vice versa
        let isAncestor = false;
        let cur = x;
        while (parent.has(cur)) {
            cur = parent.get(cur);
            if (cur === y) { isAncestor = true; break; }
        }
        if (!isAncestor) {
            cur = y;
            while (parent.has(cur)) {
                cur = parent.get(cur);
                if (cur === x) { isAncestor = true; break; }
            }
        }
        if (!isAncestor) return 0;
    }

    return multiple ? 2 : 1;
};
// @lc code=end

// TEST:
console.log(checkWays([[1,2],[2,3]])); // 1
console.log(checkWays([[1,2],[2,3],[1,3]])); // 2
console.log(checkWays([[1,2],[2,3],[2,4],[1,5]])); // 0
console.log(checkWays([[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]])); // 2
console.log(checkWays([[1,2]])); // 2