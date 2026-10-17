/*
 * @lc app=leetcode.cn id=面试题 16.19 lang=javascript
 *
 * [面试题 16.19] 水域大小
 */

// @lc code=start
/**
 * @param {number[][]} land
 * @return {number[]}
 */
var pondSizes = function(land) {
    // 8 连通洪泛计数；显式队列防 1e6 格大水域递归爆栈
    const rows = land.length;
    const cols = land[0].length;
    const sizes = [];
    const queue = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (land[r][c] !== 0) continue;
            let size = 0;
            land[r][c] = -1;
            queue.push([r, c]);
            while (queue.length) {
                const [i, j] = queue.pop();
                size++;
                for (let dr = -1; dr <= 1; dr++) {
                    for (let dc = -1; dc <= 1; dc++) {
                        if (!dr && !dc) continue;
                        const ni = i + dr;
                        const nj = j + dc;
                        if (ni >= 0 && ni < rows && nj >= 0 && nj < cols && land[ni][nj] === 0) {
                            land[ni][nj] = -1;
                            queue.push([ni, nj]);
                        }
                    }
                }
            }
            sizes.push(size);
        }
    }
    return sizes.sort((a, b) => a - b);
};
// @lc code=end

// TEST:
console.log(JSON.stringify(pondSizes([[0, 2, 1, 0], [0, 1, 0, 1], [1, 1, 0, 1], [0, 1, 0, 1]])) === '[1,2,4]');
console.log(JSON.stringify(pondSizes([[1, 1], [1, 1]])) === '[]');
console.log(JSON.stringify(pondSizes([[0]])) === '[1]');
console.log(JSON.stringify(pondSizes([[0, 0], [0, 0]])) === '[4]'); // 对角连通
// 1000x1000 全水域，验证不爆栈
const big = Array.from({ length: 1000 }, () => new Array(1000).fill(0));
console.log(JSON.stringify(pondSizes(big)) === '[1000000]');
