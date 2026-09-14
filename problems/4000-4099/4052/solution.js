/*
 * @lc app=leetcode.cn id=4052 lang=javascript
 *
 * [4052] 行列循环移位
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} grid
 * @param {number[]} rowShift
 * @param {number[]} colShift
 * @return {number[][]}
 */
var cyclicShift = function(n, grid, rowShift, colShift) {
    // 第一步：每行向左循环移位 rowShift[i] 位
    const rows = Array.from({ length: n }, () => new Array(n));
    for (let i = 0; i < n; i++) {
        const k = ((rowShift[i] % n) + n) % n;
        for (let j = 0; j < n; j++) {
            rows[i][((j - k) % n + n) % n] = grid[i][j];
        }
    }
    // 第二步：每列向上循环移位 colShift[j] 位
    const res = Array.from({ length: n }, () => new Array(n));
    for (let j = 0; j < n; j++) {
        const k = ((colShift[j] % n) + n) % n;
        for (let i = 0; i < n; i++) {
            res[((i - k) % n + n) % n][j] = rows[i][j];
        }
    }
    return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(cyclicShift(2, [[1, 2], [3, 4]], [1, 0], [0, 1]))); // Expected: [[2,4],[3,1]]
console.log(JSON.stringify(cyclicShift(1, [[5]], [0], [0]))); // Expected: [[5]]
console.log(JSON.stringify(cyclicShift(3, [[1, 2, 3], [4, 5, 6], [7, 8, 9]], [3, 3, 3], [3, 3, 3]))); // Expected: [[1,2,3],[4,5,6],[7,8,9]] (shift by n = identity)
console.log(JSON.stringify(cyclicShift(2, [[1, 2], [3, 4]], [0, 0], [1, 1]))); // Expected: [[3,4],[1,2]]
console.log(JSON.stringify(cyclicShift(2, [[1, 2], [3, 4]], [1, 1], [1, 0]))); // Expected: [[4,1],[2,3]]
