/*
 * @lc app=leetcode id=3256 lang=javascript
 *
 * [3256] Maximum Value Sum by Placing Three Rooks I
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {number}
 */
var maximumValueSum = function(board) {
    const m = board.length, n = board[0].length;

    // For each row, find top 3 values with their columns
    const top3 = [];
    for (let i = 0; i < m; i++) {
        const row = board[i].map((v, j) => [v, j]);
        row.sort((a, b) => b[0] - a[0]);
        top3.push(row.slice(0, 3));
    }

    let ans = -Infinity;
    for (let i = 0; i < m; i++) {
        for (let j = i + 1; j < m; j++) {
            for (let k = j + 1; k < m; k++) {
                for (const [v1, c1] of top3[i]) {
                    for (const [v2, c2] of top3[j]) {
                        if (c2 === c1) continue;
                        for (const [v3, c3] of top3[k]) {
                            if (c3 === c1 || c3 === c2) continue;
                            ans = Math.max(ans, v1 + v2 + v3);
                        }
                    }
                }
            }
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maximumValueSum([[-3,1,1,1],[-3,1,-3,1],[-3,2,1,1]]));  // 4
console.log(maximumValueSum([[1,2,3],[4,5,6],[7,8,9]]));              // 15
console.log(maximumValueSum([[1,1,1],[1,1,1],[1,1,1]]));              // 3
console.log(maximumValueSum([[10,20,30],[5,15,25],[8,18,28]]));       // 30+15+18=63
console.log(maximumValueSum([[-1,-2,-3],[-4,-5,-6],[-7,-8,-9]]));     // -1+-5+-9=-15
