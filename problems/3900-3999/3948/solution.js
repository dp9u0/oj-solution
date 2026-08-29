/*
 * @lc app=leetcode id=3948 lang=javascript
 *
 * [3948] Lexicographically Maximum MEX Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maximumMEX = function(nums) {
  const n = nums.length;
  // suffix mex
  const suffixMex = Array(n + 1).fill(0);
  const cnt = Array(n + 2).fill(0);
  let mex = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] <= n + 1) cnt[nums[i]]++;
    while (cnt[mex] > 0) mex++;
    suffixMex[i] = mex;
  }

  const res = [];
  let start = 0;
  while (start < n) {
    const target = suffixMex[start];
    const seen = new Set();
    let cur = 0;
    let i = start;
    for (; i < n; i++) {
      seen.add(nums[i]);
      while (seen.has(cur)) cur++;
      if (cur === target) break;
    }
    res.push(target);
    start = i + 1;
  }
  return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(maximumMEX([0, 1, 0])) === JSON.stringify([2, 1]));
console.log(JSON.stringify(maximumMEX([1, 0, 2])) === JSON.stringify([3]));
console.log(JSON.stringify(maximumMEX([3, 1])) === JSON.stringify([0, 0]));
console.log(JSON.stringify(maximumMEX([0])) === JSON.stringify([1]));
console.log(JSON.stringify(maximumMEX([5])) === JSON.stringify([0]));
console.log(JSON.stringify(maximumMEX([2, 3])) === JSON.stringify([0, 0]));

// brute-force cross-check (problem-order comparator: element-wise, longer wins on tie)
const mexOf = (arr) => {
  const s = new Set(arr);
  let m = 0;
  while (s.has(m)) m++;
  return m;
};
const lexGreater = (a, b) => {
  const len = Math.min(a.length, b.length);
  for (let i = 0; i < len; i++) {
    if (a[i] !== b[i]) return a[i] > b[i];
  }
  return a.length > b.length;
};
function brute(nums) {
  let best = null;
  const rec = (rest, acc) => {
    if (rest.length === 0) {
      if (best === null || lexGreater(acc, best)) best = acc.slice();
      return;
    }
    for (let k = 1; k <= rest.length; k++) {
      acc.push(mexOf(rest.slice(0, k)));
      rec(rest.slice(k), acc);
      acc.pop();
    }
  };
  rec(nums, []);
  return best;
}
let seed = 31;
const rnd = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) % 5;
let ok = true;
for (let t = 0; t < 500; t++) {
  const arr = Array.from({ length: 1 + t % 8 }, rnd);
  const a = maximumMEX(arr);
  const b = brute(arr);
  if (JSON.stringify(a) !== JSON.stringify(b)) { ok = false; console.log('MISMATCH', JSON.stringify(arr), JSON.stringify(a), JSON.stringify(b)); break; }
}
console.log(ok);
