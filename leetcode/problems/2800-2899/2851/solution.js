/*
 * @lc app=leetcode id=2851 lang=javascript
 *
 * [2851] String Transformation
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @param {number} k
 * @return {number}
 */
var numberOfWays = function(s, t, k) {
    const MOD = BigInt(1e9 + 7);
    const n = s.length;

    // KMP: find c = number of rotations of s equal to t
    const ss = s + s;
    let c = 0;
    const fail = new Array(n + 1).fill(0);
    for (let i = 1, j = 0; i < n; i++) {
        while (j > 0 && t[i] !== t[j]) j = fail[j];
        if (t[i] === t[j]) j++;
        fail[i + 1] = j;
    }
    for (let i = 0, j = 0; i < 2 * n - 1; i++) {
        while (j > 0 && ss[i] !== t[j]) j = fail[j];
        if (ss[i] === t[j]) j++;
        if (j === n) {
            if (i - n + 1 < n) c++;
            j = fail[j];
        }
    }

    if (c === 0) return 0;

    // Matrix exponentiation
    const mul = (A, B) => {
        const r = [[0n, 0n], [0n, 0n]];
        for (let i = 0; i < 2; i++)
            for (let j = 0; j < 2; j++)
                for (let m = 0; m < 2; m++)
                    r[i][j] = (r[i][j] + A[i][m] * B[m][j]) % MOD;
        return r;
    };

    const bc = BigInt(c), bn = BigInt(n);
    let M = [[(bc - 1n + MOD) % MOD, bc], [(bn - bc) % MOD, (bn - 1n - bc + MOD) % MOD]];
    let R = [[1n, 0n], [0n, 1n]];

    let p = k;
    while (p > 0) {
        if (p & 1) R = mul(R, M);
        M = mul(M, M);
        p = Math.floor(p / 2);
    }

    const a0 = s === t ? 1n : 0n;
    const b0 = s === t ? 0n : 1n;
    return Number((R[0][0] * a0 + R[0][1] * b0) % MOD);
};
// @lc code=end

// TEST:
console.log(numberOfWays("abcd", "cdab", 2)); // 2
console.log(numberOfWays("ababab", "ababab", 1)); // 2
console.log(numberOfWays("abcd", "abcd", 1)); // 0
console.log(numberOfWays("aa", "aa", 1)); // 1
console.log(numberOfWays("ab", "ba", 1)); // 1
