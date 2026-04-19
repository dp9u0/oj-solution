/*
 * @lc app=leetcode id=3283 lang=javascript
 *
 * [3283] Maximum Number of Moves to Kill All Pawns
 */

// @lc code=start
/**
 * @param {number} kx
 * @param {number} ky
 * @param {number[][]} positions
 * @return {number}
 */
var maxMoves = function(kx, ky, positions) {
    const n = positions.length;
    const allPos = [...positions, [kx, ky]];
    const DX = [-2,-2,-1,-1,1,1,2,2];
    const DY = [-1,1,-2,2,-2,2,-1,1];

    const bfs = (sx, sy) => {
        const d = Array.from({length: 50}, () => new Int32Array(50).fill(-1));
        d[sx][sy] = 0;
        const q = [[sx, sy]];
        let h = 0;
        while (h < q.length) {
            const [x, y] = q[h++];
            for (let i = 0; i < 8; i++) {
                const nx = x + DX[i], ny = y + DY[i];
                if (nx >= 0 && nx < 50 && ny >= 0 && ny < 50 && d[nx][ny] === -1) {
                    d[nx][ny] = d[x][y] + 1;
                    q.push([nx, ny]);
                }
            }
        }
        return d;
    };

    const dist = new Array(n + 1);
    for (let i = 0; i <= n; i++) {
        const d = bfs(allPos[i][0], allPos[i][1]);
        dist[i] = new Int32Array(n + 1);
        for (let j = 0; j <= n; j++) {
            dist[i][j] = d[allPos[j][0]][allPos[j][1]];
        }
    }

    const size = (1 << n) * (n + 1);
    const dp = new Int32Array(size).fill(-1);
    const totalPawns = n;

    const solve = (mask, pos) => {
        if (mask === 0) return 0;
        const key = mask * (n + 1) + pos;
        if (dp[key] !== -1) return dp[key];
        const captured = totalPawns - popcount(mask);
        const isAlice = captured % 2 === 0;
        let res;
        if (isAlice) {
            res = 0;
            for (let i = 0; i < n; i++) {
                if (mask & (1 << i)) {
                    res = Math.max(res, dist[pos][i] + solve(mask ^ (1 << i), i));
                }
            }
        } else {
            res = Infinity;
            for (let i = 0; i < n; i++) {
                if (mask & (1 << i)) {
                    res = Math.min(res, dist[pos][i] + solve(mask ^ (1 << i), i));
                }
            }
        }
        dp[key] = res;
        return res;
    };

    return solve((1 << n) - 1, n);
};

function popcount(x) {
    let c = 0;
    while (x) { c++; x &= x - 1; }
    return c;
}
// @lc code=end

// TEST:
console.log(maxMoves(1, 1, [[0,0]])); // 4
console.log(maxMoves(0, 2, [[1,1],[2,2],[3,3]])); // 8
console.log(maxMoves(0, 0, [[1,2],[2,4]])); // 3
console.log(maxMoves(0, 0, [[1,1]])); // knight at (0,0), pawn at (1,1) -> 2 moves? No, (0,0)->(1,2)->... hmm BFS
console.log(maxMoves(0, 0, [[2,1]])); // (0,0)->(2,1) in 1 move
