/*
 * @lc app=leetcode.cn id=3934 lang=javascript
 *
 * [3934] 最短唯一子数组
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
  // bases kept small so every intermediate product stays < 2^53
  const B1 = 131 + Math.floor(Math.random() * 8000);
  const B2 = 131 + Math.floor(Math.random() * 8000);
  const pw1 = Array(n + 1).fill(1);
  const pw2 = Array(n + 1).fill(1);
  for (let i = 1; i <= n; i++) {
    pw1[i] = pw1[i - 1] * B1 % M1;
    pw2[i] = pw2[i - 1] * B2 % M2;
  }
  // f(len): does some length-len subarray occur exactly once?
  const hasUnique = (len) => {
    const counts = new Map();
    let h1 = 0;
    let h2 = 0;
    for (let i = 0; i < n; i++) {
      h1 = (h1 * B1 + nums[i]) % M1;
      h2 = (h2 * B2 + nums[i]) % M2;
      if (i >= len) {
        h1 = (h1 - nums[i - len] * pw1[len] % M1 + M1) % M1;
        h2 = (h2 - nums[i - len] * pw2[len] % M2 + M2) % M2;
      }
      if (i >= len - 1) {
        const key = h1 + '_' + h2;
        counts.set(key, (counts.get(key) || 0) + 1);
      }
    }
    for (const c of counts.values()) if (c === 1) return true;
    return false;
  };
  // f is monotone: a unique subarray can be extended in at least one
  // direction while staying unique (the only non-extendable case is len=n,
  // where the whole array is trivially unique). Binary search minimal len.
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
console.log(smallestUniqueSubarray([3, 3, 3]) === 3); // 1
console.log(smallestUniqueSubarray([2, 1, 2, 3, 3]) === 1); // 2
console.log(smallestUniqueSubarray([1, 1, 2, 2, 1]) === 2); // 3
console.log(smallestUniqueSubarray([1]) === 1); // 4
console.log(smallestUniqueSubarray(Array(8).fill(1)) === 8); // 5
console.log(smallestUniqueSubarray([1, 2, 1, 2, 1, 2]) === 4); // 6

// brute-force cross check on small random arrays
const brute = (nums) => {
  const n = nums.length;
  for (let len = 1; len <= n; len++) {
    const cnt = new Map();
    for (let l = 0; l + len <= n; l++) {
      const k = nums.slice(l, l + len).join(',');
      cnt.set(k, (cnt.get(k) || 0) + 1);
    }
    for (const c of cnt.values()) if (c === 1) return len;
  }
  return n;
};
for (let t = 0; t < 200; t++) {
  const m = 1 + Math.floor(Math.random() * 30);
  const arr = Array.from({ length: m }, () => 1 + Math.floor(Math.random() * 3));
  const a = smallestUniqueSubarray(arr);
  const b = brute(arr);
  if (a !== b) {
    console.log('MISMATCH', arr.join(','), 'got', a, 'want', b);
    break;
  }
}
console.log('brute cross-check done');
