/*
 * @lc app=leetcode id=3942 lang=javascript
 *
 * [3942] Minimum Operations to Sort
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  const n = nums.length;
  // case D: a[i] - i constant mod n -> pure rotations, cost (n - k1) % n
  let k1 = (nums[0] - 0) % n;
  if (k1 < 0) k1 += n;
  let isD = true;
  for (let i = 0; i < n && isD; i++) {
    let d = (nums[i] - i) % n;
    if (d < 0) d += n;
    if (d !== k1) isD = false;
  }
  // case S: a[i] + i constant mod n
  let c = (nums[0] + 0) % n;
  let isS = true;
  for (let i = 0; i < n && isS; i++) {
    if ((nums[i] + i) % n !== c) isS = false;
  }
  const costR = (r) => (r === 0 ? 0 : Math.min(r, 2 + (n - r)));
  let ans = Infinity;
  if (isD) {
    ans = Math.min(ans, costR((n - k1) % n));
  }
  if (isS) {
    let k = (c - (n - 1)) % n;
    if (k < 0) k += n;
    ans = Math.min(ans, 1 + Math.min(k, (n - k) % n));
  }
  return ans === Infinity ? -1 : ans;
};
// @lc code=end

// TEST:
console.log(minOperations([0, 2, 1]) === 2);
console.log(minOperations([1, 0, 2]) === 2);
console.log(minOperations([2, 0, 1, 3]) === -1);
console.log(minOperations([0, 1, 2]) === 0);
console.log(minOperations([2, 0, 1]) === 1);
console.log(minOperations([1, 2, 0]) === 2);
console.log(minOperations([2, 1, 0]) === 1);
console.log(minOperations([3, 2, 1, 0]) === 1);

// brute cross-check with BFS over states (small n)
function brute(arr) {
  const n = arr.length;
  const key = (a) => a.join(',');
  const start = arr.slice();
  const sorted = Array.from({ length: n }, (_, i) => i);
  const target = key(sorted);
  if (key(start) === target) return 0;
  const seen = new Set([key(start)]);
  let queue = [start];
  let steps = 0;
  while (queue.length && steps < 20) {
    steps++;
    const next = [];
    for (const cur of queue) {
      const rot = cur.slice(1).concat(cur[0]);
      const rev = cur.slice().reverse();
      for (const cand of [rot, rev]) {
        const k2 = key(cand);
        if (k2 === target) return steps;
        if (!seen.has(k2)) {
          seen.add(k2);
          next.push(cand);
        }
      }
    }
    queue = next;
  }
  return -1;
}
let seed = 3;
let ok = true;
for (let t = 0; t < 500; t++) {
  const n = 2 + t % 6;
  const perm = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    const j = seed % (i + 1);
    [perm[i], perm[j]] = [perm[j], perm[i]];
  }
  const a = minOperations(perm.slice());
  const b = brute(perm.slice());
  if (a !== b) { ok = false; console.log('MISMATCH', JSON.stringify(perm), a, b); break; }
}
console.log(ok);
