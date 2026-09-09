/*
 * @lc app=leetcode.cn id=LCP 15 lang=javascript
 *
 * [LCP 15] 游乐园的迷宫
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {string} direction
 * @return {number[]}
 */
var visitOrder = function(points, direction) {
    const n = points.length;
    // start: bottom-most point, leftmost on tie — all others in the half-plane above
    let v0 = 0;
    for (let i = 1; i < n; i++) {
        if (points[i][1] < points[v0][1] ||
            (points[i][1] === points[v0][1] && points[i][0] < points[v0][0])) v0 = i;
    }
    const used = new Array(n).fill(false);
    used[v0] = true;
    const order = [v0];
    let cur = v0;
    for (let t = 0; t < direction.length; t++) {
        // gift wrapping: 'L' → angular min (others strictly left of cur→w), 'R' → angular max
        let w = -1;
        for (let p = 0; p < n; p++) {
            if (used[p]) continue;
            if (w === -1) { w = p; continue; }
            const c = (points[w][0] - points[cur][0]) * (points[p][1] - points[cur][1])
                    - (points[w][1] - points[cur][1]) * (points[p][0] - points[cur][0]);
            if (direction[t] === 'L' ? c < 0 : c > 0) w = p;
        }
        used[w] = true;
        order.push(w);
        cur = w;
    }
    for (let p = 0; p < n; p++) if (!used[p]) order.push(p); // end point
    return order;
};
// @lc code=end

// TEST:
const checkOrder = (points, direction, order) => {
    const n = points.length;
    if (order.length !== n || new Set(order).size !== n) return false;
    for (let k = 1; k <= n - 2; k++) {
        const [ax, ay] = points[order[k - 1]], [bx, by] = points[order[k]], [cx, cy] = points[order[k + 1]];
        const cross = (bx - ax) * (cy - by) - (by - ay) * (cx - bx);
        if (direction[k - 1] === 'L' ? cross <= 0 : cross >= 0) return false;
    }
    return true;
};
console.log(checkOrder([[1, 1], [1, 4], [3, 2], [2, 1]], "LL", visitOrder([[1, 1], [1, 4], [3, 2], [2, 1]], "LL")));
console.log(checkOrder([[1, 3], [2, 4], [3, 3], [2, 1]], "LR", visitOrder([[1, 3], [2, 4], [3, 3], [2, 1]], "LR")));
console.log(checkOrder([[0, 0], [4, 0], [4, 4], [0, 4], [2, 3]], "LRL", visitOrder([[0, 0], [4, 0], [4, 4], [0, 4], [2, 3]], "LRL")));
console.log(checkOrder([[0, 0], [10, 0], [5, 5], [10, 10], [0, 10]], "RRLL", visitOrder([[0, 0], [10, 0], [5, 5], [10, 10], [0, 10]], "RRLL")));
console.log(checkOrder([[2, 5], [7, 9], [1, 8], [6, 3], [4, 7], [9, 2]], "RLRLL", visitOrder([[2, 5], [7, 9], [1, 8], [6, 3], [4, 7], [9, 2]], "RLRLL")));
console.log(checkOrder([[5, 3], [1, 2], [8, 1], [4, 9], [6, 6], [2, 8], [9, 4]], "LLRLRR", visitOrder([[5, 3], [1, 2], [8, 1], [4, 9], [6, 6], [2, 8], [9, 4]], "LLRLRR")));
