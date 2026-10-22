/*
 * @lc app=leetcode.cn id=4084 lang=javascript
 *
 * [4084] 有向网格中的最后访问单元格
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number[]}
 */
var lastVisitedCell = function(grid) {
    // 模拟：下一格越界或已访问即停在当前格
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array.from({ length: rows }, () => new Uint8Array(cols));
    let r = 0;
    let c = 0;
    visited[0][0] = 1;
    for (;;) {
        const ch = grid[r][c];
        let nr = r;
        let nc = c;
        if (ch === 'L') nc--;
        else if (ch === 'R') nc++;
        else if (ch === 'U') nr--;
        else nr++;
        if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || visited[nr][nc]) return [r, c];
        r = nr;
        c = nc;
        visited[r][c] = 1;
    }
};
// @lc code=end

// TEST:
console.log(JSON.stringify(lastVisitedCell([['R', 'R', 'R']])) === '[0,2]');
console.log(JSON.stringify(lastVisitedCell([['D'], ['U']])) === '[1,0]'); // 回到起点触发 visited，停在 (1,0)
console.log(JSON.stringify(lastVisitedCell([['U']])) === '[0,0]');
console.log(JSON.stringify(lastVisitedCell([['L']])) === '[0,0]');
console.log(JSON.stringify(lastVisitedCell([['D', 'L'], ['R', 'U']])) === '[0,1]'); // D→R→U→L 回头停
