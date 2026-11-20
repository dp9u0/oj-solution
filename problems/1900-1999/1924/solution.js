/*
 * @lc app=leetcode.cn id=1924 lang=javascript
 *
 * [1924] 安装栅栏 II
 */

// @lc code=start
/**
 * @param {number[][]} trees
 * @return {number[]}
 */
var outerTrees = function(trees) {
    const n = trees.length;
    const dist2 = (ax, ay, bx, by) => (ax - bx) * (ax - bx) + (ay - by) * (ay - by);
    const inCircle = (px, py, cx, cy, r) =>
        dist2(px, py, cx, cy) <= r * r + 1e-7;
    const circum = (a, b, c) => {
        const [ax, ay] = a, [bx, by] = b, [cx, cy] = c;
        const d = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by));
        if (Math.abs(d) < 1e-12) {
            // near-collinear: minimal circle is the farthest pair's diameter
            const pairs = [[a, b], [a, c], [b, c]];
            let bu = a, bv = b, bd = -1;
            for (const [u, v] of pairs) {
                const dd = dist2(u[0], u[1], v[0], v[1]);
                if (dd > bd) { bd = dd; bu = u; bv = v; }
            }
            return [(bu[0] + bv[0]) / 2, (bu[1] + bv[1]) / 2, Math.sqrt(bd) / 2];
        }
        const a2 = ax * ax + ay * ay, b2 = bx * bx + by * by, c2 = cx * cx + cy * cy;
        const ux = (a2 * (by - cy) + b2 * (cy - ay) + c2 * (ay - by)) / d;
        const uy = (a2 * (cx - bx) + b2 * (ax - cx) + c2 * (bx - ax)) / d;
        return [ux, uy, Math.sqrt(dist2(ux, uy, ax, ay))];
    };
    for (let i = n - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [trees[i], trees[j]] = [trees[j], trees[i]];
    }
    let cx = 0, cy = 0, r = -1;
    for (let i = 0; i < n; i++) {
        const [px, py] = trees[i];
        if (r >= 0 && inCircle(px, py, cx, cy, r)) continue;
        cx = px; cy = py; r = 0;
        for (let j = 0; j < i; j++) {
            const [qx, qy] = trees[j];
            if (inCircle(qx, qy, cx, cy, r)) continue;
            cx = (px + qx) / 2; cy = (py + qy) / 2;
            r = Math.sqrt(dist2(px, py, qx, qy)) / 2;
            for (let k = 0; k < j; k++) {
                const [sx, sy] = trees[k];
                if (inCircle(sx, sy, cx, cy, r)) continue;
                [cx, cy, r] = circum(trees[i], trees[j], trees[k]);
            }
        }
    }
    return [cx, cy, r];
};
// @lc code=end

// TEST:
const fmt = (a) => '[' + a.map(v => v.toFixed(5)).join(',') + ']';
console.log(fmt(outerTrees([[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]))); // [2.00000,2.00000,2.00000]
console.log(fmt(outerTrees([[1,2],[2,2],[4,2]]))); // [2.50000,2.00000,1.50000]
console.log(fmt(outerTrees([[0,0]]))); // [0.00000,0.00000,0.00000]
console.log(fmt(outerTrees([[0,0],[0,2],[2,0],[2,2]]))); // [1.00000,1.00000,1.41421]
console.log(fmt(outerTrees([[0,0],[1,0],[2,0],[5,0]]))); // [2.50000,0.00000,2.50000]
