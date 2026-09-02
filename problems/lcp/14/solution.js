/*
 * @lc app=leetcode.cn id=LCP 14 lang=javascript
 *
 * [LCP 14] 切分数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var splitArray = function(nums) {
  const n = nums.length;

  // SPF sieve up to the max element (nums[i] <= 10^6)
  let maxVal = 0;
  for (const x of nums) maxVal = Math.max(maxVal, x);
  const spf = new Uint32Array(maxVal + 1);
  for (let i = 2; i <= maxVal; i++) {
    if (spf[i] === 0) {
      spf[i] = i;
      if (i * i <= maxVal) {
        for (let j = i * i; j <= maxVal; j += i) {
          if (spf[j] === 0) spf[j] = i;
        }
      }
    }
  }

  // distinct prime factors of x
  const factorsOf = (x) => {
    const out = [];
    while (x > 1) {
      const p = spf[x];
      out.push(p);
      while (x % p === 0) x = (x / p) | 0;
    }
    return out;
  };

  // dp[i] = min pieces to split the first i elements (nums[0..i-1]).
  // A last piece nums[j..i-1] is valid iff gcd(nums[j], nums[i-1]) > 1,
  // i.e. nums[j] and nums[i-1] share a prime factor p, giving dp[j] + 1.
  const dp = new Array(n + 1);
  dp[0] = 0;

  // g[p] = min dp[start] over registered starts whose value is divisible by p
  const g = new Map();
  const register = (start, x) => {
    for (const p of factorsOf(x)) {
      const cur = g.get(p);
      g.set(p, cur === undefined ? start : Math.min(cur, start));
    }
  };

  register(dp[0], nums[0]); // start index 0 closes a whole-prefix piece
  for (let i = 1; i <= n; i++) {
    const x = nums[i - 1];
    let best = Infinity;
    for (const p of factorsOf(x)) {
      const cand = g.get(p);
      if (cand !== undefined && cand < best) best = cand;
    }
    dp[i] = best + 1; // best is finite: start i-1 always shares x's own primes
    if (i < n) register(dp[i], nums[i]); // index i can open a future piece
  }

  return dp[n];
};
// @lc code=end

// TEST:
const assert = require('assert');

// brute force reference: O(n^2) direct DP over gcd for cross-checking
function gcd(a, b) {
  while (b) { const t = a % b; a = b; b = t; }
  return a;
}
function bruteSplit(nums) {
  const n = nums.length;
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (gcd(nums[j], nums[i - 1]) > 1) dp[i] = Math.min(dp[i], dp[j] + 1);
    }
  }
  return dp[n];
}

// LeetCode examples
assert.strictEqual(splitArray([2, 3, 3, 2, 3, 3]), 2);
assert.strictEqual(splitArray([2, 3, 5, 7]), 4);

// basic edge & hand cases
assert.strictEqual(splitArray([6]), 1);
assert.strictEqual(splitArray([2, 4, 8]), 1);          // gcd(2, 8) = 2, one piece
assert.strictEqual(splitArray([6, 9]), 1);             // gcd(6, 9) = 3
assert.strictEqual(splitArray([3, 5, 15, 7]), 2);      // [3,5,15],[7]
assert.strictEqual(splitArray([2, 3, 5, 7, 11, 13, 17, 19]), 8); // pairwise coprime primes
assert.strictEqual(splitArray([4, 6, 9, 12]), 1);      // gcd(4, 12) = 4

// randomized cross-check vs brute force
let seed = 12345;
function rnd() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }
for (let t = 0; t < 300; t++) {
  const len = 1 + Math.floor(rnd() * 7);
  const arr = [];
  for (let i = 0; i < len; i++) arr.push(2 + Math.floor(rnd() * 28));
  assert.strictEqual(splitArray(arr), bruteSplit(arr), 'mismatch on ' + JSON.stringify(arr));
}

console.log('All tests passed!');
console.log('ex1 =', splitArray([2, 3, 3, 2, 3, 3]));
