/*
 * @lc app=leetcode.cn id=LCP 81 lang=javascript
 *
 * [LCP 81] 与非的谜题
 */

// @lc code=start
/**
 * Per-bit Fenwick tracking the positions where that bit is 0.
 * Supports point update and "rightmost zero" lookup.
 */
function Fenwick(size) {
  const tree = new Array(size + 1).fill(0);
  let highestPow = 1;
  while (highestPow * 2 <= size) highestPow *= 2;
  return {
    add(i, delta) { // i is 1-indexed
      for (; i <= size; i += i & (-i)) tree[i] += delta;
    },
    // find largest index p in [1..size] with prefix sum < count; used to find
    // rightmost 1. Return 1-indexed rightmost position where cumulative count
    // increases, or -1 if there are none.
    rightmostOne(total) {
      if (total <= 0) return -1;
      let idx = 0;
      let acc = 0;
      for (let step = highestPow; step > 0; step >>= 1) {
        const ni = idx + step;
        if (ni <= size && acc + tree[ni] < total) {
          acc += tree[ni];
          idx = ni;
        }
      }
      return idx + 1;
    },
  };
}

/**
 * @param {number} k
 * @param {number[]} arr
 * @param {number[][]} operations
 * @return {number}
 */
var getNandResult = function(k, arr, operations) {
  const n = arr.length;
  const MASK = (1 << k) - 1; // k <= 30 so this is within 31 bits (safe)

  // fw[b] = Fenwick over positions i (1-indexed) where bit b of arr[i-1] is 0.
  const fw = [];
  const zeroCount = new Array(k).fill(0);
  for (let b = 0; b < k; b++) {
    fw.push(Fenwick(n));
    for (let i = 0; i < n; i++) {
      if (((arr[i] >> b) & 1) === 0) {
        fw[b].add(i + 1, 1);
        zeroCount[b]++;
      }
    }
  }

  let result = 0; // XOR accumulator
  const parityAllOnes = (x) => ((x * n) & 1); // == (x*n) mod 2, x*n exact (< 2^53)

  for (const op of operations) {
    if (op[0] === 0) {
      const x = op[1], y = op[2];
      const oldVal = arr[x];
      if (oldVal !== y) {
        for (let b = 0; b < k; b++) {
          const oldBit = (oldVal >> b) & 1;
          const newBit = (y >> b) & 1;
          if (oldBit !== newBit) {
            // zero transitions: from 1->0 add a zero; from 0->1 remove a zero
            if (newBit === 0) { fw[b].add(x + 1, 1); zeroCount[b]++; }
            else { fw[b].add(x + 1, -1); zeroCount[b]--; }
          }
        }
        arr[x] = y;
      }
    } else {
      const x = op[1], y = op[2];
      let val = 0;
      for (let b = 0; b < k; b++) {
        const yBit = (y >> b) & 1;
        let rb;
        if (zeroCount[b] === 0) {
          // the whole cycle has bit b = 1 everywhere: pure flip per step
          rb = yBit ^ parityAllOnes(x);
        } else {
          // find the last position where bit b is 0 (0-indexed)
          const pos1 = fw[b].rightmostOne(zeroCount[b]); // 1-indexed
          const lastZero = pos1 - 1;
          // trailing ones after last zero within one cycle
          const trail = (n - 1) - lastZero;
          rb = 1 ^ (trail & 1);
        }
        val |= (rb << b);
      }
      result ^= val & MASK;
    }
  }
  return result;
};
// @lc code=end

// TEST:
const assert = require('assert');

// brute reference: direct step-by-step NAND simulation with proper k-bit mask.
function brute(k, arr, operations) {
  const MASK = (1 << k) - 1;
  const n = arr.length;
  let curArr = arr.slice();
  let xor = 0;
  for (const op of operations) {
    if (op[0] === 0) curArr[op[1]] = op[2];
    else {
      const x = op[1], y = op[2];
      let v = y;
      const total = x * n;
      for (let i = 0; i < total; i++) {
        v = (~(v & curArr[i % n])) & MASK;
      }
      xor ^= v;
    }
  }
  return xor;
}

// examples
assert.strictEqual(getNandResult(3, [1, 2], [[1, 2, 3], [0, 0, 3], [1, 2, 2]]), 2);
assert.strictEqual(getNandResult(4, [4, 6, 4, 7, 10, 9, 11], [[1, 5, 7], [1, 7, 14], [0, 6, 7], [1, 6, 5]]), 9);

// hand cases
// all-ones cycle: bit flips each NAND => y after x*n NANDs
assert.strictEqual(getNandResult(3, [7, 7], [[1, 1, 5]]), brute(3, [7, 7], [[1, 1, 5]]));
// single element cycle, zero present
assert.strictEqual(getNandResult(2, [1], [[1, 3, 0]]), brute(2, [1], [[1, 3, 0]]));

// randomized cross-check vs brute (small enough total x*n)
let seed = 81001;
function rnd() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }
for (let t = 0; t < 1200; t++) {
  const k = 1 + Math.floor(rnd() * 5);
  const M = (1 << k);
  const n = 1 + Math.floor(rnd() * 5);
  const arr = [];
  for (let i = 0; i < n; i++) arr.push(Math.floor(rnd() * M));
  const Q = 1 + Math.floor(rnd() * 12);
  const ops = [];
  for (let q = 0; q < Q; q++) {
    if (rnd() < 0.35) {
      const x = Math.floor(rnd() * n);
      const y = Math.floor(rnd() * M);
      ops.push([0, x, y]);
    } else {
      const x = 1 + Math.floor(rnd() * 4); // small so brute total is tiny
      const y = Math.floor(rnd() * M);
      ops.push([1, x, y]);
    }
  }
  const got = getNandResult(k, arr.slice(), ops);
  const exp = brute(k, arr.slice(), ops);
  assert.strictEqual(got, exp, `mismatch k=${k} arr=${JSON.stringify(arr)} ops=${JSON.stringify(ops)} got=${got} exp=${exp}`);
}

// larger x (still within direct sim budget) for stronger check
for (let t = 0; t < 300; t++) {
  const k = 1 + Math.floor(rnd() * 6);
  const M = (1 << k);
  const n = 1 + Math.floor(rnd() * 3);
  const arr = [];
  for (let i = 0; i < n; i++) arr.push(Math.floor(rnd() * M));
  const ops = [];
  const Q = 1 + Math.floor(rnd() * 6);
  for (let q = 0; q < Q; q++) {
    if (rnd() < 0.4) ops.push([0, Math.floor(rnd() * n), Math.floor(rnd() * M)]);
    else ops.push([1, 1 + Math.floor(rnd() * 200), Math.floor(rnd() * M)]); // x*n up to 600 steps
  }
  const got = getNandResult(k, arr.slice(), ops);
  const exp = brute(k, arr.slice(), ops);
  assert.strictEqual(got, exp, `mismatch2 k=${k} arr=${JSON.stringify(arr)} ops=${JSON.stringify(ops)} got=${got} exp=${exp}`);
}

console.log('All tests passed!');
console.log('ex1 =', getNandResult(3, [1, 2], [[1, 2, 3], [0, 0, 3], [1, 2, 2]]));
console.log('ex2 =', getNandResult(4, [4, 6, 4, 7, 10, 9, 11], [[1, 5, 7], [1, 7, 14], [0, 6, 7], [1, 6, 5]]));
