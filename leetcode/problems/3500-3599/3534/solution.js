/*
 * @lc app=leetcode id=3534 lang=javascript
 *
 * [3534] Path Existence Queries in a Graph II
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {number[]}
 */
var pathExistenceQueries = function(n, nums, maxDiff, queries) {
    const sorted = [];
    for (let i = 0; i < n; i++) sorted.push([nums[i], i]);
    sorted.sort((a, b) => a[0] - b[0]);

    const posInSorted = new Int32Array(n);
    for (let i = 0; i < n; i++) posInSorted[sorted[i][1]] = i;

    // Component detection
    const compId = new Int32Array(n);
    for (let i = 1; i < n; i++) {
        compId[i] = (sorted[i][0] - sorted[i - 1][0] <= maxDiff) ? compId[i - 1] : i;
    }

    // right[i] = farthest right reachable from sorted position i in 1 step
    const right = new Int32Array(n);
    for (let i = 0, j = 0; i < n; i++) {
        while (j + 1 < n && sorted[j + 1][0] - sorted[i][0] <= maxDiff) j++;
        right[i] = j;
    }

    // Binary lifting
    const LOG = 17;
    const up = new Array(LOG);
    up[0] = new Int32Array(right);
    for (let k = 1; k < LOG; k++) {
        up[k] = new Int32Array(n);
        for (let i = 0; i < n; i++) {
            up[k][i] = up[k - 1][up[k - 1][i]];
        }
    }

    // Answer queries
    const result = new Array(queries.length);
    for (let q = 0; q < queries.length; q++) {
        const [u, v] = queries[q];
        if (u === v) { result[q] = 0; continue; }

        let pu = posInSorted[u], pv = posInSorted[v];
        if (pu > pv) { const t = pu; pu = pv; pv = t; }

        if (compId[pu] !== compId[pv]) { result[q] = -1; continue; }

        let pos = pu, steps = 0;
        for (let k = LOG - 1; k >= 0; k--) {
            if (up[k][pos] < pv) {
                pos = up[k][pos];
                steps += (1 << k);
            }
        }
        result[q] = steps + 1;
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(pathExistenceQueries(5, [1,8,3,4,2], 3, [[0,3],[2,4]]))); // [1,1]
console.log(JSON.stringify(pathExistenceQueries(5, [5,3,1,9,10], 2, [[0,1],[0,2],[2,3],[4,3]]))); // [1,2,-1,1]
console.log(JSON.stringify(pathExistenceQueries(3, [3,6,1], 1, [[0,0],[0,1],[1,2]]))); // [0,-1,-1]
console.log(JSON.stringify(pathExistenceQueries(2, [1,2], 1, [[0,1]]))); // [1]
console.log(JSON.stringify(pathExistenceQueries(4, [1,3,6,10], 4, [[0,3]]))); // [3]
