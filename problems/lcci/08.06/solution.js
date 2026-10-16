/*
 * @lc app=leetcode.cn id=面试题 08.06 lang=javascript
 *
 * [面试题 08.06] 汉诺塔问题
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
var hanota = function(A, B, C) {
    // move(n, from, aux, to)：n 个盘 from 借助 aux 移到 to
    const move = (n, from, aux, to) => {
        if (n === 0) return;
        move(n - 1, from, to, aux); // 上 n-1 个先挪到 aux
        to.push(from.pop()); // 最大盘 from → to
        move(n - 1, aux, from, to); // aux 上的 n-1 个再挪到 to
    };
    move(A.length, A, B, C);
};
// @lc code=end

// TEST:
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const t1 = [[2, 1, 0], [], []];
hanota(t1[0], t1[1], t1[2]);
console.log(eq(t1[2], [2, 1, 0]) && t1[0].length === 0 && t1[1].length === 0);
const t2 = [[1, 0], [], []];
hanota(t2[0], t2[1], t2[2]);
console.log(eq(t2[2], [1, 0]));
const t3 = [[0], [], []];
hanota(t3[0], t3[1], t3[2]);
console.log(eq(t3[2], [0]));
const t4 = [[4, 3, 2, 1, 0], [], []];
hanota(t4[0], t4[1], t4[2]);
console.log(eq(t4[2], [4, 3, 2, 1, 0]));
const t5 = [Array.from({ length: 14 }, (_, i) => 13 - i), [], []];
hanota(t5[0], t5[1], t5[2]);
console.log(eq(t5[2], Array.from({ length: 14 }, (_, i) => 13 - i)));
