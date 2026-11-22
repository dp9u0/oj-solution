/*
 * @lc app=leetcode.cn id=3078 lang=javascript
 *
 * [3078] 矩阵中的字母数字模式匹配 I
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @param {string[]} pattern
 * @return {number[]}
 */
var findPattern = function(board, pattern) {
    const R = pattern.length, C = pattern[0].length;
    const N = board.length, M = board[0].length;
    const check = (r0, c0) => {
        const map = new Map();
        const used = new Set();
        for (let i = 0; i < R; i++) {
            for (let j = 0; j < C; j++) {
                const p = pattern[i][j];
                const v = board[r0 + i][c0 + j];
                if (p >= '0' && p <= '9') {
                    if (v !== Number(p)) return false;
                } else {
                    if (map.has(p)) {
                        if (map.get(p) !== v) return false;
                    } else {
                        if (used.has(v)) return false;
                        map.set(p, v);
                        used.add(v);
                    }
                }
            }
        }
        return true;
    };
    for (let r = 0; r + R <= N; r++) {
        for (let c = 0; c + C <= M; c++) {
            if (check(r, c)) return [r, c];
        }
    }
    return [-1, -1];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findPattern([[1,2,2],[2,2,3],[2,3,3]], ["ab","bb"]))); // [0,0]
console.log(JSON.stringify(findPattern([[1,1,2],[3,3,4],[6,6,6]], ["ab","66"]))); // [1,1]
console.log(JSON.stringify(findPattern([[1,2],[2,1]], ["xx"]))); // [-1,-1]
console.log(JSON.stringify(findPattern([[5]], ["5"]))); // [0,0]
console.log(JSON.stringify(findPattern([[1,2],[3,4]], ["a"]))); // [0,0]
