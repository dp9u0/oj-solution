/*
 * @lc app=leetcode.cn id=3568 lang=javascript
 *
 * [3568] 清理教室的最少移动
 */

// @lc code=start
/**
 * @param {string[]} classroom
 * @param {number} energy
 * @return {number}
 */
var minMoves = function(classroom, energy) {
    const m = classroom.length;
    const n = classroom[0].length;
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    // Locate start and index each trash cell
    let sx = 0, sy = 0;
    const lIndex = new Array(m * n).fill(-1);
    let lCount = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const c = classroom[i][j];
            if (c === 'S') {
                sx = i; sy = j;
            } else if (c === 'L') {
                lIndex[i * n + j] = lCount++;
            }
        }
    }
    if (lCount === 0) return 0;

    const fullMask = (1 << lCount) - 1;
    const states = 1 << lCount;
    // best[posIdx][mask] = max energy reached at that position & collected set
    const best = new Int16Array(m * n * states).fill(-1);

    const start = sx * n + sy;
    const queue = [[start, 0, energy]];
    best[start * states] = energy;
    let head = 0;
    let steps = 0;

    while (head < queue.length) {
        const levelSize = queue.length - head;
        for (let i = 0; i < levelSize; i++) {
            const [pos, mask, e] = queue[head++];
            const x = (pos / n) | 0;
            const y = pos % n;
            for (const [dx, dy] of dirs) {
                const nx = x + dx, ny = y + dy;
                if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
                const np = nx * n + ny;
                const c = classroom[nx][ny];
                if (c === 'X') continue;

                let ne = e - 1;          // each move costs 1 energy (e >= 1 guaranteed)
                let nmask = mask;
                if (c === 'L') nmask = mask | (1 << lIndex[np]);
                if (c === 'R') ne = energy; // reset zone refills to max

                if (nmask === fullMask) return steps + 1;
                if (ne <= 0) continue;   // 0 energy off-R is a dead end

                const key = np * states + nmask;
                if (ne > best[key]) {
                    best[key] = ne;
                    queue.push([np, nmask, ne]);
                }
            }
        }
        steps++;
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(minMoves(["S.", "XL"], 2));       // 2
console.log(minMoves(["LS", "RL"], 4));       // 3
console.log(minMoves(["L.S", "RXL"], 3));     // -1
console.log(minMoves(["SL"], 1));             // 1
console.log(minMoves(["S"], 5));              // 0
console.log(minMoves(["SR.L"], 2));           // 3
console.log(minMoves(["S.L", "X.X", ".R."], 2)); // 2
console.log(minMoves(["S...", "....", "....", "R..L"], 3)); // 6
