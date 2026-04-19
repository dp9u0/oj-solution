/*
 * @lc app=leetcode id=2711 lang=javascript
 *
 * [2711] Difference of Number of Distinct Values on Diagonals
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var differenceOfDistinctValues = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const answer = Array.from({ length: m }, () => new Array(n).fill(0));

    // Process each diagonal starting from top row and left column
    // Diagonal key: r - c is constant for each diagonal
    const processDiagonal = (startR, startC) => {
        // Left-above pass
        const seen = new Set();
        let r = startR, c = startC;
        while (r < m && c < n) {
            answer[r][c] = seen.size;
            seen.add(grid[r][c]);
            r++;
            c++;
        }

        // Right-below pass
        const seen2 = new Set();
        r--;
        c--;
        while (r >= startR && c >= startC) {
            answer[r][c] = Math.abs(answer[r][c] - seen2.size);
            seen2.add(grid[r][c]);
            r--;
            c--;
        }
    };

    // Start from each cell in the first row
    for (let c = 0; c < n; c++) {
        processDiagonal(0, c);
    }
    // Start from each cell in the first column (skip [0,0])
    for (let r = 1; r < m; r++) {
        processDiagonal(r, 0);
    }

    return answer;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(differenceOfDistinctValues([[1,2,3],[3,1,5],[3,2,1]]))); // [[1,1,0],[1,0,1],[0,1,1]]
console.log(JSON.stringify(differenceOfDistinctValues([[1]]))); // [[0]]
