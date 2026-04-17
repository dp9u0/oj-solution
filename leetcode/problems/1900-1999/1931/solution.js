/*
 * @lc app=leetcode id=1931 lang=javascript
 *
 * [1931] Painting a Grid With Three Different Colors
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var colorTheGrid = function(m, n) {
    const MOD = 1e9 + 7;

    // Generate all valid column colorings (no adjacent same color)
    const states = [];
    const gen = (s) => {
        if (s.length === m) { states.push([...s]); return; }
        for (let c = 0; c < 3; c++) {
            if (s.length === 0 || s[s.length - 1] !== c) {
                s.push(c);
                gen(s);
                s.pop();
            }
        }
    };
    gen([]);

    const S = states.length;

    // Precompute compatibility: can state j follow state i?
    const compat = Array.from({ length: S }, () => []);
    for (let i = 0; i < S; i++) {
        for (let j = 0; j < S; j++) {
            let ok = true;
            for (let r = 0; r < m; r++) {
                if (states[i][r] === states[j][r]) { ok = false; break; }
            }
            if (ok) compat[i].push(j);
        }
    }

    // DP: dp[i] = ways ending with column state i
    let dp = new Array(S).fill(1);
    for (let col = 1; col < n; col++) {
        const next = new Array(S).fill(0);
        for (let i = 0; i < S; i++) {
            if (!dp[i]) continue;
            for (const j of compat[i]) {
                next[j] = (next[j] + dp[i]) % MOD;
            }
        }
        dp = next;
    }

    let ans = 0;
    for (let i = 0; i < S; i++) ans = (ans + dp[i]) % MOD;
    return ans;
};
// @lc code=end

// TEST:
console.log(colorTheGrid(1, 1)); // 3
console.log(colorTheGrid(1, 2)); // 6
console.log(colorTheGrid(5, 5)); // 580986
console.log(colorTheGrid(2, 1)); // 6
console.log(colorTheGrid(2, 2)); // 18
console.log(colorTheGrid(3, 1)); // 12
console.log(colorTheGrid(1, 1000)); // large
