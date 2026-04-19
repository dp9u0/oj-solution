/*
 * @lc app=leetcode id=1397 lang=javascript
 *
 * [1397] Find All Good Strings
 */

// @lc code=start
/**
 * @param {number} n
 * @param {string} s1
 * @param {string} s2
 * @param {string} evil
 * @return {number}
 */
var findGoodStrings = function(n, s1, s2, evil) {
    const MOD = 1e9 + 7;
    const m = evil.length;

    // KMP failure function
    const fail = new Array(m + 1).fill(0);
    for (let i = 1, j = 0; i < m; i++) {
        while (j > 0 && evil[i] !== evil[j]) j = fail[j];
        if (evil[i] === evil[j]) j++;
        fail[i + 1] = j;
    }

    // Precompute next state for (kmp_state, char)
    const nxt = Array.from({ length: m }, () => new Array(26));
    for (let j = 0; j < m; j++) {
        for (let c = 0; c < 26; c++) {
            let k = j;
            while (k > 0 && evil.charCodeAt(k) - 97 !== c) k = fail[k];
            if (evil.charCodeAt(k) - 97 === c) k++;
            nxt[j][c] = k;
        }
    }

    const countLe = (bound) => {
        let dp = Array.from({ length: m }, () => [0, 0]);
        dp[0][1] = 1;
        for (let pos = 0; pos < n; pos++) {
            const ndp = Array.from({ length: m }, () => [0, 0]);
            const lim = bound.charCodeAt(pos) - 97;
            for (let j = 0; j < m; j++) {
                for (let t = 0; t <= 1; t++) {
                    if (dp[j][t] === 0) continue;
                    const upper = t ? lim : 25;
                    for (let c = 0; c <= upper; c++) {
                        const nj = nxt[j][c];
                        if (nj === m) continue;
                        const nt = (t && c === lim) ? 1 : 0;
                        ndp[nj][nt] = (ndp[nj][nt] + dp[j][t]) % MOD;
                    }
                }
            }
            dp = ndp;
        }
        let ans = 0;
        for (let j = 0; j < m; j++) {
            ans = (ans + dp[j][0] + dp[j][1]) % MOD;
        }
        return ans;
    };

    const hasEvil = (s) => {
        let j = 0;
        for (let i = 0; i < s.length; i++) {
            j = nxt[j][s.charCodeAt(i) - 97];
            if (j === m) return true;
        }
        return false;
    };

    return (countLe(s2) - countLe(s1) + (hasEvil(s1) ? 0 : 1) + MOD) % MOD;
};
// @lc code=end

// TEST:
console.log(findGoodStrings(2, "aa", "da", "b") === 51);
console.log(findGoodStrings(8, "leetcode", "leetgoes", "leet") === 0);
console.log(findGoodStrings(2, "gx", "gz", "x") === 2);
console.log(findGoodStrings(2, "aa", "az", "b") === 25);
console.log(findGoodStrings(1, "a", "z", "b") === 25);
