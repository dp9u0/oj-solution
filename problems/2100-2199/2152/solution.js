/*
 * @lc app=leetcode.cn id=2152 lang=javascript
 *
 * [2152] 穿过所有点的所需最少直线数量
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minimumLines = function(points) {
    const n = points.length;
    if (n === 1) return 1;
    const lineMask = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) continue;
            const [x1, y1] = points[i], [x2, y2] = points[j];
            const dx = x2 - x1, dy = y2 - y1;
            let mask = 0;
            for (let k = 0; k < n; k++) {
                const [x3, y3] = points[k];
                if (dx * (y3 - y1) === dy * (x3 - x1)) mask |= 1 << k;
            }
            lineMask[i][j] = mask;
        }
    }
    const FULL = (1 << n) - 1;
    const dp = new Array(1 << n).fill(Infinity);
    dp[0] = 0;
    for (let mask = 1; mask <= FULL; mask++) {
        const i = Math.log2(mask & (-mask)) | 0;
        let best = dp[mask & ~(1 << i)] + 1; // cover point i alone
        for (let j = 0; j < n; j++) {
            if (j === i || !(mask & (1 << j))) continue;
            const sub = lineMask[i][j] & mask;
            if (dp[mask & ~sub] + 1 < best) best = dp[mask & ~sub] + 1;
        }
        dp[mask] = best;
    }
    return dp[FULL];
};
// @lc code=end

// TEST:
console.log(minimumLines([[0,1],[2,3],[4,5],[4,3]])); // 2
console.log(minimumLines([[0,2],[-2,-2],[1,4]])); // 1
console.log(minimumLines([[3,3]])); // 1
console.log(minimumLines([[0,0],[1,1],[2,2],[3,3]])); // 1
console.log(minimumLines([[0,0],[1,0],[0,1]])); // 2 (origin pair + vertical/horizontal: lines (0,0)-(1,0), (0,1) alone... min 2)
