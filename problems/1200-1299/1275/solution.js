/*
 * @lc app=leetcode id=1275 lang=javascript
 *
 * [1275] Find Winner on a Tic Tac Toe Game
 */

// @lc code=start
/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    const rows = [new Array(3).fill(0), new Array(3).fill(0)];
    const cols = [new Array(3).fill(0), new Array(3).fill(0)];
    const diag = [0, 0];
    const antiDiag = [0, 0];

    for (let i = 0; i < moves.length; i++) {
        const [r, c] = moves[i];
        const p = i % 2; // 0 = A, 1 = B

        rows[p][r]++;
        cols[p][c]++;
        if (r === c) diag[p]++;
        if (r + c === 2) antiDiag[p]++;

        if (rows[p][r] === 3 || cols[p][c] === 3 || diag[p] === 3 || antiDiag[p] === 3) {
            return p === 0 ? 'A' : 'B';
        }
    }

    return moves.length === 9 ? 'Draw' : 'Pending';
};
// @lc code=end

// TEST:
console.log(tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]]));                          // A
console.log(tictactoe([[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]));                    // B
console.log(tictactoe([[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]])); // Draw
console.log(tictactoe([[0,0],[1,1]]));                                            // Pending
