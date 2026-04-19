/*
 * @lc app=leetcode id=3661 lang=javascript
 *
 * [3661] Maximum Walls Destroyed by Robots
 */

// @lc code=start
/**
 * @param {number[]} robots
 * @param {number[]} distance
 * @param {number[]} walls
 * @return {number}
 */
var maxWalls = function(robots, distance, walls) {
    const n = robots.length;
    const rd = robots.map((r, i) => [r, distance[i]]).sort((a, b) => a[0] - b[0]);
    const r = rd.map(x => x[0]);
    const d = rd.map(x => x[1]);
    const w = [...walls].sort((a, b) => a - b);
    const m = w.length;
    const rSet = new Set(r);

    const lb = (val) => {
        let lo = 0, hi = m;
        while (lo < hi) { const mid = (lo + hi) >> 1; if (w[mid] < val) lo = mid + 1; else hi = mid; }
        return lo;
    };

    const gapA = new Int32Array(n - 1);
    const gapB = new Int32Array(n - 1);
    const gapC = new Int32Array(n - 1);

    for (let i = 0; i < n - 1; i++) {
        const rR = Math.min(r[i] + d[i], r[i + 1]);
        const lL = Math.max(r[i + 1] - d[i + 1], r[i]);
        const lo = lb(r[i] + 1), hi = lb(r[i + 1]);
        for (let j = lo; j < hi; j++) {
            const wall = w[j];
            const reachL = wall <= rR, reachR = wall >= lL;
            if (reachL && reachR) gapC[i]++;
            else if (reachL) gapA[i]++;
            else if (reachR) gapB[i]++;
        }
    }

    let wallAtRobot = 0;
    for (const wall of w) { if (rSet.has(wall)) wallAtRobot++; }

    let leftGap = 0;
    const leftBound = r[0] - d[0];
    for (let j = 0; j < lb(r[0]); j++) { if (w[j] >= leftBound) leftGap++; }

    let rightGap = 0;
    const rightBound = r[n - 1] + d[n - 1];
    for (let j = lb(r[n - 1] + 1); j < m; j++) { if (w[j] <= rightBound) rightGap++; }

    let dp0 = leftGap, dp1 = 0;
    for (let i = 0; i < n - 1; i++) {
        const a = gapA[i], b = gapB[i], c = gapC[i];
        const ndp0 = Math.max(dp0 + b + c, dp1 + a + b + c);
        const ndp1 = Math.max(dp0, dp1 + a + c);
        dp0 = ndp0;
        dp1 = ndp1;
    }

    return Math.max(dp0, dp1 + rightGap) + wallAtRobot;
};
// @lc code=end

// TEST:
console.log(maxWalls([4], [3], [1,10])); // 1
console.log(maxWalls([10,2], [5,1], [5,2,7])); // 3
console.log(maxWalls([1,2], [100,1], [10])); // 0
console.log(maxWalls([5], [10], [1,5,15])); // 2
console.log(maxWalls([1,5,10], [3,5,2], [0,3,6,8,13])); // 3
