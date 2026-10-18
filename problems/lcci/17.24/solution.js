/*
 * @lc app=leetcode.cn id=面试题 17.24 lang=javascript
 *
 * [面试题 17.24] 最大子矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var getMaxMatrix = function(matrix) {
    // 行对压缩 + Kadane：r1/r2 固定后各列压成一维求最大子数组
    const rows = matrix.length;
    const cols = matrix[0].length;
    let best = -Infinity;
    const ans = [0, 0, 0, 0];
    const colSum = new Array(cols).fill(0);
    for (let r1 = 0; r1 < rows; r1++) {
        colSum.fill(0);
        for (let r2 = r1; r2 < rows; r2++) {
            for (let c = 0; c < cols; c++) colSum[c] += matrix[r2][c];
            let cur = 0;
            let start = 0;
            for (let c = 0; c < cols; c++) {
                if (cur <= 0) {
                    cur = colSum[c];
                    start = c;
                } else {
                    cur += colSum[c];
                }
                if (cur > best) {
                    best = cur;
                    ans[0] = r1;
                    ans[1] = start;
                    ans[2] = r2;
                    ans[3] = c;
                }
            }
        }
    }
    return ans;
};
// @lc code=end

// TEST:
// 校验器：返回矩形之和 == 暴力枚举的最大子矩阵和
const bruteMax = m => {
    const rows = m.length;
    const cols = m[0].length;
    let best = -Infinity;
    for (let r1 = 0; r1 < rows; r1++) {
        for (let r2 = r1; r2 < rows; r2++) {
            for (let c1 = 0; c1 < cols; c1++) {
                for (let c2 = c1; c2 < cols; c2++) {
                    let s = 0;
                    for (let r = r1; r <= r2; r++) {
                        for (let c = c1; c <= c2; c++) s += m[r][c];
                    }
                    if (s > best) best = s;
                }
            }
        }
    }
    return best;
};
const rectSum = (m, r1, c1, r2, c2) => {
    let s = 0;
    for (let r = r1; r <= r2; r++) {
        for (let c = c1; c <= c2; c++) s += m[r][c];
    }
    return s;
};
const check = m => {
    const [r1, c1, r2, c2] = getMaxMatrix(m);
    return rectSum(m, r1, c1, r2, c2) === bruteMax(m);
};
console.log(check([[-1, 0], [0, -1]]));
console.log(check([[9, -8, 1, 3, -2], [-3, 7, 6, -2, 4], [6, -4, -4, 8, -7]]));
console.log(check([[-5]]));
console.log(check([[1, 2], [3, 4]]));
const rand3 = Array.from({ length: 3 }, () => Array.from({ length: 4 }, () => Math.floor(Math.random() * 21) - 10));
console.log(check(rand3));
