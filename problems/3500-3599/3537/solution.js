/*
 * @lc app=leetcode id=3537 lang=javascript
 *
 * [3537] Fill a Special Grid
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var specialGrid = function(n) {
    const size = 1 << n;
    const grid = Array.from({ length: size }, () => new Array(size).fill(0));

    const fill = (r1, c1, r2, c2, start) => {
        if (r2 - r1 === 1) {
            grid[r1][c1] = start;
            return;
        }
        const half = (r2 - r1) >> 1;
        const total = half * half;
        // top-right
        fill(r1, c2 - half, r1 + half, c2, start);
        // bottom-right
        fill(r1 + half, c2 - half, r2, c2, start + total);
        // bottom-left
        fill(r1 + half, c1, r2, c1 + half, start + total * 2);
        // top-left
        fill(r1, c1, r1 + half, c1 + half, start + total * 3);
    };

    fill(0, 0, size, size, 0);
    return grid;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(specialGrid(0))); // [[0]]
console.log(JSON.stringify(specialGrid(1))); // [[3,0],[2,1]]
console.log(JSON.stringify(specialGrid(2))); // [[15,12,3,0],[14,13,2,1],[11,8,7,4],[10,9,6,5]]
console.log(JSON.stringify(specialGrid(3)).length > 0); // true (8x8 grid)
