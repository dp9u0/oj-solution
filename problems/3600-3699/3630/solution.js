/*
 * @lc app=leetcode id=3630 lang=javascript
 *
 * [3630] Partition Array for Maximum XOR and AND
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeXorAndXor = function (nums) {
  const n = nums.length;
  const total = 1 << n;
  const full = total - 1;

  // andOf[mask] / xorOf[mask]: AND / XOR of elements in subset mask
  const andOf = new Int32Array(total);
  const xorOf = new Int32Array(total);
  andOf[0] = -1; // identity for AND
  for (let mask = 1; mask < total; mask++) {
    const low = mask & -mask;
    const idx = 31 - Math.clz32(low);
    const prev = mask ^ low;
    andOf[mask] = andOf[prev] & nums[idx];
    xorOf[mask] = xorOf[prev] ^ nums[idx];
  }
  const totalXor = xorOf[full];

  // For fixed B: R = complement, s = XOR(R).
  // XOR(A) + XOR(C) = x + (s ^ x) = s + 2 * (x & ~s), where x = XOR(A) ranges
  // over span(R). Since (XOR of subset) & ~s == XOR of (nums[j] & ~s), the
  // reachable (x & ~s) values form span({nums[j] & ~s}), so build a linear
  // basis over the masked values and greedily extract the maximum.
  const basis = new Int32Array(30);
  let best = 0;
  for (let mask = 0; mask < total; mask++) {
    const andB = mask === 0 ? 0 : andOf[mask]; // AND of empty B is 0
    const s = totalXor ^ xorOf[mask];
    basis.fill(0);
    for (let j = full ^ mask; j; j &= j - 1) {
      let v = nums[31 - Math.clz32(j & -j)] & ~s;
      while (v) {
        const b = 31 - Math.clz32(v);
        if (basis[b] === 0) {
          basis[b] = v;
          break;
        }
        v ^= basis[b];
      }
    }
    let x = 0;
    for (let b = 29; b >= 0; b--) {
      if ((x ^ basis[b]) > x) x ^= basis[b];
    }
    const val = andB + s + 2 * x;
    if (val > best) best = val;
  }
  return best;
};
// @lc code=end

// TEST:
// Helper: brute force reference (try all 3^n assignments)
function brute(nums) {
  const n = nums.length;
  let best = 0;
  for (let state = 0; state < 3 ** n; state++) {
    let a = 0, b = -1, c = 0;
    let t = state;
    for (let i = 0; i < n; i++) {
      const g = t % 3;
      t = Math.floor(t / 3);
      if (g === 0) a ^= nums[i];
      else if (g === 1) b &= nums[i];
      else c ^= nums[i];
    }
    if (b === -1) b = 0;
    if (a + b + c > best) best = a + b + c;
  }
  return best;
}

console.log(maximizeXorAndXor([2, 3]) === 5); // 5
console.log(maximizeXorAndXor([1, 3, 2]) === 6); // 6
console.log(maximizeXorAndXor([2, 3, 6, 7]) === 15); // 15
console.log(maximizeXorAndXor([7]) === 7); // single element: best A={7} -> 7
console.log(maximizeXorAndXor([1000000000]) === 1000000000); // max value single
console.log(maximizeXorAndXor([1, 1, 1, 1, 1]) === brute([1, 1, 1, 1, 1]));
console.log(maximizeXorAndXor([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]) === brute([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5])); // n=19 duplicates
// randomized cross-check against brute force
{
  let ok = true;
  for (let t = 0; t < 300; t++) {
    const n = 1 + Math.floor(Math.random() * 9);
    const nums = Array.from({ length: n }, () => 1 + Math.floor(Math.random() * 127));
    if (maximizeXorAndXor(nums) !== brute(nums)) {
      ok = false;
      console.log('MISMATCH', nums, maximizeXorAndXor(nums), brute(nums));
      break;
    }
  }
  console.log(ok);
}
// worst-case timing n=19
{
  const big = Array.from({ length: 19 }, (_, i) => (i * 2654435761) % 1000000000 + 1);
  const t0 = Date.now();
  const r = maximizeXorAndXor(big);
  console.log(`n=19 answer=${r} time=${Date.now() - t0}ms`);
}
