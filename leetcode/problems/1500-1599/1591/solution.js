/*
 * @lc app=leetcode id=1591 lang=javascript
 *
 * [1591] Strange Printer II
 */

// @lc code=start
/**
 * @param {number[][]} targetGrid
 * @return {boolean}
 */
var isPrintable = function(targetGrid) {
    const m = targetGrid.length, n = targetGrid[0].length;
    const bounds = new Map();

    // Find bounding rectangle for each color
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const c = targetGrid[i][j];
            if (!bounds.has(c)) bounds.set(c, [i, i, j, j]);
            else {
                const b = bounds.get(c);
                b[0] = Math.min(b[0], i);
                b[1] = Math.max(b[1], i);
                b[2] = Math.min(b[2], j);
                b[3] = Math.max(b[3], j);
            }
        }
    }

    // Build dependency: if color d appears in color c's bounding rect, c must be printed before d
    const adj = new Map();
    for (const c of bounds.keys()) adj.set(c, new Set());

    for (const [c, [minR, maxR, minC, maxC]] of bounds) {
        for (let i = minR; i <= maxR; i++) {
            for (let j = minC; j <= maxC; j++) {
                const d = targetGrid[i][j];
                if (d !== c) adj.get(c).add(d);
            }
        }
    }

    // Detect cycle via DFS
    const WHITE = 0, GRAY = 1, BLACK = 2;
    const state = new Map();
    for (const c of bounds.keys()) state.set(c, WHITE);

    const hasCycle = (c) => {
        state.set(c, GRAY);
        for (const d of adj.get(c)) {
            if (state.get(d) === GRAY) return true;
            if (state.get(d) === WHITE && hasCycle(d)) return true;
        }
        state.set(c, BLACK);
        return false;
    };

    for (const c of bounds.keys()) {
        if (state.get(c) === WHITE && hasCycle(c)) return false;
    }
    return true;
};
// @lc code=end

// TEST:
console.log(isPrintable([[1,1,1,1],[1,2,2,1],[1,2,2,1],[1,1,1,1]])); // true
console.log(isPrintable([[1,1,1,1],[1,1,3,3],[1,1,3,4],[5,5,1,4]])); // true
console.log(isPrintable([[1,2,1],[2,1,2],[1,2,1]]));                   // false
console.log(isPrintable([[1]]));                                        // true
console.log(isPrintable([[1,2],[2,1]]));                               // false
