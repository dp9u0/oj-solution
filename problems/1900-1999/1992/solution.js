/*
 * @lc app=leetcode id=1992 lang=javascript
 *
 * [1992] Find All Groups of Farmland
 */

// @lc code=start
/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function(land) {
    const m = land.length;
    const n = land[0].length;
    const result = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (land[i][j] === 1 &&
                (i === 0 || land[i - 1][j] === 0) &&
                (j === 0 || land[i][j - 1] === 0)) {
                // found top-left corner, expand to find bottom-right
                let r2 = i, c2 = j;
                while (r2 + 1 < m && land[r2 + 1][j] === 1) r2++;
                while (c2 + 1 < n && land[i][c2 + 1] === 1) c2++;
                result.push([i, j, r2, c2]);
            }
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findFarmland([[1,0,0],[0,1,1],[0,1,1]]))); // [[0,0,0,0],[1,1,2,2]]
console.log(JSON.stringify(findFarmland([[1,1],[1,1]]))); // [[0,0,1,1]]
console.log(JSON.stringify(findFarmland([[0]]))); // []
console.log(JSON.stringify(findFarmland([[1,1,1,1],[1,1,1,1],[0,0,0,0]]))); // [[0,0,1,3]]
console.log(JSON.stringify(findFarmland([[1],[1],[0],[1]]))); // [[0,0,1,0],[3,0,3,0]]
