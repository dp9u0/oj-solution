/*
 * @lc app=leetcode.cn id=2852 lang=javascript
 *
 * [2852] 所有单元格的远离程度之和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var sumRemoteness = function(grid) {
    const n = grid.length;
    const seen = Array.from({ length: n }, () => new Array(n).fill(false));
    let total = 0;
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
        if (grid[i][j] !== -1) total += grid[i][j];
    }
    const DIRS = [[1,0],[-1,0],[0,1],[0,-1]];
    let ans = 0;
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
        if (grid[i][j] === -1 || seen[i][j]) continue;
        let compSum = 0, size = 0;
        const stack = [[i, j]];
        seen[i][j] = true;
        while (stack.length) {
            const [r, c] = stack.pop();
            compSum += grid[r][c];
            size++;
            for (const [dx, dy] of DIRS) {
                const nr = r + dx, nc = c + dy;
                if (nr < 0 || nr >= n || nc < 0 || nc >= n) continue;
                if (seen[nr][nc] || grid[nr][nc] === -1) continue;
                seen[nr][nc] = true;
                stack.push([nr, nc]);
            }
        }
        ans += size * (total - compSum);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(sumRemoteness([[-1,1,-1],[5,-1,4],[-1,3,-1]])); // 39
console.log(sumRemoteness([[-1,3,4],[-1,-1,-1],[3,-1,-1]])); // 13
console.log(sumRemoteness([[1]])); // 0
console.log(sumRemoteness([[2,2],[2,2]])); // 0
