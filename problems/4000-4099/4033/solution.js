/*
 * @lc app=leetcode id=4033 lang=javascript
 *
 * [4033] Find Valid Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var validSubarrays = function(nums, k, queries) {
  const n = nums.length;
  const q = queries.length;
  const maxV = 100001;
  const m0 = new Uint32Array(maxV);
  const m1 = new Uint32Array(maxV);
  let seed = 123456789;
  for (let v = 0; v < maxV; v++) {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    m0[v] = seed >>> 0;
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    m1[v] = seed >>> 0;
  }
  const block = Math.max(1, Math.floor(n / Math.sqrt(Math.max(q, 1))));
  const order = Array.from({ length: q }, (_, i) => i).sort((a, b) => {
    const ba = Math.floor(queries[a][0] / block);
    const bb = Math.floor(queries[b][0] / block);
    if (ba !== bb) return ba - bb;
    return ba % 2 === 0 ? queries[a][1] - queries[b][1] : queries[b][1] - queries[a][1];
  });
  const cnt = new Int32Array(maxV);
  let x0 = 0;
  let x1 = 0;
  let distinct = 0;
  let curL = 0;
  let curR = -1;
  const add = (i) => {
    const v = nums[i];
    const c = cnt[v];
    if (c === 0) distinct++;
    cnt[v] = c + 1;
    x0 = (x0 ^ m0[v]) >>> 0;
    x1 = (x1 ^ m1[v]) >>> 0;
  };
  const remove = (i) => {
    const v = nums[i];
    const c = cnt[v];
    if (c === 1) distinct--;
    cnt[v] = c - 1;
    x0 = (x0 ^ m0[v]) >>> 0;
    x1 = (x1 ^ m1[v]) >>> 0;
  };
  const res = Array(q);
  for (const qi of order) {
    const l = queries[qi][0];
    const r = queries[qi][1];
    while (curL > l) add(--curL);
    while (curR < r) add(++curR);
    while (curL < l) remove(curL++);
    while (curR > r) remove(curR--);
    res[qi] = x0 === 0 && x1 === 0 && distinct === k;
  }
  return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(validSubarrays([1, 2, 2, 1], 2, [[0, 1], [0, 3], [1, 2]])) === JSON.stringify([false, true, false]));
console.log(JSON.stringify(validSubarrays([1, 1], 1, [[0, 1]])) === JSON.stringify([true]));
console.log(JSON.stringify(validSubarrays([1, 2], 2, [[0, 1]])) === JSON.stringify([false]));
console.log(JSON.stringify(validSubarrays([1, 1, 2, 2, 1, 1], 2, [[0, 5], [2, 5], [0, 3]])) === JSON.stringify([true, true, true]));

// brute cross-check
function bruteValid(nums, k, queries) {
  return queries.map(([l, r]) => {
    const cnt = new Map();
    for (let i = l; i <= r; i++) cnt.set(nums[i], (cnt.get(nums[i]) || 0) + 1);
    let allEven = true;
    for (const c of cnt.values()) if (c % 2 !== 0) allEven = false;
    return allEven && cnt.size === k;
  });
}
let seed = 777;
const rnd = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) % 4 + 1;
let ok = true;
for (let t = 0; t < 200; t++) {
  const n = 2 + t % 12;
  const arr = Array.from({ length: n }, rnd);
  const kk = 1 + t % 3;
  const qs = [];
  for (let j = 0; j < 6; j++) {
    const l = (seed = (seed * 1103515245 + 12345) & 0x7fffffff) % n;
    const r = (seed = (seed * 1103515245 + 12345) & 0x7fffffff) % n;
    qs.push([Math.min(l, r), Math.max(l, r)]);
    if (qs[qs.length - 1][0] === qs[qs.length - 1][1]) qs[qs.length - 1][1]++;
    if (qs[qs.length - 1][1] >= n) qs.pop();
  }
  const a = JSON.stringify(validSubarrays(arr, kk, qs));
  const b = JSON.stringify(bruteValid(arr, kk, qs));
  if (a !== b) { ok = false; console.log('MISMATCH', JSON.stringify(arr), kk, JSON.stringify(qs), a, b); break; }
}
console.log(ok);
