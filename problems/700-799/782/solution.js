/*
 * @lc app=leetcode id=782 lang=javascript
 *
 * [782] Transform to Chessboard
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {number}
 */
var movesToChessboard = function(board) {
    const n = board.length;

    // 结构检查：任意 2x2 子矩阵满足 xor 关系
    // 等价于所有行与第 0 行相等或互补，且所有列与第 0 列相等或互补
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if ((board[0][0] ^ board[i][0] ^ board[0][j] ^ board[i][j]) === 1) {
                return -1;
            }
        }
    }

    // 第一行 / 第一列中 1 的个数必须是 floor(n/2) 或 ceil(n/2)，
    // 这同时保证了与首行同类（互补类）的行数可以按奇偶交替排开
    const rowSum = board[0].reduce((sum, v) => sum + v, 0);
    const colSum = board.reduce((sum, row) => sum + row[0], 0);
    const half = n >> 1;
    const maxHalf = half + (n % 2);
    if (rowSum < half || rowSum > maxHalf) return -1;
    if (colSum < half || colSum > maxHalf) return -1;

    // 行交换与列交换互不影响，代价分别计算后相加
    return minLineSwaps(board, true) + minLineSwaps(board, false);
};

// 计算把行（或列）的两个等价类排成交替所需的最少交换次数
var minLineSwaps = function(board, isRow) {
    const n = board.length;
    const valueAt = isRow ? (i) => board[i][0] : (i) => board[0][i];
    const first = valueAt(0);
    let best = Infinity;

    // startType：偶数下标处应放置的类型（0 = 与首行/首列同类，1 = 互补类）
    for (const startType of [0, 1]) {
        let misplaced = 0;
        for (let i = 0; i < n; i++) {
            const type = valueAt(i) === first ? 0 : 1;
            const want = i % 2 === 0 ? startType : 1 - startType;
            if (type !== want) misplaced++;
        }
        // 错位数为奇数说明该摆法不可行（一次交换恰好修复两行），跳过
        if (misplaced % 2 === 0) {
            best = Math.min(best, misplaced / 2);
        }
    }
    return best;
};
// @lc code=end

// TEST:
console.log(movesToChessboard([[0,1,1,0],[0,1,1,0],[1,0,0,1],[1,0,0,1]])); // 2
console.log(movesToChessboard([[0,1],[1,0]])); // 0
console.log(movesToChessboard([[1,0],[1,0]])); // -1
console.log(movesToChessboard([[1,0],[0,1]])); // 0（另一种合法棋盘，也需 0 步）
console.log(movesToChessboard([[0,1,0],[0,1,0],[1,0,1]])); // 1
console.log(movesToChessboard([[0,1,0],[1,0,1],[0,1,0]])); // 0（已是棋盘）
console.log(movesToChessboard([[0,0],[1,1]])); // -1
