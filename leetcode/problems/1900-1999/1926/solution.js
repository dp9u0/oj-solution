/*
 * @lc app=leetcode id=1926 lang=javascript
 *
 * [1926] Nearest Exit from Entrance in Maze
 */

// @lc code=start
/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const m = maze.length, n = maze[0].length;
    const [sr, sc] = entrance;
    const visited = Array.from({ length: m }, () => new Array(n).fill(false));
    visited[sr][sc] = true;
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    const queue = [[sr, sc]];
    let steps = 0;

    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const [r, c] = queue.shift();
            if ((r === 0 || r === m - 1 || c === 0 || c === n - 1) && (r !== sr || c !== sc)) {
                return steps;
            }
            for (const [dr, dc] of dirs) {
                const nr = r + dr, nc = c + dc;
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && !visited[nr][nc] && maze[nr][nc] === '.') {
                    visited[nr][nc] = true;
                    queue.push([nr, nc]);
                }
            }
        }
        steps++;
    }
    return -1;
};
// @lc code=end

// TEST:
console.log(nearestExit([['+','+','.','+'],['.','.','.','+'],['+','+','+','.']], [1,2])); // 1
console.log(nearestExit([['+','+','+'],['.','.','.'],['+','+','+']], [1,0]));             // 2
console.log(nearestExit([['.','+']], [0,0]));                                               // -1
