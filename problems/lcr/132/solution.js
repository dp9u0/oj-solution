/*
 * @lc app=leetcode.cn id=LCR 132 lang=javascript
 *
 * [LCR 132] 砍竹子 II
 */

// @lc code=start
/**
 * @param {number} bamboo_len
 * @return {number}
 */
var cuttingBamboo = function(bamboo_len) {
  const MOD = 1000000007n;
  const pow = (base, exp) => {
    let result = 1n;
    let b = BigInt(base);
    while (exp > 0) {
      if (exp & 1) result = (result * b) % MOD;
      b = (b * b) % MOD;
      exp >>= 1;
    }
    return result;
  };

  if (bamboo_len <= 3) return bamboo_len - 1;
  const q = Math.floor(bamboo_len / 3);
  const r = bamboo_len % 3;
  let res;
  if (r === 0) res = pow(3, q);
  else if (r === 1) res = (pow(3, q - 1) * 4n) % MOD;
  else res = (pow(3, q) * 2n) % MOD;
  return Number(res);
};
// @lc code=end

// TEST:
const assert = require('assert');

assert.strictEqual(cuttingBamboo(12), 81);
assert.strictEqual(cuttingBamboo(2), 1);
assert.strictEqual(cuttingBamboo(3), 2);
assert.strictEqual(cuttingBamboo(4), 4);
assert.strictEqual(cuttingBamboo(5), 6);
// big value checks that result is modded (BigInt arithmetic)
assert.strictEqual(cuttingBamboo(1000), 620946522);

console.log('All tests passed!');
console.log('cuttingBamboo(12) =', cuttingBamboo(12));
