/*
 * @lc app=leetcode id=3855 lang=javascript
 *
 * [3855] Sum of K-Digit Numbers in a Range
 */

// @lc code=start
/**
 * @param {number} l
 * @param {number} r
 * @param {number} k
 * @return {number}
 */
var sumOfNumbers = function(l, r, k) {
  const MOD = 1000000007n;

  const powmod = (base, exp) => {
    let result = 1n;
    base %= MOD;
    while (exp > 0n) {
      if (exp & 1n) result = result * base % MOD;
      base = base * base % MOD;
      exp >>= 1n;
    }
    return result;
  };

  const count = BigInt(r - l + 1);
  const digitSum = BigInt((l + r) * (r - l + 1) / 2);

  // ans = digitSum * count^(k-1) * (10^k - 1) / 9 mod MOD
  const countK1 = powmod(count, BigInt(k - 1));
  const tenK = powmod(10n, BigInt(k));
  const geomSum = (tenK - 1n + MOD) % MOD;
  const inv9 = powmod(9n, MOD - 2n);

  return Number(digitSum % MOD * countK1 % MOD * geomSum % MOD * inv9 % MOD);
};
// @lc code=end

// TEST:
console.log(sumOfNumbers(1, 2, 2)); // 66
console.log(sumOfNumbers(0, 1, 3)); // 444
console.log(sumOfNumbers(5, 5, 10)); // 555555520
console.log(sumOfNumbers(0, 9, 1)); // 45
console.log(sumOfNumbers(1, 9, 1)); // 45
console.log(sumOfNumbers(0, 0, 5)); // 0
console.log(sumOfNumbers(3, 7, 1)); // 25 = 3+4+5+6+7
