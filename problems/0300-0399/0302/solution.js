/*
 * @lc app=leetcode.cn id=302 lang=javascript
 *
 * [302] 包含全部黑色像素的最小矩形
 */

// @lc code=start
/**
 * @param {character[][]} image
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minArea = function(image, x, y) {
    const m = image.length, n = image[0].length;
    const rowHasBlack = r => image[r].includes('1');
    const colHasBlack = c => image.some(row => row[c] === '1');

    // the black region is connected, so it spans rows/columns contiguously;
    // binary-search the boundary edges
    const smallest = (lo, hi, ok) => {
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (ok(mid)) hi = mid; else lo = mid + 1;
        }
        return lo;
    };
    const largest = (lo, hi, ok) => {
        while (lo < hi) {
            const mid = (lo + hi + 1) >> 1;
            if (ok(mid)) lo = mid; else hi = mid - 1;
        }
        return lo;
    };

    const top = smallest(0, x, rowHasBlack);
    const bottom = largest(x, m - 1, rowHasBlack);
    const left = smallest(0, y, colHasBlack);
    const right = largest(y, n - 1, colHasBlack);
    return (bottom - top + 1) * (right - left + 1);
};
// @lc code=end

// TEST:
console.log(minArea([["0","0","1","0"],["0","1","1","0"],["0","1","0","0"]], 0, 2)); // 6
console.log(minArea([["1"]], 0, 0)); // 1
console.log(minArea([["0"],["1"],["1"]], 1, 0)); // 2
console.log(minArea([["1","1"],["1","1"]], 0, 0)); // 4
console.log(minArea([["0","0"],["0","1"]], 1, 1)); // 1
