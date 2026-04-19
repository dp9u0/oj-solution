/*
 * @lc app=leetcode id=2959 lang=javascript
 *
 * [2959] Number of Possible Sets of Closing Branches
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} maxDistance
 * @param {number[][]} roads
 * @return {number}
 */
var numberOfSets = function(n, maxDistance, roads) {
    let result = 0;
    const full = (1 << n) - 1;

    for (let mask = 0; mask <= full; mask++) {
        // Count active nodes
        const active = [];
        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) active.push(i);
        }
        if (active.length <= 1) { result++; continue; }

        // Build distance matrix for active nodes
        const idx = new Map();
        active.forEach((v, i) => idx.set(v, i));
        const m = active.length;
        const INF = 1e9;
        const dist = Array.from({ length: m }, () => new Int32Array(m).fill(INF));
        for (let i = 0; i < m; i++) dist[i][i] = 0;

        for (const [u, v, w] of roads) {
            if ((mask & (1 << u)) && (mask & (1 << v))) {
                const iu = idx.get(u), iv = idx.get(v);
                if (w < dist[iu][iv]) {
                    dist[iu][iv] = w;
                    dist[iv][iu] = w;
                }
            }
        }

        // Floyd-Warshall
        for (let k = 0; k < m; k++)
            for (let i = 0; i < m; i++)
                for (let j = 0; j < m; j++)
                    if (dist[i][k] + dist[k][j] < dist[i][j])
                        dist[i][j] = dist[i][k] + dist[k][j];

        // Check all pairs <= maxDistance
        let ok = true;
        for (let i = 0; i < m && ok; i++)
            for (let j = i + 1; j < m && ok; j++)
                if (dist[i][j] > maxDistance) ok = false;

        if (ok) result++;
    }

    return result;
};
// @lc code=end

// TEST:
console.log(numberOfSets(3, 5, [[0,1,2],[1,2,10],[0,2,10]])); // 5
console.log(numberOfSets(3, 5, [[0,1,20],[0,1,10],[1,2,2],[0,2,2]])); // 7
console.log(numberOfSets(1, 10, [])); // 2
console.log(numberOfSets(2, 10, [[0,1,5]])); // 4
console.log(numberOfSets(2, 3, [[0,1,5]])); // 3