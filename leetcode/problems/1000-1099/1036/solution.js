/*
 * @lc app=leetcode id=1036 lang=javascript
 *
 * [1036] Escape a Large Maze
 */

// @lc code=start
/**
 * @param {number[][]} blocked
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
var isEscapePossible = function(blocked, source, target) {
    const MAX = 1000000;
    const b = blocked.length;
    if (b < 2) return true;
    const maxArea = Math.floor(b * (b - 1) / 2);

    const blockedSet = new Set();
    for (const [x, y] of blocked) blockedSet.add(x * MAX + y);

    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const bfs = (start, end) => {
        const visited = new Set();
        const endKey = end[0] * MAX + end[1];
        visited.add(start[0] * MAX + start[1]);
        const queue = [[start[0], start[1]]];
        let head = 0;

        while (head < queue.length) {
            if (visited.size > maxArea) return 1; // escaped
            const [x, y] = queue[head++];
            for (const [dx, dy] of dirs) {
                const nx = x + dx, ny = y + dy;
                if (nx < 0 || nx >= MAX || ny < 0 || ny >= MAX) continue;
                const key = nx * MAX + ny;
                if (blockedSet.has(key) || visited.has(key)) continue;
                if (key === endKey) return 2; // reached target
                visited.add(key);
                queue.push([nx, ny]);
            }
        }
        return 0; // trapped
    };

    const r1 = bfs(source, target);
    if (r1 === 2) return true;
    if (r1 === 0) return false;

    const r2 = bfs(target, source);
    return r2 !== 0;
};
// @lc code=end

// TEST:
console.log(isEscapePossible([[0,1],[1,0]], [0,0], [0,2]));
console.log(isEscapePossible([], [0,0], [999999,999999]));
console.log(isEscapePossible([[0,1],[1,0],[1,1]], [0,0], [2,2]));
