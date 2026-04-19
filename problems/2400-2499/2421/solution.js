/*
 * @lc app=leetcode id=2421 lang=javascript
 *
 * [2421] Number of Good Paths
 */

// @lc code=start
/**
 * @param {number[]} vals
 * @param {number[][]} edges
 * @return {number}
 */
var numberOfGoodPaths = function(vals, edges) {
    const n = vals.length;
    const parent = new Int32Array(n);
    for (let i = 0; i < n; i++) parent[i] = i;

    const find = (x) => {
        while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; }
        return x;
    };

    // Group nodes by value
    const valueNodes = new Map();
    for (let i = 0; i < n; i++) {
        if (!valueNodes.has(vals[i])) valueNodes.set(vals[i], []);
        valueNodes.get(vals[i]).push(i);
    }

    // Sort edges by max value of endpoints
    edges.sort((a, b) => Math.max(vals[a[0]], vals[a[1]]) - Math.max(vals[b[0]], vals[b[1]]));

    // Track count of nodes with each value per component
    const count = new Int32Array(n);
    let result = n; // each single node is a good path
    let edgeIdx = 0;

    const sortedValues = [...valueNodes.keys()].sort((a, b) => a - b);

    for (const v of sortedValues) {
        // Add edges where max endpoint value <= v
        while (edgeIdx < edges.length) {
            const [a, b] = edges[edgeIdx];
            if (Math.max(vals[a], vals[b]) > v) break;
            const ra = find(a), rb = find(b);
            if (ra !== rb) {
                parent[ra] = rb;
            }
            edgeIdx++;
        }

        // Count nodes with value v per component
        const compCount = new Map();
        for (const node of valueNodes.get(v)) {
            const r = find(node);
            compCount.set(r, (compCount.get(r) || 0) + 1);
        }

        for (const cnt of compCount.values()) {
            result += cnt * (cnt - 1) / 2;
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(numberOfGoodPaths([1,3,2,1,3], [[0,1],[0,2],[2,3],[2,4]])); // 6
console.log(numberOfGoodPaths([1,1,2,2,3], [[0,1],[1,2],[2,3],[2,4]])); // 7
console.log(numberOfGoodPaths([1], [])); // 1
console.log(numberOfGoodPaths([1,1,1], [[0,1],[1,2]])); // 6
console.log(numberOfGoodPaths([2,1,2], [[0,1],[1,2]])); // 4
