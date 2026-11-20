/*
 * @lc app=leetcode.cn id=1820 lang=javascript
 *
 * [1820] 最多邀请的个数
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumInvitations = function(grid) {
    const m = grid.length, n = grid[0].length;
    const matchGirl = new Array(n).fill(-1); // girl -> matched boy
    const dfs = (boy, visited) => {
        for (let girl = 0; girl < n; girl++) {
            if (grid[boy][girl] && !visited[girl]) {
                visited[girl] = true;
                // girl free, or her boy can rematch to someone else
                if (matchGirl[girl] === -1 || dfs(matchGirl[girl], visited)) {
                    matchGirl[girl] = boy;
                    return true;
                }
            }
        }
        return false;
    };
    let count = 0;
    for (let boy = 0; boy < m; boy++) {
        if (dfs(boy, new Array(n).fill(false))) count++;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(maxInvitations([[1,1,1],[1,0,1],[0,0,1]])); // 3
console.log(maxInvitations([[1,0,1,0],[1,0,0,0],[0,0,1,0],[1,1,1,0]])); // 3
console.log(maxInvitations([[1,0],[0,1]])); // 2
console.log(maxInvitations([[0,0],[0,0]])); // 0
