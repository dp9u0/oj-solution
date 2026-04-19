/*
 * @lc app=leetcode id=3448 lang=javascript
 *
 * [3448] Count Substrings Divisible By Last Digit
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    const n = s.length;
    const d = [];
    for (let i = 0; i < n; i++) d[i] = s.charCodeAt(i) - 48;
    let ans = 0;

    const dsum = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) dsum[i + 1] = dsum[i] + d[i];

    for (let k = 1; k <= 9; k++) {
        if (k === 1 || k === 2 || k === 5) {
            for (let i = 0; i < n; i++) if (d[i] === k) ans += i + 1;
        } else if (k === 3 || k === 6) {
            const f = [1, 0, 0];
            for (let i = 0; i < n; i++) {
                const r = dsum[i + 1] % 3;
                if (d[i] === k) ans += f[r];
                f[r]++;
            }
        } else if (k === 9) {
            const f = new Array(9).fill(0);
            f[0] = 1;
            for (let i = 0; i < n; i++) {
                const r = dsum[i + 1] % 9;
                if (d[i] === k) ans += f[r];
                f[r]++;
            }
        } else if (k === 4) {
            for (let i = 0; i < n; i++) {
                if (d[i] !== 4) continue;
                let c = 1;
                if (i >= 1 && d[i - 1] % 2 === 0) c += i;
                ans += c;
            }
        } else if (k === 7) {
            const f = new Array(7).fill(0);
            f[0] = 1;
            let g = 0, pi = 5;
            for (let i = 0; i < n; i++) {
                g = (g + d[i] * pi) % 7;
                pi = pi * 5 % 7;
                if (d[i] === 7) ans += f[g];
                f[g]++;
            }
        } else if (k === 8) {
            for (let i = 0; i < n; i++) {
                if (d[i] !== 8) continue;
                let c = 1;
                if (i >= 1 && 2 * d[i - 1] % 8 === 0) c++;
                if (i >= 2 && (4 * d[i - 2] + 2 * d[i - 1]) % 8 === 0) c += i - 1;
                ans += c;
            }
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(countSubstrings("12936")); // 11
console.log(countSubstrings("5701283")); // 18
console.log(countSubstrings("1010101010")); // 25
console.log(countSubstrings("12")); // 3
console.log(countSubstrings("57")); // 2
