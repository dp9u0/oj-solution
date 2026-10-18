/*
 * @lc app=leetcode.cn id=面试题 08.10 lang=javascript
 *
 * [面试题 08.10] 颜色填充
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const old = image[sr][sc];
    if (old === newColor) return image; // 同色短路，防往复死循环
    const rows = image.length;
    const cols = image[0].length;
    const stack = [[sr, sc]];
    image[sr][sc] = newColor;
    while (stack.length) {
        const [i, j] = stack.pop();
        for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
            const ni = i + di;
            const nj = j + dj;
            if (ni >= 0 && ni < rows && nj >= 0 && nj < cols && image[ni][nj] === old) {
                image[ni][nj] = newColor;
                stack.push([ni, nj]);
            }
        }
    }
    return image;
};
// @lc code=end

// TEST:
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
console.log(eq(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2), [[2, 2, 2], [2, 2, 0], [2, 0, 1]]));
console.log(eq(floodFill([[1]], 0, 0, 1), [[1]])); // 同色短路
console.log(eq(floodFill([[0]], 0, 0, 5), [[5]]));
console.log(eq(floodFill([[1, 2], [3, 4]], 0, 0, 9), [[9, 2], [3, 4]]));
