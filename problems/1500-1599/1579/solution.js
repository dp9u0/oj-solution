/*
 * @lc app=leetcode id=1579 lang=javascript
 *
 * [1579] Remove Max Number of Edges to Keep Graph Fully Traversable
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function(n, edges) {
    const parentA = new Int32Array(n + 1);
    const parentB = new Int32Array(n + 1);
    const rankA = new Int32Array(n + 1);
    const rankB = new Int32Array(n + 1);
    for (let i = 1; i <= n; i++) {
        parentA[i] = parentB[i] = i;
    }
    let compA = n, compB = n;

    const find = (parent, x) => {
        while (parent[x] !== x) {
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    };

    const union = (parent, rank, x, y) => {
        const px = find(parent, x), py = find(parent, y);
        if (px === py) return false;
        if (rank[px] < rank[py]) parent[px] = py;
        else if (rank[px] > rank[py]) parent[py] = px;
        else { parent[py] = px; rank[px]++; }
        return true;
    };

    // Sort: type 3 edges first
    edges.sort((a, b) => b[0] - a[0]);

    let removed = 0;
    for (const [type, u, v] of edges) {
        if (type === 3) {
            const ua = union(parentA, rankA, u, v);
            const ub = union(parentB, rankB, u, v);
            if (ua) compA--;
            if (ub) compB--;
            if (!ua && !ub) removed++;
        } else if (type === 1) {
            if (union(parentA, rankA, u, v)) compA--;
            else removed++;
        } else {
            if (union(parentB, rankB, u, v)) compB--;
            else removed++;
        }
    }

    return compA === 1 && compB === 1 ? removed : -1;
};
// @lc code=end

// TEST:
console.log(maxNumEdgesToRemove(4, [[3,1,2],[3,2,3],[1,1,3],[1,2,4],[1,1,2],[2,3,4]])); // 2
console.log(maxNumEdgesToRemove(4, [[3,1,2],[3,2,3],[1,1,4],[2,1,4]])); // 0
console.log(maxNumEdgesToRemove(4, [[3,2,3],[1,1,2],[2,3,4]])); // -1
console.log(maxNumEdgesToRemove(2, [[1,1,2],[2,1,2]])); // 0
console.log(maxNumEdgesToRemove(2, [[3,1,2],[1,1,2],[2,1,2]])); // 2
