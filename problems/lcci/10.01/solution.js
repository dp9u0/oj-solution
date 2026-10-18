/*
 * @lc app=leetcode.cn id=面试题 10.01 lang=javascript
 *
 * [面试题 10.01] 合并排序的数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
    // 从尾向前归并，避免前向搬移
    let i = m - 1;
    let j = n - 1;
    let tail = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (A[i] > B[j]) {
            A[tail--] = A[i--];
        } else {
            A[tail--] = B[j--];
        }
    }
    while (j >= 0) A[tail--] = B[j--];
};
// @lc code=end

// TEST:
const A1 = [1, 2, 3, 0, 0, 0];
merge(A1, 3, [2, 5, 6], 3);
console.log(JSON.stringify(A1) === '[1,2,2,3,5,6]');
const A2 = [4, 5, 6, 0, 0, 0];
merge(A2, 3, [1, 2, 3], 3);
console.log(JSON.stringify(A2) === '[1,2,3,4,5,6]'); // B 全部更小
const A3 = [0, 0];
merge(A3, 0, [1, 2], 2);
console.log(JSON.stringify(A3) === '[1,2]'); // A 初始为空
const A4 = [1];
merge(A4, 1, [], 0);
console.log(JSON.stringify(A4) === '[1]'); // B 为空
