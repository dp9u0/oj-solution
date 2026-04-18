/*
 * @lc app=leetcode id=3463 lang=javascript
 *
 * [3463] Check If Digits Are Equal in String After Operations II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
    const n = s.length;
    const m = n - 2;

    const smallC = (a, b, p) => {
        if (b > a) return 0;
        if (b === 0 || b === a) return 1;
        let num = 1, den = 1;
        for (let i = 0; i < b; i++) {
            num = num * (a - i) % p;
            den = den * (i + 1) % p;
        }
        let inv = 1, base = den, exp = p - 2;
        while (exp > 0) {
            if (exp & 1) inv = inv * base % p;
            base = base * base % p;
            exp >>= 1;
        }
        return num * inv % p;
    };

    const lucas = (a, b, p) => {
        if (b > a) return 0;
        let result = 1;
        while (a > 0 || b > 0) {
            const ai = a % p, bi = b % p;
            if (bi > ai) return 0;
            result = result * smallC(ai, bi, p) % p;
            a = Math.floor(a / p);
            b = Math.floor(b / p);
        }
        return result;
    };

    // CRT: x ≡ a mod 2, x ≡ b mod 5 → x mod 10
    const crtMap = [0, 6, 2, 8, 4, 5, 1, 7, 3, 9];

    const binomMod10 = (a, b) => {
        const r2 = lucas(a, b, 2);
        const r5 = lucas(a, b, 5);
        return crtMap[r2 * 5 + r5];
    };

    let sum = 0;
    for (let i = 0; i <= m; i++) {
        const c = binomMod10(m, i);
        const diff = ((Number(s[i]) - Number(s[i + 1])) % 10 + 10) % 10;
        sum = (sum + c * diff) % 10;
    }
    return sum === 0;
};
// @lc code=end

// TEST:
console.log(hasSameDigits("3902")); // true
console.log(hasSameDigits("34789")); // false
console.log(hasSameDigits("11")); // true (but constraint says >= 3, testing edge)
console.log(hasSameDigits("123")); // ?
console.log(hasSameDigits("000")); // true
console.log(hasSameDigits("9024")); // ?
