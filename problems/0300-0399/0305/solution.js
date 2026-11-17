/*
 * @lc app=leetcode.cn id=305 lang=javascript
 *
 * [305] 岛屿数量 II
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
var numIslands2 = function(m, n, positions) {
    const parent = new Map(); // land cell id -> root
    const find = x => {
        while (parent.get(x) !== x) {
            parent.set(x, parent.get(parent.get(x)));
            x = parent.get(x);
        }
        return x;
    };

    const res = [];
    let count = 0;
    const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (const [r, c] of positions) {
        const id = r * n + c;
        if (parent.has(id)) { res.push(count); continue; } // duplicate position
        parent.set(id, id);
        count++;
        for (const [dr, dc] of DIRS) {
            const nid = (r + dr) * n + (c + dc);
            const inBounds = r + dr >= 0 && r + dr < m && c + dc >= 0 && c + dc < n;
            if (inBounds && parent.has(nid)) {
                const ra = find(id), rb = find(nid);
                if (ra !== rb) {
                    parent.set(ra, rb);
                    count--;
                }
            }
        }
        res.push(count);
    }
    return res;
};
// @lc code=end

// TEST:
console.log(numIslands2(3, 3, [[0, 0], [0, 1], [1, 2], [2, 1]])); // [1,1,2,3]
console.log(numIslands2(1, 1, [[0, 0]])); // [1]
console.log(numIslands2(1, 2, [[0, 0], [0, 1], [0, 0]])); // [1,1,1]
console.log(numIslands2(2, 2, [[0, 0], [0, 1], [1, 0], [1, 1]])); // [1,1,1,1] (each cell connects to previous land)
console.log(numIslands2(3, 1, [[0], [1], [2]])); // [1,1,1]
