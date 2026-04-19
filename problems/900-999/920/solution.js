/*
 * @lc app=leetcode id=920 lang=javascript
 *
 * [920] Number of Music Playlists
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} goal
 * @param {number} k
 * @return {number}
 */
var numMusicPlaylists = function(n, goal, k) {
    const MOD = 1e9 + 7;
    const dp = Array.from({ length: goal + 1 }, () => new Array(n + 1).fill(0));
    dp[0][0] = 1;

    for (let i = 1; i <= goal; i++) {
        for (let j = 1; j <= Math.min(i, n); j++) {
            // Add a new song: choose from (n - j + 1) unused songs
            dp[i][j] = dp[i - 1][j - 1] * (n - j + 1) % MOD;
            // Repeat an old song: choose from max(0, j - k) eligible songs
            dp[i][j] = (dp[i][j] + dp[i - 1][j] * Math.max(0, j - k)) % MOD;
        }
    }

    return dp[goal][n];
};
// @lc code=end

// TEST:
console.log(numMusicPlaylists(3, 3, 1)); // 6
console.log(numMusicPlaylists(2, 3, 0)); // 6
console.log(numMusicPlaylists(2, 3, 1)); // 2
