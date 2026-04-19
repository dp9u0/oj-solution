/*
 * @lc app=leetcode id=1434 lang=javascript
 *
 * [1434] Number of Ways to Wear Different Hats to Each Other
 */

// @lc code=start
/**
 * @param {number[][]} hats
 * @return {number}
 */
var numberWays = function(hats) {
    const MOD = 1e9 + 7;
    const n = hats.length;
    const full = (1 << n) - 1;

    // hat -> list of people who want it
    const h2p = Array.from({ length: 41 }, () => []);
    for (let i = 0; i < n; i++) {
        for (const h of hats[i]) h2p[h].push(i);
    }

    let dp = new Array(1 << n).fill(0);
    dp[0] = 1;

    for (let h = 1; h <= 40; h++) {
        if (h2p[h].length === 0) continue;
        const next = [...dp];
        for (let mask = 0; mask <= full; mask++) {
            if (dp[mask] === 0) continue;
            for (const p of h2p[h]) {
                if (mask & (1 << p)) continue;
                const nm = mask | (1 << p);
                next[nm] = (next[nm] + dp[mask]) % MOD;
            }
        }
        dp = next;
    }

    return dp[full];
};
// @lc code=end

// TEST:
console.log(numberWays([[3,4],[4,5],[5]])); // 1
console.log(numberWays([[3,5,1],[3,5]])); // 4
console.log(numberWays([[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]])); // 24
console.log(numberWays([[1,2,3]])); // 3
console.log(numberWays([[1],[2],[3]])); // 1
