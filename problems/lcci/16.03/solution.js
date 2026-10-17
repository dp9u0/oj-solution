/*
 * @lc app=leetcode.cn id=面试题 16.03 lang=javascript
 *
 * [面试题 16.03] 交点
 */

// @lc code=start
/**
 * @param {number[]} start1
 * @param {number[]} end1
 * @param {number[]} start2
 * @param {number[]} end2
 * @return {number[]}
 */
var intersection = function(start1, end1, start2, end2) {
    // 全程整数叉积/点积，坐标 ≤ 2^7 无精度风险
    const cross = (ax, ay, bx, by) => ax * by - ay * bx;
    const dx1 = end1[0] - start1[0];
    const dy1 = end1[1] - start1[1];
    const dx2 = end2[0] - start2[0];
    const dy2 = end2[1] - start2[1];
    const ox = start2[0] - start1[0];
    const oy = start2[1] - start1[1];
    const denom = cross(dx1, dy1, dx2, dy2);
    if (denom !== 0) {
        // 交于 start1 + t·d1，t、u 同时在 [0,1] 内才有交
        const t = cross(ox, oy, dx2, dy2);
        const u = cross(ox, oy, dx1, dy1);
        if (t * denom < 0 || u * denom < 0) return [];
        if (Math.abs(t) > Math.abs(denom) || Math.abs(u) > Math.abs(denom)) return [];
        return [
            (start1[0] * denom + t * dx1) / denom,
            (start1[1] * denom + t * dy1) / denom
        ];
    }
    // 平行：不共线即无交
    if (cross(ox, oy, dx1, dy1) !== 0) return [];
    // 共线：重叠集合 = 双方端点中落在对方线段上的候选点
    const cand = [];
    const inSeg = (p, s, e) =>
        Math.min(s[0], e[0]) <= p[0] && p[0] <= Math.max(s[0], e[0]) &&
        Math.min(s[1], e[1]) <= p[1] && p[1] <= Math.max(s[1], e[1]) &&
        cross(p[0] - s[0], p[1] - s[1], e[0] - s[0], e[1] - s[1]) === 0;
    for (const p of [start1, end1]) {
        if (inSeg(p, start2, end2)) cand.push(p);
    }
    for (const p of [start2, end2]) {
        if (inSeg(p, start1, end1)) cand.push(p);
    }
    if (!cand.length) return [];
    // 取 (X, Y) 字典序最小
    cand.sort((p, q) => p[0] - q[0] || p[1] - q[1]);
    return [cand[0][0], cand[0][1]];
};
// @lc code=end

// TEST:
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
console.log(eq(intersection([0, 0], [1, 0], [1, 1], [0, -1]), [0.5, 0]));
console.log(eq(intersection([0, 0], [3, 3], [1, 1], [2, 2]), [1, 1])); // 重叠取最小 X
console.log(eq(intersection([0, 0], [1, 1], [2, 2], [3, 3]), [])); // 共线不重叠
console.log(eq(intersection([0, 0], [1, 0], [0, 1], [1, 1]), [])); // 平行
console.log(eq(intersection([0, 0], [1, 1], [1, 0], [0, 1]), [0.5, 0.5]));
console.log(eq(intersection([0, 0], [2, 2], [1, 1], [3, 0]), [1, 1])); // 端点相交
console.log(eq(intersection([0, 0], [1, 0], [3, 0], [5, 0]), [])); // 同线不重叠
