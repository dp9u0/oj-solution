/*
 * @lc app=leetcode id=4039 lang=javascript
 *
 * [4039] Sum of Decoded Numbers
 */

// @lc code=start
const MOD = 1000000007n;

/**
 * 快速幂：计算 base^exp mod MOD（BigInt，避免乘法精度丢失）
 * @param {bigint} base
 * @param {number} exp
 * @return {bigint}
 */
const powMod = (base, exp) => {
  let result = 1n;
  let b = base % MOD;
  let e = exp;
  while (e > 0) {
    if (e & 1) result = (result * b) % MOD;
    b = (b * b) % MOD;
    e >>>= 1;
  }
  return result;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumDecoded = function(nums) {
  let sum = 0n;
  for (const num of nums) {
    const width = num % 10;
    const d = Math.floor(num / 10);
    // p = 10^(len(d) - width)：前 width 位与剩余位的分隔幂次
    const p = 10 ** (String(d).length - width);
    const x = Math.floor(d / p);
    const y = d % p;
    sum = (sum + powMod(BigInt(x), y)) % MOD;
  }
  return Number(sum);
};
// @lc code=end

// TEST:
console.log(sumDecoded([231]) === 8);
console.log(sumDecoded([2522, 2101]) === 1649);
console.log(sumDecoded([2301]) === 73741817);
// x=10, y=9（num=1092: width=2, d=109）→ 10^9 < 1e9+7，直接为 1000000000
console.log(sumDecoded([1092]) === 1000000000);
// 拆分边界：999999999999998 → width=8, d=99999999999999, x=99999999, y=999999
console.log(sumDecoded([999999999999998]) === Number(99999999n ** 999999n % MOD));
// 多元素求和取模：8 + 1000000000 = 1000000008 → mod 1e9+7 = 1
console.log(sumDecoded([231, 1092]) === 1);
