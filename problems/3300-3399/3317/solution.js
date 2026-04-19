/*
 * @lc app=leetcode id=3317 lang=javascript
 *
 * [3317] Find the Number of Possible Ways for an Event
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var numberOfWays = function(n, x, y) {
  const MOD = 1e9 + 7;
  const maxK = Math.min(n, x);

  let S = new Array(maxK + 1).fill(0);
  S[0] = 1;

  for (let i = 1; i <= n; i++) {
    const newS = new Array(maxK + 1).fill(0);
    for (let k = 1; k <= Math.min(i, maxK); k++) {
      newS[k] = (k * S[k] + S[k - 1]) % MOD;
    }
    S = newS;
  }

  const mulMod = (a, b) => Number(BigInt(a) * BigInt(b) % BigInt(MOD));

  let result = 0;
  let perm = 1;
  let yPow = 1;

  for (let k = 1; k <= maxK; k++) {
    perm = mulMod(perm, x - k + 1);
    yPow = mulMod(yPow, y);
    result = (result + mulMod(mulMod(perm, S[k]), yPow)) % MOD;
  }

  return result;
};
// @lc code=end

// TEST:
console.log(numberOfWays(1, 2, 3) === 6);
console.log(numberOfWays(5, 2, 1) === 32);
console.log(numberOfWays(3, 3, 4) === 684);
console.log(numberOfWays(1, 1, 1) === 1);
console.log(numberOfWays(2, 3, 2) === 30);
