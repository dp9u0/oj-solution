/*
 * @lc app=leetcode.cn id=面试题 16.13 lang=javascript
 *
 * [面试题 16.13] 平分正方形
 */

// @lc code=start
/**
 * @param {number[]} square1
 * @param {number[]} square2
 * @return {number[]}
 */
var cutSquares = function(square1, square2) {
    // 平分线必过两中心；中心重合时按规则取竖直线（斜率无穷大）
    const c1x = square1[0] + square1[2] / 2;
    const c1y = square1[1] + square1[2] / 2;
    const c2x = square2[0] + square2[2] / 2;
    const c2y = square2[1] + square2[2] / 2;
    if (c1x === c2x) {
        const yLo = Math.min(square1[1], square2[1]);
        const yHi = Math.max(square1[1] + square1[2], square2[1] + square2[2]);
        return [c1x, yLo, c1x, yHi];
    }
    const dx = c2x - c1x;
    const dy = c2y - c1y;
    // 直线参数化 P = c1 + t·d，各自方块求 t 区间（裁剪到方块范围）
    const tRange = sq => {
        let lo = -Infinity;
        let hi = Infinity;
        let a = (sq[0] - c1x) / dx;
        let b = (sq[0] + sq[2] - c1x) / dx;
        lo = Math.max(lo, Math.min(a, b));
        hi = Math.min(hi, Math.max(a, b));
        a = (sq[1] - c1y) / dy;
        b = (sq[1] + sq[2] - c1y) / dy;
        lo = Math.max(lo, Math.min(a, b));
        hi = Math.min(hi, Math.max(a, b));
        return [lo, hi];
    };
    const [lo1, hi1] = tRange(square1);
    const [lo2, hi2] = tRange(square2);
    // 距离最远的两个交点 = t 的最小/最大值
    const lo = Math.min(lo1, lo2);
    const hi = Math.max(hi1, hi2);
    const p = [c1x + lo * dx, c1y + lo * dy];
    const q = [c1x + hi * dx, c1y + hi * dy];
    // 输出序：X1 < X2；相等则 Y1 <= Y2
    if (p[0] > q[0] || (p[0] === q[0] && p[1] > q[1])) return [q[0], q[1], p[0], p[1]];
    return [p[0], p[1], q[0], q[1]];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(cutSquares([-1, -1, 2], [0, -1, 2])) === '[-1,0,2,0]');
console.log(JSON.stringify(cutSquares([-1, 1, 3], [0, 0, 5])) === '[-1,2.5,5,2.5]');
// 中心同 x：竖直线
console.log(JSON.stringify(cutSquares([0, 0, 2], [0, 3, 2])) === '[1,0,1,5]');
// 两中心重合：多条线可选，取竖直
console.log(JSON.stringify(cutSquares([0, 0, 2], [0, 0, 2])) === '[1,0,1,2]');
// 斜线且输出按 X 升序
console.log(JSON.stringify(cutSquares([0, 0, 2], [3, 3, 2])) === '[0,0,5,5]');
