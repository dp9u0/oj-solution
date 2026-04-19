/*
 * @lc app=leetcode id=749 lang=javascript
 *
 * [749] Contain Virus
 */

// @lc code=start
/**
 * @param {number[][]} isInfected
 * @return {number}
 */
var containVirus = function(isInfected) {
    const m = isInfected.length;
    const n = isInfected[0].length;
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    let totalWalls = 0;

    while (true) {
        const visited = Array.from({ length: m }, () => new Array(n).fill(false));
        const regions = [];

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (isInfected[i][j] === 1 && !visited[i][j]) {
                    const cells = [];
                    const cellSet = new Set();
                    const queue = [[i, j]];
                    visited[i][j] = true;
                    while (queue.length > 0) {
                        const [ci, cj] = queue.shift();
                        cells.push([ci, cj]);
                        cellSet.add(ci * n + cj);
                        for (const [di, dj] of dirs) {
                            const ni = ci + di, nj = cj + dj;
                            if (ni >= 0 && ni < m && nj >= 0 && nj < n && !visited[ni][nj] && isInfected[ni][nj] === 1) {
                                visited[ni][nj] = true;
                                queue.push([ni, nj]);
                            }
                        }
                    }

                    const threatened = new Set();
                    let walls = 0;
                    for (const [ci, cj] of cells) {
                        for (const [di, dj] of dirs) {
                            const ni = ci + di, nj = cj + dj;
                            if (ni >= 0 && ni < m && nj >= 0 && nj < n && isInfected[ni][nj] !== -1 && !cellSet.has(ni * n + nj)) {
                                walls++;
                                if (isInfected[ni][nj] === 0) {
                                    threatened.add(ni * n + nj);
                                }
                            }
                        }
                    }

                    regions.push({ cells, threatened: threatened.size, walls });
                }
            }
        }

        if (regions.length === 0) break;

        let maxIdx = -1, maxThreat = 0;
        for (let r = 0; r < regions.length; r++) {
            if (regions[r].threatened > maxThreat) {
                maxThreat = regions[r].threatened;
                maxIdx = r;
            }
        }

        if (maxIdx === -1) break;

        totalWalls += regions[maxIdx].walls;
        for (const [ci, cj] of regions[maxIdx].cells) {
            isInfected[ci][cj] = -1;
        }

        // Spread remaining regions
        const toInfect = [];
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (isInfected[i][j] === 1) {
                    for (const [di, dj] of dirs) {
                        const ni = i + di, nj = j + dj;
                        if (ni >= 0 && ni < m && nj >= 0 && nj < n && isInfected[ni][nj] === 0) {
                            toInfect.push([ni, nj]);
                        }
                    }
                }
            }
        }

        if (toInfect.length === 0) break;

        for (const [ni, nj] of toInfect) {
            isInfected[ni][nj] = 1;
        }
    }

    return totalWalls;
};
// @lc code=end

// TEST:
console.log(containVirus([[0,1,0,0,0,0,0,1],[0,1,0,0,0,0,0,1],[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0]])); // 10
console.log(containVirus([[1,1,1],[1,0,1],[1,1,1]])); // 4
console.log(containVirus([[1,1,1,0,0,0,0,0,0],[1,0,1,0,1,1,1,1,1],[1,1,1,0,0,0,0,0,0]])); // 13
console.log(containVirus([[0]])); // 0
console.log(containVirus([[1]])); // 0
