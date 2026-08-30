/*
 * @lc app=leetcode id=3901 lang=javascript
 *
 * [3901] Good Subsequence Queries
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} p
 * @param {number[][]} queries
 * @return {number}
 */
var countGoodSubseq = function (nums, p, queries) {
  const MAXV = 50001;

  // smallest prime factor sieve
  const spf = new Int32Array(MAXV);
  for (let i = 2; i < MAXV; i++) {
    if (spf[i] === 0) {
      for (let j = i; j < MAXV; j += i) {
        if (spf[j] === 0) spf[j] = i;
      }
    }
  }

  // enumerate all divisors of v via factorization
  const divisorsOf = (v) => {
    const divs = [1];
    while (v > 1) {
      const q = spf[v];
      const base = divs.length;
      let mul = 1;
      while (v % q === 0) {
        v /= q;
        mul *= q;
        for (let k = 0; k < base; k++) divs.push(divs[k] * mul);
      }
    }
    return divs;
  };

  const n = nums.length;
  let m = 0; // number of active elements (nums[i] % p === 0)
  const cntPrime = new Int32Array(MAXV); // per prime: active elements it divides
  const cntDiv = new Int32Array(MAXV); // per d: active reduced values divisible by d
  const buckets = new Map(); // cnt -> set of primes with cntPrime == cnt

  const addToBucket = (c, q) => {
    let s = buckets.get(c);
    if (!s) buckets.set(c, (s = new Set()));
    s.add(q);
  };
  const removeFromBucket = (c, q) => {
    const s = buckets.get(c);
    s.delete(q);
    if (s.size === 0) buckets.delete(c);
  };

  const activate = (v) => {
    m++;
    let x = v;
    while (x > 1) {
      const q = spf[x];
      while (x % q === 0) x /= q;
      const c = cntPrime[q];
      if (c > 0) removeFromBucket(c, q);
      cntPrime[q] = c + 1;
      addToBucket(c + 1, q);
    }
    for (const d of divisorsOf(v)) cntDiv[d]++;
  };

  const deactivate = (v) => {
    m--;
    let x = v;
    while (x > 1) {
      const q = spf[x];
      while (x % q === 0) x /= q;
      const c = cntPrime[q];
      removeFromBucket(c, q);
      cntPrime[q] = c - 1;
      if (c > 1) addToBucket(c - 1, q);
    }
    for (const d of divisorsOf(v)) cntDiv[d]--;
  };

  for (const num of nums) {
    if (num % p === 0) activate(num / p);
  }

  let ans = 0;
  for (const [idx, val] of queries) {
    const old = nums[idx];
    if (old % p === 0) deactivate(old / p);
    nums[idx] = val;
    if (val % p === 0) activate(val / p);

    let yes = false;
    if (m > 0 && !buckets.has(m)) {
      if (m < n) {
        yes = true;
      } else {
        const qSet = buckets.get(m - 1); // primes covering exactly m-1 active values
        if (!qSet) {
          yes = true;
        } else {
          let rad = 1;
          for (const q of qSet) rad *= q;
          yes = rad < MAXV && cntDiv[rad] > 0;
        }
      }
    }
    if (yes) ans++;
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(countGoodSubseq([4, 8, 12, 16], 2, [[0, 3], [2, 6]])); // 1
console.log(countGoodSubseq([4, 5, 7, 8], 3, [[0, 6], [1, 9], [2, 3]])); // 2
console.log(countGoodSubseq([5, 7, 9], 2, [[1, 4], [2, 8]])); // 0
console.log(countGoodSubseq([2, 6], 2, [[0, 2]])); // 1 ([2] alone has gcd 2)
console.log(countGoodSubseq([6, 10, 15], 1, [[0, 7], [0, 6]])); // 1 (first yes, restored: rad=30 uncovered)
console.log(countGoodSubseq([4, 6], 2, [[0, 6]])); // 0 ([6,6]: every pair/subset gcd > 2)
