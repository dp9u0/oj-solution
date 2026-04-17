/*
 * @lc app=leetcode id=2484 lang=javascript
 *
 * [2484] Count Palindromic Subsequences
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countPalindromes = function(s) {
    const MOD = 1000000007;
    const MOD_BI = 1000000007n;
    const n = s.length;
    if (n < 5) return 0;

    const d = new Uint8Array(n);
    for (let i = 0; i < n; i++) d[i] = s.charCodeAt(i) - 48;

    // rp[k*100+a*10+b] = count of pairs (l,m) with l>=k, l<m, s[l]=a, s[m]=b
    const rp = new Int32Array((n + 1) * 100);
    const sufCnt = new Int32Array(10);

    for (let k = n - 1; k >= 0; k--) {
        const base = k * 100, next = (k + 1) * 100;
        for (let i = 0; i < 100; i++) rp[base + i] = rp[next + i];
        const digit = d[k];
        for (let b = 0; b < 10; b++)
            rp[base + digit * 10 + b] = (rp[base + digit * 10 + b] + sufCnt[b]) % MOD;
        sufCnt[digit]++;
    }

    const lp = new Int32Array(100);
    const preCnt = new Int32Array(10);
    let ans = 0;

    for (let k = 0; k < n; k++) {
        const rBase = (k + 1) * 100;
        let contrib = 0;
        for (let ab = 0; ab < 100; ab++) {
            const a = (ab / 10) | 0, b = ab % 10;
            const rv = rp[rBase + b * 10 + a];
            if (lp[ab] > 0 && rv > 0)
                contrib = (contrib + Number(BigInt(lp[ab]) * BigInt(rv) % MOD_BI)) % MOD;
        }
        ans = (ans + contrib) % MOD;

        const digit = d[k];
        for (let a = 0; a < 10; a++)
            if (preCnt[a] > 0)
                lp[a * 10 + digit] = (lp[a * 10 + digit] + preCnt[a]) % MOD;
        preCnt[digit]++;
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(countPalindromes("103301"));    // 2
console.log(countPalindromes("0000000"));   // 21
console.log(countPalindromes("9999900000")); // 2
console.log(countPalindromes("12345"));     // 0
console.log(countPalindromes("12321"));     // 1
