/*
 * @lc app=leetcode id=1201 lang=javascript
 *
 * [1201] Ugly Number III
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var nthUglyNumber = function(n, a, b, c) {
    const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
    const lcm = (x, y) => Math.floor(x / gcd(x, y)) * y;
    const ab = lcm(a, b), ac = lcm(a, c), bc = lcm(b, c);
    const abc = lcm(ab, c);
    const count = (m) => Math.floor(m / a) + Math.floor(m / b) + Math.floor(m / c)
        - Math.floor(m / ab) - Math.floor(m / ac) - Math.floor(m / bc)
        + Math.floor(m / abc);
    let lo = 1, hi = 2e9;
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (count(mid) >= n) hi = mid;
        else lo = mid + 1;
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(nthUglyNumber(3, 2, 3, 5)); // 4
console.log(nthUglyNumber(4, 2, 3, 4)); // 6
console.log(nthUglyNumber(5, 2, 11, 13)); // 10
