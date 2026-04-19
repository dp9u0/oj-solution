/*
 * @lc app=leetcode id=3266 lang=javascript
 *
 * [3266] Final Array State After K Multiplication Operations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
  const MOD = BigInt(1e9 + 7);
  const mul = BigInt(multiplier);

  if (multiplier === 1) {
    return nums.map(x => x % Number(MOD));
  }

  const n = nums.length;
  // Min heap: [value, index]
  const heap = nums.map((v, i) => [BigInt(v), i]);
  const siftUp = (i) => {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (heap[p][0] < heap[i][0] || (heap[p][0] === heap[i][0] && heap[p][1] < heap[i][1])) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  };
  const siftDown = (i) => {
    while (true) {
      let s = i, l = 2*i+1, r = 2*i+2;
      if (l < heap.length && (heap[l][0] < heap[s][0] || (heap[l][0] === heap[s][0] && heap[l][1] < heap[s][1]))) s = l;
      if (r < heap.length && (heap[r][0] < heap[s][0] || (heap[r][0] === heap[s][0] && heap[r][1] < heap[s][1]))) s = r;
      if (s === i) break;
      [heap[s], heap[i]] = [heap[i], heap[s]];
      i = s;
    }
  };
  for (let i = heap.length - 1; i >= 0; i--) siftDown(i);

  // Simulate until the min has been multiplied enough or k runs out
  // After n rounds, every element has been multiplied at least once
  const maxOps = Math.min(k, n * 32); // log2(10^9) ~ 30, safe bound
  for (let op = 0; op < maxOps; op++) {
    heap[0][0] *= mul;
    siftDown(0);
  }
  k -= maxOps;

  if (k <= 0) {
    const ans = new Array(n);
    for (const [v, i] of heap) ans[i] = Number(v % MOD);
    return ans;
  }

  // Now distribute remaining k rounds evenly
  const cnt = new Int32Array(n);
  for (const [v, i] of heap) cnt[i] = 0;

  // Sort by value to determine round-robin order
  heap.sort((a, b) => a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : a[1] - b[1]);
  const base = Math.floor(k / n);
  const extra = k % n;
  for (let i = 0; i < n; i++) {
    cnt[heap[i][1]] = base + (i < extra ? 1 : 0);
  }

  const powMod = (base, exp) => {
    let r = 1n, b = base;
    while (exp > 0) {
      if (exp & 1) r = r * b % MOD;
      b = b * b % MOD;
      exp >>= 1;
    }
    return r;
  };

  const ans = new Array(n);
  for (const [v, i] of heap) {
    ans[i] = Number(v % MOD * powMod(mul, cnt[i]) % MOD);
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(getFinalState([2,1,3,5,6], 5, 2))); // [8,4,6,5,6]
console.log(JSON.stringify(getFinalState([100000,2000], 2, 1000000))); // [999999307,999999993]
console.log(JSON.stringify(getFinalState([1,2], 3, 3))); // [9,6]
console.log(JSON.stringify(getFinalState([1,1], 2, 2))); // [2,2]
console.log(JSON.stringify(getFinalState([5,3,1], 1, 2))); // [5,3,2]
