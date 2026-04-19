/*
 * @lc app=leetcode id=1453 lang=javascript
 *
 * [1453] Maximum Number of Darts Inside of a Circular Dartboard
 */

// @lc code=start
/**
 * @param {number[][]} darts
 * @param {number} r
 * @return {number}
 */
var numPoints = function(darts, r) {
    const n = darts.length;
    if (n <= 1) return n;

    const eps = 1e-8;
    const count = (cx, cy) => {
        let c = 0;
        for (const [x, y] of darts) {
            if ((x - cx) * (x - cx) + (y - cy) * (y - cy) <= r * r + eps) c++;
        }
        return c;
    };

    let ans = 1;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const [x1, y1] = darts[i];
            const [x2, y2] = darts[j];
            const dx = x2 - x1, dy = y2 - y1;
            const d2 = dx * dx + dy * dy;
            if (d2 > 4 * r * r + eps) continue;

            const d = Math.sqrt(d2);
            if (d < eps) {
                ans = Math.max(ans, count(x1, y1));
                continue;
            }
            // Midpoint
            const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
            // Perpendicular distance from midpoint to center
            const h = Math.sqrt(Math.max(0, r * r - d2 / 4));
            // Perpendicular direction: (-dy, dx) / d
            const px = -dy / d, py = dx / d;
            const c1x = mx + h * px, c1y = my + h * py;
            const c2x = mx - h * px, c2y = my - h * py;
            ans = Math.max(ans, count(c1x, c1y), count(c2x, c2y));
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(numPoints([[-2,0],[2,0],[0,2],[0,-2]], 2) === 4);
console.log(numPoints([[-3,0],[3,0],[2,6],[5,4],[0,9],[7,8]], 5) === 5);
console.log(numPoints([[0,0]], 1) === 1);
console.log(numPoints([[0,0],[1,0]], 1) === 2);
console.log(numPoints([[0,0],[3,0]], 1) === 1);
