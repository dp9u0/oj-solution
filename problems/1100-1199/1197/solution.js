/*
 * @lc app=leetcode.cn id=1197 lang=javascript
 *
 * [1197] 进击的骑士
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minKnightMoves = function(x, y) {
    const tx = Math.abs(x), ty = Math.abs(y); // symmetric in sign
    const DIRS = [[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]];
    const key = (a, b) => (a + 5) * 1000 + (b + 5); // coords in [-2, tx+2] max 302
    const visited = new Set([key(0, 0)]);
    let frontier = [[0, 0]];
    let steps = 0;
    while (frontier.length) {
        const next = [];
        for (const [a, b] of frontier) {
            if (a === tx && b === ty) return steps;
            for (const [dx, dy] of DIRS) {
                const na = a + dx, nb = b + dy;
                if (na < -2 || nb < -2 || na > tx + 2 || nb > ty + 2) continue;
                const k = key(na, nb);
                if (visited.has(k)) continue;
                visited.add(k);
                next.push([na, nb]);
            }
        }
        frontier = next;
        steps++;
    }
    return -1; // unreachable (per constraints always reachable)
};
// @lc code=end

// TEST:
console.log(minKnightMoves(2, 1)); // 1
console.log(minKnightMoves(5, 5)); // 4
console.log(minKnightMoves(0, 0)); // 0
console.log(minKnightMoves(1, 1)); // 2
console.log(minKnightMoves(0, 1)); // 3
console.log(minKnightMoves(-5, -5)); // 4 (symmetry)
