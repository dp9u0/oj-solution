/*
 * @lc app=leetcode.cn id=2387 lang=javascript
 *
 * [2387] 行排序矩阵的中位数
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixMedian = function(grid) {
    const m = grid.length, n = grid[0].length;
    const countLE = (x) => {
        let c = 0;
        for (const row of grid) {
            let lo = 0, hi = n;
            while (lo < hi) {
                const mid = (lo + hi) >> 1;
                if (row[mid] <= x) lo = mid + 1;
                else hi = mid;
            }
            c += lo;
        }
        return c;
    };
    const need = (m * n + 1) >> 1;
    let lo = 1, hi = 1000000;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (countLE(mid) >= need) hi = mid;
        else lo = mid + 1;
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(matrixMedian([[1,1,2],[2,3,3],[1,3,4]])); // 2
console.log(matrixMedian([[1,1,3,3,4]])); // 3
console.log(matrixMedian([[5]])); // 5
console.log(matrixMedian([[1,3,5],[2,4,6],[7,8,9]])); // 5
console.log(matrixMedian([[2,2,2],[2,2,2],[2,2,2]])); // 2
