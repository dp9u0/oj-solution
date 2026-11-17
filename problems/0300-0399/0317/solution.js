/*
 * @lc app=leetcode.cn id=317 lang=javascript
 *
 * [317] 离建筑物最近的距离
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function(grid) {
    // 1 = building, 2 = obstacle, 0 = empty land
    const m = grid.length, n = grid[0].length;
    const dist = Array.from({ length: m }, () => new Array(n).fill(0));
    const reach = Array.from({ length: m }, () => new Array(n).fill(0));
    let buildingCount = 0;

    // BFS from each building, walking only over cells reachable by ALL
    // previous buildings (walk marker decreases after each round)
    let walk = 0;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] !== 1) continue;
            buildingCount++;
            const queue = [[r, c, 0]]; // [row, col, distance in this round]
            let qi = 0;
            grid[r][c] = walk;
            while (qi < queue.length) {
                const [qr, qc, d] = queue[qi++];
                for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
                    const nr = qr + dr, nc = qc + dc;
                    if (nr < 0 || nr >= m || nc < 0 || nc >= n) continue;
                    if (grid[nr][nc] !== walk) continue; // walls/buildings/visited
                    grid[nr][nc] = walk - 1; // mark visited for this round
                    dist[nr][nc] += d + 1;
                    reach[nr][nc]++;
                    queue.push([nr, nc, d + 1]);
                }
            }
            // restore the building's own marker
            grid[r][c] = 1;
            walk--;
        }
    }

    // cells with grid === walk were reached by every building round
    let best = Infinity;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === walk) {
                best = Math.min(best, dist[r][c]);
            }
        }
    }
    return best === Infinity ? -1 : best;
};
// @lc code=end

// TEST:
const run = grid => {
    shortestDistance(grid);
    return grid;
};
console.log(shortestDistance([[1, 0, 2, 0, 1], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0]])); // 7
console.log(shortestDistance([[1]])); // -1
console.log(shortestDistance([[1, 0]])); // 1
console.log(shortestDistance([[1, 2, 0]])); // -1 (obstacle blocks)
