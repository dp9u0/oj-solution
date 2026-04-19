/*
 * @lc app=leetcode id=2438 lang=javascript
 *
 * [2438] Range Product Queries of Powers
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function(n, queries) {
  const MOD = BigInt(1e9 + 7);

  // Extract exponents from binary representation
  const exponents = [];
  for (let i = 0; n > 0; i++) {
    if (n & 1) exponents.push(i);
    n >>= 1;
  }

  // Prefix sum of exponents
  const prefix = [0];
  for (const e of exponents) prefix.push(prefix[prefix.length - 1] + e);

  // Fast modular exponentiation using BigInt for precision
  const pow2 = (exp) => {
    let result = 1n, base = 2n;
    while (exp > 0) {
      if (exp & 1) result = result * base % MOD;
      base = base * base % MOD;
      exp >>= 1;
    }
    return Number(result);
  };

  return queries.map(([l, r]) => pow2(prefix[r + 1] - prefix[l]));
};
// @lc code=end

// TEST:
console.log(productQueries(15, [[0,1],[2,2],[0,3]])); // [2,4,64]
console.log(productQueries(2, [[0,0]])); // [2]
console.log(productQueries(1, [[0,0]])); // [1]
console.log(productQueries(8, [[0,0]])); // [8]
console.log(productQueries(7, [[0,2]])); // [8]
