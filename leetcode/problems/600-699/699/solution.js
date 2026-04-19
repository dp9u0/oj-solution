/*
 * @lc app=leetcode id=699 lang=javascript
 *
 * [699] Falling Squares
 */

// @lc code=start
/**
 * @param {number[][]} positions
 * @return {number[]}
 */
var fallingSquares = function(positions) {
    const intervals = [];
    const ans = [];
    let globalMax = 0;

    for (const [left, size] of positions) {
        const right = left + size;
        let maxH = 0;
        for (const [l, r, h] of intervals) {
            if (l < right && r > left) {
                maxH = Math.max(maxH, h);
            }
        }
        const newH = maxH + size;
        intervals.push([left, right, newH]);
        globalMax = Math.max(globalMax, newH);
        ans.push(globalMax);
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(fallingSquares([[1,2],[2,3],[6,1]]))); // [2,5,5]
console.log(JSON.stringify(fallingSquares([[100,100],[200,100]]))); // [100,100]
console.log(JSON.stringify(fallingSquares([[1,5]]))); // [5]
console.log(JSON.stringify(fallingSquares([[1,2],[1,3]]))); // [2,5]
console.log(JSON.stringify(fallingSquares([[1,2],[2,1],[1,1]]))); // [2,3,3]
