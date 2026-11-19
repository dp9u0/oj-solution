/*
 * @lc app=leetcode.cn id=1183 lang=javascript
 *
 * [1183] 矩阵中 1 的最大数量
 */

// @lc code=start
/**
 * @param {number} width
 * @param {number} height
 * @param {number} sideLength
 * @param {number} maxOnes
 * @return {number}
 */
var maximumNumberOfOnes = function(width, height, sideLength, maxOnes) {
    const s = sideLength;
    const freq = [];
    for (let r = 0; r < s; r++) {
        const rows = Math.ceil((height - r) / s); // rows with row % s == r
        for (let c = 0; c < s; c++) {
            const cols = Math.ceil((width - c) / s);
            freq.push(rows * cols); // filling residue class (r,c) adds this many ones
        }
    }
    freq.sort((a, b) => b - a);
    let total = 0;
    for (let i = 0; i < maxOnes && i < freq.length; i++) total += freq[i];
    return total;
};
// @lc code=end

// TEST:
console.log(maximumNumberOfOnes(3, 3, 2, 1)); // 4
console.log(maximumNumberOfOnes(3, 3, 2, 2)); // 6
console.log(maximumNumberOfOnes(1, 1, 1, 1)); // 1
console.log(maximumNumberOfOnes(5, 5, 1, 1)); // 25 (single residue class = whole grid)
console.log(maximumNumberOfOnes(4, 4, 2, 3)); // 12 (all classes frequency 4)
