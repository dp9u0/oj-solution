/*
 * @lc app=leetcode.cn id=面试题 17.23 lang=javascript
 *
 * [面试题 17.23] 最大黑方阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findSquare = function(matrix) {
    const n = matrix.length;
    // 四向连续黑格游程：up/left 以本格收尾，down/right 以本格起始
    const up = Array.from({ length: n }, () => new Array(n).fill(0));
    const left = Array.from({ length: n }, () => new Array(n).fill(0));
    const down = Array.from({ length: n }, () => new Array(n).fill(0));
    const right = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                up[i][j] = (i > 0 ? up[i - 1][j] : 0) + 1;
                left[i][j] = (j > 0 ? left[i][j - 1] : 0) + 1;
            }
        }
    }
    for (let i = n - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (matrix[i][j] === 0) {
                down[i][j] = (i < n - 1 ? down[i + 1][j] : 0) + 1;
                right[i][j] = (j < n - 1 ? right[i][j + 1] : 0) + 1;
            }
        }
    }
    // 全局最大尺寸优先，平序取 r 最小、c 最小（r,c 升序扫描 + 严格更大才更新）
    let best = null;
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (matrix[r][c] !== 0) continue;
            // 以 (r,c) 为左上角，边长上界 = min(down, right)，降序试边长
            const maxS = Math.min(down[r][c], right[r][c]);
            for (let s = maxS; s > 0; s--) {
                // 四条边：上 right[r][c] / 左 down[r][c] 已被游程覆盖，
                // 补查右列 up 与底行 left（均以右下角收尾）
                if (up[r + s - 1][c + s - 1] >= s && left[r + s - 1][c + s - 1] >= s) {
                    if (!best || s > best[2]) best = [r, c, s];
                    break;
                }
            }
        }
    }
    return best ? best : [];
};
// @lc code=end

// TEST:
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
console.log(eq(findSquare([[1, 0, 1], [0, 0, 1], [0, 0, 1]]), [1, 0, 2]));
console.log(eq(findSquare([[0, 1, 1], [1, 0, 1], [1, 1, 0]]), [0, 0, 1]));
console.log(eq(findSquare([[1, 1], [1, 1]]), []));
console.log(eq(findSquare([[0, 0], [0, 0]]), [0, 0, 2]));
console.log(eq(findSquare([[0]]), [0, 0, 1]));
// 平序：同尺寸取 r 最小、再 c 最小
console.log(eq(findSquare([[0, 0], [0, 1]]), [0, 0, 1]));
// 右列/底行断裂：3x3 边框不成立，降级到 (0,0) 的 2x2
console.log(eq(findSquare([[0, 0, 0], [0, 0, 0], [0, 0, 1]]), [0, 0, 2]));
