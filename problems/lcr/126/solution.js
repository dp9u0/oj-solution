/*
 * @lc app=leetcode.cn id=LCR 126 lang=javascript
 *
 * [LCR 126] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const MOD = 1e9 + 7;
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 0;
    let b = 1;
    for (let i = 2; i <= n; i++) {
        const sum = (a + b) % MOD;
        a = b;
        b = sum;
    }
    return b;
};
// @lc code=end

// TEST:
function assertEqual(actual, expected, label) {
    console.log(`${label}: ${actual === expected ? 'PASS' : `FAIL (got ${actual}, expected ${expected})`}`);
}

assertEqual(fib(0), 0, 'fib(0)');
assertEqual(fib(1), 1, 'fib(1)');
assertEqual(fib(2), 1, 'fib(2)');
assertEqual(fib(3), 2, 'fib(3)');
assertEqual(fib(4), 3, 'fib(4)');
assertEqual(fib(10), 55, 'fib(10)');
assertEqual(fib(100), 687995182, 'fib(100)');
