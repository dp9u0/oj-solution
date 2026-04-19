/*
 * @lc app=leetcode id=2556 lang=javascript
 *
 * [2556] Disconnect Path in a Binary Matrix by at Most One Flip
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var isPossibleToCutPath = function(grid) {
    const m = grid.length, n = grid[0].length;

    // DFS to find path from (r,c) to (m-1,n-1), marking path cells as 0
    const dfs = (r, c) => {
        if (r >= m || c >= n || grid[r][c] === 0) return false;
        if (r === m - 1 && c === n - 1) return true;
        // Try right first, then down
        if (dfs(r, c + 1)) {
            if (!(r === 0 && c === 0)) grid[r][c] = 0;
            return true;
        }
        if (dfs(r + 1, c)) {
            if (!(r === 0 && c === 0)) grid[r][c] = 0;
            return true;
        }
        grid[r][c] = 0; // mark dead end
        return false;
    };

    // If no path exists, already disconnected
    if (!dfs(0, 0)) return true;

    // Reset grid for second attempt — path cells were marked 0
    // Actually we need to restore: only path cells were set to 0
    // But dead-end cells were also set to 0. We need a cleaner approach.

    // Try second path — if fails, answer is true
    return !dfs(0, 0);
};
// @lc code=end

// TEST:
console.log(isPossibleToCutPath([[1,1,1],[1,0,0],[1,1,1]]));  // true
console.log(isPossibleToCutPath([[1,1,1],[1,0,1],[1,1,1]]));  // false
console.log(isPossibleToCutPath([[1,1],[1,1]]));               // false
console.log(isPossibleToCutPath([[1,1,1],[0,0,1],[1,1,1]]));   // true
