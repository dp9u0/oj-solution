/*
 * @lc app=leetcode.cn id=LCR 127 lang=javascript
 *
 * [LCR 127] 跳跃训练
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var trainWays = function(num) {
  const MOD = 1e9 + 7;
  if (num === 0) return 1;
  let prev = 1, cur = 1; // f(0) = 1, f(1) = 1
  for (let i = 2; i <= num; i++) {
    const next = (prev + cur) % MOD;
    prev = cur;
    cur = next;
  }
  return cur;
};
// @lc code=end

// TEST:
// Example 1
console.log(trainWays(2) === 2);
// Example 2
console.log(trainWays(5) === 8);
// n = 0 (stay at start, 1 way)
console.log(trainWays(0) === 1);
// n = 1
console.log(trainWays(1) === 1);
// Large n modulo check: raw fib(50) % 1e9+7 (within Number safe range)
const rawFib = (n) => {
  let a = 1, b = 1;
  for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
  return b;
};
console.log(trainWays(50) === rawFib(50) % (1e9 + 7));
// n = 100 upper bound, using BigInt for exact raw value
const rawFibBig = (n) => {
  let a = 1n, b = 1n;
  for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
  return Number(b % 1000000007n);
};
console.log(trainWays(100) === rawFibBig(100));
