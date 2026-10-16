/*
 * @lc app=leetcode.cn id=面试题 05.08 lang=javascript
 *
 * [面试题 05.08] 绘制直线
 */

// @lc code=start
/**
 * @param {number} length
 * @param {number} w
 * @param {number} x1
 * @param {number} x2
 * @param {number} y
 * @return {number[]}
 */
var drawLine = function(length, w, x1, x2, y) {
    // 每行 w 像素按 32 位一组存 int；像素 x 在第 x>>5 个 int 的第 31-(x%32) 位
    const perRow = w >> 5;
    const screen = new Array(length).fill(0);
    const rowStart = y * perRow;
    const startOff = x1 >> 5;
    const endOff = x2 >> 5;
    for (let off = startOff; off <= endOff; off++) {
        // 本 int 覆盖的像素列范围 [from, to]，首尾 int 截断
        const from = off === startOff ? x1 & 31 : 0;
        const to = off === endOff ? x2 & 31 : 31;
        const width = to - from + 1;
        // 宽 32 时 1<<32 会回绕，直接取 -1
        const mask = width === 32 ? -1 : ((1 << width) - 1) << (31 - to);
        screen[rowStart + off] |= mask;
    }
    return screen;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(drawLine(1, 32, 30, 31, 0)) === '[3]');
console.log(JSON.stringify(drawLine(3, 96, 0, 95, 0)) === '[-1,-1,-1]');
console.log(JSON.stringify(drawLine(1, 32, 0, 0, 0)) === '[-2147483648]'); // 最高位
console.log(JSON.stringify(drawLine(2, 64, 30, 34, 0)) === '[3,-536870912]'); // 跨 int
console.log(JSON.stringify(drawLine(4, 64, 20, 43, 1)) === '[0,0,4095,-1048576]'); // 第二行部分覆盖
console.log(JSON.stringify(drawLine(1, 32, 5, 5, 0)) === '[67108864]'); // 单像素
