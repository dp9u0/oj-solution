/*
 * @lc app=leetcode id=963 lang=javascript
 *
 * [963] Minimum Area Rectangle II
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaFreeRect = function(points) {
    const n = points.length;
    const pointSet = new Set(points.map(p => `${p[0]},${p[1]}`));
    let minArea = Infinity;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (j === i) continue;
            for (let k = j + 1; k < n; k++) {
                if (k === i) continue;
                // Check if vectors ij and ik are perpendicular (dot product = 0)
                const [xi, yi] = points[i];
                const [xj, yj] = points[j];
                const [xk, yk] = points[k];

                const dxj = xj - xi, dyj = yj - yi;
                const dxk = xk - xi, dyk = yk - yi;

                // Dot product
                if (dxj * dxk + dyj * dyk !== 0) continue;

                // Fourth point: j + k - i
                const lx = xj + xk - xi;
                const ly = yj + yk - yi;

                if (!pointSet.has(`${lx},${ly}`)) continue;

                const area = Math.abs(dxj * dyk - dyj * dxk);
                minArea = Math.min(minArea, area);
            }
        }
    }

    return minArea === Infinity ? 0 : minArea;
};
// @lc code=end

// TEST:
console.log(minAreaFreeRect([[1,2],[2,1],[1,0],[0,1]])); // 2
console.log(minAreaFreeRect([[0,1],[2,1],[1,1],[1,0],[2,0]])); // 1
console.log(minAreaFreeRect([[0,3],[1,2],[3,1],[1,3],[2,1]])); // 0
