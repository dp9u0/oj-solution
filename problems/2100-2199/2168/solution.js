/*
 * @lc app=leetcode.cn id=2168 lang=javascript
 *
 * [2168] 每个数字的频率都相同的不同子字符串的数量
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var equalDigitFrequency = function(s) {
    const n = s.length;
    const M1 = 1000000007n, M2 = 998244353n, B = 11n;
    const h1 = new Array(n + 1).fill(0n);
    const h2 = new Array(n + 1).fill(0n);
    const pw1 = new Array(n + 1).fill(1n);
    const pw2 = new Array(n + 1).fill(1n);
    for (let i = 0; i < n; i++) {
        const d = BigInt(s.charCodeAt(i) - 47); // digit + 1, avoids 0 for '0'
        h1[i + 1] = (h1[i] * B + d) % M1;
        h2[i + 1] = (h2[i] * B + d) % M2;
        pw1[i + 1] = (pw1[i] * B) % M1;
        pw2[i + 1] = (pw2[i] * B) % M2;
    }
    const seen = new Set();
    const cnt = new Int32Array(10);
    for (let i = 0; i < n; i++) {
        cnt.fill(0);
        for (let j = i; j < n; j++) {
            cnt[s.charCodeAt(j) - 48]++;
            let k = -1, ok = true;
            for (let d = 0; d < 10; d++) {
                if (cnt[d] === 0) continue;
                if (k === -1) k = cnt[d];
                else if (cnt[d] !== k) { ok = false; break; }
            }
            if (!ok) continue;
            const r1 = ((h1[j + 1] - h1[i] * pw1[j + 1 - i]) % M1 + M1) % M1;
            const r2 = ((h2[j + 1] - h2[i] * pw2[j + 1 - i]) % M2 + M2) % M2;
            seen.add(r1.toString() + ',' + r2.toString());
        }
    }
    return seen.size;
};
// @lc code=end

// TEST:
console.log(equalDigitFrequency("1212")); // 5
console.log(equalDigitFrequency("12321")); // 9
console.log(equalDigitFrequency("1")); // 1
console.log(equalDigitFrequency("121212")); // 7 ("1","2","12","21","1212","2121","121212")
