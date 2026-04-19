/*
 * @lc app=leetcode id=3756 lang=javascript
 *
 * [3756] Concatenate Non-Zero Digits and Multiply by Sum II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumAndMultiply = function(s, queries) {
  const MOD = BigInt(1e9 + 7);
  const n = s.length;
  const cnt = new Int32Array(n + 1);
  const psum = new Int32Array(n + 1);
  const val = new Array(n + 1);
  const pow10 = new Array(n + 1);
  val[0] = 0n;
  pow10[0] = 1n;
  for (let i = 1; i <= n; i++) pow10[i] = pow10[i - 1] * 10n % MOD;
  for (let i = 0; i < n; i++) {
    const d = Number(s[i]);
    const nz = d !== 0;
    cnt[i + 1] = cnt[i] + (nz ? 1 : 0);
    psum[i + 1] = psum[i] + (nz ? d : 0);
    val[i + 1] = nz ? (val[i] * 10n + BigInt(d)) % MOD : val[i];
  }
  return queries.map(([l, r]) => {
    const c = cnt[r + 1] - cnt[l];
    if (c === 0) return 0;
    const sm = BigInt(psum[r + 1] - psum[l]);
    const x = (val[r + 1] - val[l] * pow10[c] % MOD + MOD) % MOD;
    return Number(x * sm % MOD);
  });
};
// @lc code=end

// TEST:
console.log(JSON.stringify(sumAndMultiply('10203004', [[0, 7], [1, 3], [4, 6]]))); // [12340,4,9]
console.log(JSON.stringify(sumAndMultiply('1000', [[0, 3], [1, 1]]))); // [1,0]
console.log(JSON.stringify(sumAndMultiply('9876543210', [[0, 9]]))); // [444444137]
console.log(JSON.stringify(sumAndMultiply('5', [[0, 0]]))); // [25]
console.log(JSON.stringify(sumAndMultiply('0', [[0, 0]]))); // [0]
