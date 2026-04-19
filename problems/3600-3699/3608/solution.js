/*
 * @lc app=leetcode id=3608 lang=javascript
 *
 * [3608] Minimum Time for K Connected Components
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var minTime = function(n, edges, k) {
    if (edges.length === 0) return 0;

    let lo = 0, hi = 0;
    for (const e of edges) hi = Math.max(hi, e[2]);
    let result = hi + 1;

    const check = (t) => {
        const parent = new Int32Array(n);
        for (let i = 0; i < n; i++) parent[i] = i;
        const find = (x) => {
            while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; }
            return x;
        };

        let components = n;
        for (const [u, v, time] of edges) {
            if (time > t) {
                const ru = find(u), rv = find(v);
                if (ru !== rv) { parent[ru] = rv; components--; }
            }
        }
        return components >= k;
    };

    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (check(mid)) {
            result = mid;
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(minTime(2, [[0,1,3]], 2)); // 3
console.log(minTime(3, [[0,1,2],[1,2,4]], 3)); // 4
console.log(minTime(3, [[0,2,5]], 2)); // 0
console.log(minTime(5, [], 5)); // 0
console.log(minTime(4, [[0,1,1],[1,2,2],[2,3,3]], 2)); // 1
