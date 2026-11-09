/*
 * @lc app=leetcode.cn id=4105 lang=javascript
 *
 * [4105] 重复字符串匹配 II
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var repeatedStringMatch = function(a, b, x, y) {
    const la = a.length;
    const lb = b.length;
    // 长度必要条件:b*y 必须能放进 a*x
    if (lb * y > la * x) return false;

    // a 无限重复的文本(覆盖起点 q ∈ [0, la) 的长度 lb 匹配窗口)
    const reps = Math.ceil((la + lb - 1) / la);
    const text = a.repeat(reps);

    // P:b 在 a^∞ 中出现的位置模 la 的集合
    const inP = new Array(la).fill(false);
    for (let q = 0; q < la; q++) {
        if (text.startsWith(b, q)) inP[q] = true;
    }

    // 残差序列 (p + t*lb) mod la 的周期
    const gcd = (m, n) => (n === 0 ? m : gcd(n, m % n));
    const cycle = la / gcd(la, lb);
    const steps = Math.min(y, cycle);

    for (let p = 0; p < la; p++) {
        if (!inP[p]) continue;
        if (p + lb * y > la * x) continue;
        let ok = true;
        for (let t = 0; t < steps; t++) {
            if (!inP[(p + t * lb) % la]) {
                ok = false;
                break;
            }
        }
        if (ok) return true;
    }
    return false;
};
// @lc code=end

// TEST:
console.log(repeatedStringMatch('ab', 'abab', 2, 1) === true);
console.log(repeatedStringMatch('abc', 'bc', 2, 3) === false);
console.log(repeatedStringMatch('abcd', 'cdab', 2, 1) === true);
console.log(repeatedStringMatch('a', 'a', 1000000000, 1000000000) === true);
console.log(repeatedStringMatch('ab', 'ba', 1, 1) === false);
console.log(repeatedStringMatch('ab', 'ba', 2, 1) === true);
console.log(repeatedStringMatch('aa', 'a', 1, 3) === false);
console.log(repeatedStringMatch('aba', 'ab', 2, 2) === false);
console.log(repeatedStringMatch('aab', 'abaa', 3, 2) === false);
console.log(repeatedStringMatch('ba', 'abab', 2, 1) === false);
console.log(repeatedStringMatch('ba', 'abab', 3, 1) === true);
