/*
 * @lc app=leetcode id=3934 lang=javascript
 *
 * [3934] Minimum Length of Unique Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestUniqueSubarray = function(nums) {
  const n = nums.length;
  const M1 = 1000000007;
  const M2 = 998244353;
  const B = 131;
  const powB1 = Array(n + 1).fill(1);
  const powB2 = Array(n + 1).fill(1);
  for (let i = 1; i <= n; i++) {
    powB1[i] = powB1[i - 1] * B % M1;
    powB2[i] = powB2[i - 1] * B % M2;
  }
  const hasUnique = (L) => {
    let h1 = 0;
    let h2 = 0;
    const counts = new Map();
    for (let i = 0; i < n; i++) {
      h1 = (h1 * B + nums[i]) % M1;
      h2 = (h2 * B + nums[i]) % M2;
      if (i >= L) {
        h1 = (h1 - nums[i - L] * powB1[L] % M1 + M1) % M1;
        h2 = (h2 - nums[i - L] * powB2[L] % M2 + M2) % M2;
      }
      if (i >= L - 1) {
        const key = h1 * 4000000000 + h2;
        counts.set(key, (counts.get(key) || 0) + 1);
      }
    }
    for (const c of counts.values()) if (c === 1) return true;
    return false;
  };
  let lo = 1;
  let hi = n;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (hasUnique(mid)) hi = mid;
    else lo = mid + 1;
  }
  return lo;
};
// @lc code=end

// TEST:
console.log(smallestUniqueSubarray([3, 3, 3]) === 3);
console.log(smallestUniqueSubarray([2, 1, 2, 3, 3]) === 1);
console.log(smallestUniqueSubarray([1]) === 1);
console.log(smallestUniqueSubarray([1, 1, 2, 2]) === 2);
console.log(smallestUniqueSubarray([5, 5, 5, 5, 6]) === 1);

// brute for small n
function brute(nums) {
  const n = nums.length;
  for (let L = 1; L <= n; L++) {
    const m = new Map();
    for (let i = 0; i + L <= n; i++) {
      const k = nums.slice(i, i + L).join(',');
      m.set(k, (m.get(k) || 0) + 1);
    }
    for (const c of m.values()) if (c === 1) return L;
  }
  return n;
}
let seed = 6;
const rnd = () => (seed = (seed * 1103515245 + 12345) & 0x7fffffff) % 3 + 1;
let ok = true;
for (let t = 0; t < 300; t++) {
  const arr = Array.from({ length: 1 + t % 14 }, rnd);
  if (smallestUniqueSubarray(arr.slice()) !== brute(arr.slice())) { ok = false; console.log('MISMATCH', JSON.stringify(arr)); break; }
}
console.log(ok);
