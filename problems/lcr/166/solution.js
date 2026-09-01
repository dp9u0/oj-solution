/*
 * @lc app=leetcode.cn id=LCR 166 lang=javascript
 *
 * [LCR 166] 珠宝的最高价值
 */

// @lc code=start
/**
 * @param {number[][]} frame
 * @return {number}
 */
var jewelleryValue = function(frame) {
    const m = frame.length;
    const n = frame[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) {
                continue; // 起点价值就是本身
            }
            let maxPrev = 0;
            if (i > 0) {
                maxPrev = frame[i - 1][j];
            }
            if (j > 0) {
                maxPrev = Math.max(maxPrev, frame[i][j - 1]);
            }
            frame[i][j] += maxPrev;
        }
    }

    return frame[m - 1][n - 1];
};
// @lc code=end

// TEST:
console.log(jewelleryValue([[1, 3, 1], [1, 5, 1], [4, 2, 1]]) === 12); // 示例 1
console.log(jewelleryValue([[1]]) === 1); // 单元素
console.log(jewelleryValue([[1, 2, 3]]) === 6); // 单行
console.log(jewelleryValue([[1], [2], [3]]) === 6); // 单列
console.log(jewelleryValue([[1, 2], [3, 4]]) === 8); // 2x2
console.log(jewelleryValue([[0]]) === 0); // 无珠宝
