/*
 * @lc app=leetcode id=3920 lang=javascript
 *
 * [3920] Maximize Fixed Points After Deletions
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFixedPoints = function(nums) {
  const n = nums.length;
  // candidate fixed element at position i: nums[i] must satisfy i >= nums[i] (key >= 0)
  const idxs = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] >= 0 && i - nums[i] >= 0) idxs.push(i);
  }
  if (!idxs.length) return 0;
  // compress values
  const vals = idxs.map((i) => nums[i]).sort((a, b) => a - b);
  const comp = new Map();
  let cv = 0;
  for (const v of vals) {
    if (!comp.has(v)) comp.set(v, ++cv);
  }
  // sort candidates by key (i - nums[i]) ascending, group equal keys
  idxs.sort((a, b) => a - nums[a] - (b - nums[b]));
  const C = cv + 1;
  const tree = Array(C + 1).fill(0);
  const query = (x) => {
    let r = 0;
    for (let i = x; i > 0; i -= i & -i) if (tree[i] > r) r = tree[i];
    return r;
  };
  const update = (x, v) => {
    for (let i = x; i <= C; i += i & -i) if (v > tree[i]) tree[i] = v;
  };
  let ans = 0;
  for (const i of idxs) {
    const c = comp.get(nums[i]);
    const f = 1 + query(c - 1); // values strictly less, key <= current (sort order)
    update(c, f);
    if (f > ans) ans = f;
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(maxFixedPoints([0, 2, 1]) === 2);
console.log(maxFixedPoints([3, 1, 2]) === 2);
console.log(maxFixedPoints([1, 0, 1, 2]) === 3);
console.log(maxFixedPoints([5, 0, 1, 2]) === 3);
console.log(maxFixedPoints([5]) === 0);
console.log(maxFixedPoints([0]) === 1);
console.log(maxFixedPoints([0, 0, 2, 2]) === 2);

// brute cross-check
function brute(nums) {
  const n = nums.length;
  let best = 0;
  for (let mask = 0; mask < (1 << n); mask++) {
    let cnt = 0;
    let idx = 0;
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        if (nums[i] === idx) cnt++;
        idx++;
      }
    }
    if (cnt > best) best = cnt;
  }
  return best;
}
let seed = 17;
const rnd = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) % 8;
let ok = true;
for (let t = 0; t < 3000; t++) {
  const arr = Array.from({ length: 1 + t % 11 }, rnd);
  const a = maxFixedPoints(arr);
  const b = brute(arr);
  if (a !== b) { ok = false; console.log('MISMATCH', JSON.stringify(arr), a, b); break; }
}
console.log(ok);
