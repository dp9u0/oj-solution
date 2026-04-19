/*
 * @lc app=leetcode id=1569 lang=javascript
 *
 * [1569] Number of Ways to Reorder Array to Get Same BST
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function(nums) {
  const MOD = 1e9 + 7;
  const n = nums.length;

  // Precompute factorials and inverse factorials for combination
  const fact = new Array(n + 1).fill(1);
  const invFact = new Array(n + 1).fill(1);
  for (let i = 1; i <= n; i++) fact[i] = Number(BigInt(fact[i - 1]) * BigInt(i) % BigInt(MOD));
  invFact[n] = modPow(fact[n], MOD - 2, MOD);
  for (let i = n - 1; i >= 0; i--) {
    invFact[i] = Number(BigInt(invFact[i + 1]) * BigInt(i + 1) % BigInt(MOD));
  }

  const comb = (n, r) => {
    if (r < 0 || r > n) return 0;
    return Number(BigInt(fact[n]) * BigInt(invFact[r]) % BigInt(MOD) * BigInt(invFact[n - r]) % BigInt(MOD));
  };

  const dfs = (arr) => {
    if (arr.length <= 2) return 1;

    const root = arr[0];
    const left = arr.filter(x => x < root);
    const right = arr.filter(x => x > root);

    const leftWays = dfs(left);
    const rightWays = dfs(right);
    const interleave = comb(left.length + right.length, left.length);

    return Number(BigInt(interleave) * BigInt(leftWays) % BigInt(MOD) * BigInt(rightWays) % BigInt(MOD));
  };

  return (dfs(nums) - 1 + MOD) % MOD;
};

function modPow(base, exp, mod) {
  base = BigInt(base);
  exp = BigInt(exp);
  mod = BigInt(mod);
  let result = 1n;
  while (exp > 0n) {
    if (exp & 1n) result = result * base % mod;
    base = base * base % mod;
    exp >>= 1n;
  }
  return Number(result);
}
// @lc code=end

// TEST:
console.log(numOfWays([2, 1, 3]) === 1);
console.log(numOfWays([3, 4, 5, 1, 2]) === 5);
console.log(numOfWays([1, 2, 3]) === 0);
console.log(numOfWays([3, 1, 2, 5, 4, 6]) === 19);
console.log(numOfWays([1]) === 0);
console.log(numOfWays([2, 1]) === 0);
