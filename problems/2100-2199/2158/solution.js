/*
 * @lc app=leetcode.cn id=2158 lang=javascript
 *
 * [2158] 每天绘制新区域的数量
 */

// @lc code=start
/**
 * @param {number[][]} paint
 * @return {number[]}
 */
var amountPainted = function(paint) {
    const C = 50001;
    const sum = new Int32Array(4 * C);
    const lazy = new Uint8Array(4 * C); // 1 = fully painted below
    const apply = (node, l, r) => {
        sum[node] = r - l;
        lazy[node] = 1;
    };
    const pushDown = (node, l, r) => {
        if (!lazy[node]) return;
        const mid = (l + r) >> 1;
        apply(2 * node, l, mid);
        apply(2 * node + 1, mid, r);
        lazy[node] = 0;
    };
    const update = (node, l, r, ql, qr) => {
        if (qr <= l || r <= ql) return;
        if (ql <= l && r <= qr) {
            apply(node, l, r);
            return;
        }
        pushDown(node, l, r);
        const mid = (l + r) >> 1;
        update(2 * node, l, mid, ql, qr);
        update(2 * node + 1, mid, r, ql, qr);
        sum[node] = sum[2 * node] + sum[2 * node + 1];
    };
    const query = (node, l, r, ql, qr) => {
        if (qr <= l || r <= ql) return 0;
        if (ql <= l && r <= qr) return sum[node];
        pushDown(node, l, r);
        const mid = (l + r) >> 1;
        return query(2 * node, l, mid, ql, qr) + query(2 * node + 1, mid, r, ql, qr);
    };
    const worklog = paint.map(([s, e]) => {
        const newArea = (e - s) - query(1, 0, C, s, e);
        update(1, 0, C, s, e);
        return newArea;
    });
    return worklog;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(amountPainted([[1,4],[4,7],[5,8]]))); // [3,3,1]
console.log(JSON.stringify(amountPainted([[1,4],[5,8],[4,7]]))); // [3,3,1]
console.log(JSON.stringify(amountPainted([[1,5],[2,4]]))); // [4,0]
console.log(JSON.stringify(amountPainted([[0,2],[2,4]]))); // [2,2]
console.log(JSON.stringify(amountPainted([[3,6],[1,7],[0,2]]))); // [3,3,1]
