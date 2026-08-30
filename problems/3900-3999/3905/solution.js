/*
 * @lc app=leetcode id=3905 lang=javascript
 *
 * [3905] Multi Source Flood Fill
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} sources
 * @return {number[][]}
 */
var colorGrid = function(n, m, sources) {
    const total = n * m;
    const grid = new Int32Array(total);
    const best = new Int32Array(total);

    let colors = new Int32Array(sources.length);
    let frontier = new Int32Array(sources.length);
    for (let i = 0; i < sources.length; i++) {
        const [r, c, color] = sources[i];
        const idx = r * m + c;
        grid[idx] = color;
        frontier[i] = idx;
        colors[i] = color;
    }

    while (frontier.length) {
        const touched = [];
        for (let i = 0; i < frontier.length; i++) {
            const idx = frontier[i];
            const c = colors[i];
            const r = (idx / m) | 0;
            const col = idx - r * m;
            // up
            if (r > 0 && grid[idx - m] === 0) {
                if (best[idx - m] === 0) touched.push(idx - m);
                if (c > best[idx - m]) best[idx - m] = c;
            }
            // down
            if (r < n - 1 && grid[idx + m] === 0) {
                if (best[idx + m] === 0) touched.push(idx + m);
                if (c > best[idx + m]) best[idx + m] = c;
            }
            // left
            if (col > 0 && grid[idx - 1] === 0) {
                if (best[idx - 1] === 0) touched.push(idx - 1);
                if (c > best[idx - 1]) best[idx - 1] = c;
            }
            // right
            if (col < m - 1 && grid[idx + 1] === 0) {
                if (best[idx + 1] === 0) touched.push(idx + 1);
                if (c > best[idx + 1]) best[idx + 1] = c;
            }
        }
        if (!touched.length) break;
        frontier = Int32Array.from(touched);
        colors = new Int32Array(touched.length);
        for (let i = 0; i < touched.length; i++) {
            const idx = touched[i];
            grid[idx] = best[idx];
            colors[i] = best[idx];
            best[idx] = 0;
        }
    }

    const result = [];
    for (let r = 0; r < n; r++) {
        result.push(Array.from(grid.slice(r * m, r * m + m)));
    }
    return result;
};
// @lc code=end

// TEST:
if (require.main === module) {
    const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

    // Example 1
    console.log(eq(
        colorGrid(3, 3, [[0, 0, 1], [2, 2, 2]]),
        [[1, 1, 2], [1, 2, 2], [2, 2, 2]]
    ), 'example 1');

    // Example 2
    console.log(eq(
        colorGrid(3, 3, [[0, 1, 3], [1, 1, 5]]),
        [[3, 3, 3], [5, 5, 5], [5, 5, 5]]
    ), 'example 2');

    // Example 3: single source fills all
    console.log(eq(
        colorGrid(2, 2, [[1, 1, 5]]),
        [[5, 5], [5, 5]]
    ), 'example 3');

    // 1x1 grid
    console.log(eq(
        colorGrid(1, 1, [[0, 0, 7]]),
        [[7]]
    ), '1x1 grid');

    // Same layer tie: both reach middle cell at step 1, take max
    console.log(eq(
        colorGrid(1, 3, [[0, 0, 4], [0, 2, 9]]),
        [[4, 9, 9]]
    ), 'tie in same layer');

    // All cells are sources
    console.log(eq(
        colorGrid(2, 2, [[0, 0, 1], [0, 1, 2], [1, 0, 3], [1, 1, 4]]),
        [[1, 2], [3, 4]]
    ), 'all sources');

    // Larger color from farther source loses to nearer smaller color
    console.log(eq(
        colorGrid(1, 4, [[0, 1, 2], [0, 3, 100]]),
        [[2, 2, 100, 100]]
    ), 'nearest wins');
}
