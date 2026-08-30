/*
 * @lc app=leetcode id=3960 lang=javascript
 *
 * [3960] Longest Frequency Balanced Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var getLength = function(nums) {
  const n = nums.length;
  let ans = 1;
  for (let l = 0; l < n; l++) {
    const cnt = new Map();
    const freqOfFreq = new Map();
    for (let r = l; r < n; r++) {
      const v = nums[r];
      const old = cnt.get(v) || 0;
      cnt.set(v, old + 1);
      if (old > 0) freqOfFreq.set(old, freqOfFreq.get(old) - 1);
      const now = old + 1;
      freqOfFreq.set(now, (freqOfFreq.get(now) || 0) + 1);
      const len = r - l + 1;
      if (len > ans && balanced(freqOfFreq, cnt.size, len)) {
        ans = len;
      }
    }
  }
  return ans;
};

function balanced(freqOfFreq, distinct, len) {
  if (distinct === 1) return true;
  // need exactly two freq keys f and 2f, both positive counts
  let keys = [];
  for (const [f, c] of freqOfFreq) {
    if (c > 0) keys.push(f);
    if (keys.length > 2) return false;
  }
  if (keys.length !== 2) return false;
  const [a, b] = keys[0] < keys[1] ? [keys[0], keys[1]] : [keys[1], keys[0]];
  return 2 * a === b;
}
// @lc code=end

// TEST:
console.log(getLength([1, 2, 2, 1, 2, 3, 3, 3]) === 5);
console.log(getLength([1]) === 1);
console.log(getLength([1, 1]) === 2);
console.log(getLength([1, 2]) === 1);
console.log(getLength([1, 2, 2, 1]) === 3);

// brute
function brute(nums) {
  const n = nums.length;
  let best = 1;
  for (let l = 0; l < n; l++) {
    for (let r = l; r < n; r++) {
      const cnt = new Map();
      for (let i = l; i <= r; i++) cnt.set(nums[i], (cnt.get(nums[i]) || 0) + 1);
      const freqs = [...cnt.values()];
      if (freqs.length === 1) { best = Math.max(best, r - l + 1); continue; }
      const uniq = [...new Set(freqs)];
      if (uniq.length === 2 && 2 * Math.min(...uniq) === Math.max(...uniq)) best = Math.max(best, r - l + 1);
    }
  }
  return best;
}
let seed = 8;
const rnd = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) % 5 + 1;
let ok = true;
for (let t = 0; t < 300; t++) {
  const arr = Array.from({ length: 1 + t % 12 }, rnd);
  const a = getLength(arr.slice());
  const b = brute(arr.slice());
  if (a !== b) { ok = false; console.log('MISMATCH', JSON.stringify(arr), a, b); break; }
}
console.log(ok);
