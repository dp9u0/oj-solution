/*
 * @lc app=leetcode id=1222 lang=javascript
 *
 * [1222] Queens That Can Attack the King
 */

// @lc code=start
/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function(queens, king) {
    const queenSet = new Set(queens.map(q => q[0] * 8 + q[1]));
    const dirs = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
    const ans = [];
    for (const [dx, dy] of dirs) {
        let x = king[0] + dx, y = king[1] + dy;
        while (x >= 0 && x < 8 && y >= 0 && y < 8) {
            if (queenSet.has(x * 8 + y)) {
                ans.push([x, y]);
                break;
            }
            x += dx;
            y += dy;
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(queensAttacktheKing([[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]], [0,0])); // [[0,1],[1,0],[3,3]]
console.log(queensAttacktheKing([[0,0],[1,1],[2,2],[3,4],[3,5],[4,4],[4,5]], [3,3])); // [[2,2],[3,4],[4,4]]
