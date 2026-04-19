/*
 * @lc app=leetcode id=3887 lang=javascript
 *
 * [3887] Incremental Even-Weighted Cycle Queries
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var numberOfEdgesAdded = function(n, edges) {
    const parent = Array.from({length: n}, (_, i) => i);
    const rank = new Array(n).fill(0);
    const parity = new Array(n).fill(0);

    function find(x) {
        if (parent[x] !== x) {
            const p = parent[x];
            parent[x] = find(parent[x]);
            parity[x] ^= parity[p];
        }
        return parent[x];
    }

    let count = 0;
    for (const [u, v, w] of edges) {
        const ru = find(u), pu = parity[u];
        const rv = find(v), pv = parity[v];

        if (ru === rv) {
            if ((pu ^ pv ^ w) === 0) count++;
        } else {
            if (rank[ru] < rank[rv]) {
                parent[ru] = rv;
                parity[ru] = pu ^ pv ^ w;
            } else if (rank[ru] > rank[rv]) {
                parent[rv] = ru;
                parity[rv] = pu ^ pv ^ w;
            } else {
                parent[ru] = rv;
                parity[ru] = pu ^ pv ^ w;
                rank[rv]++;
            }
            count++;
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(numberOfEdgesAdded(3, [[0,1,1],[1,2,1],[0,2,1]]));   // 2
console.log(numberOfEdgesAdded(3, [[0,1,1],[1,2,1],[0,2,0]]));   // 3
console.log(numberOfEdgesAdded(4, [[0,1,0],[2,3,0],[1,2,1]]));   // 3
console.log(numberOfEdgesAdded(4, [[0,1,1],[1,2,0],[2,3,0],[0,3,0]]));   // 3 (last rejected)
console.log(numberOfEdgesAdded(3, [[0,1,0],[1,2,0],[0,2,0]]));   // 3
