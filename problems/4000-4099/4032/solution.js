/*
 * @lc app=leetcode id=4032 lang=javascript
 *
 * [4032] Longest Subarray With at Most K Distinct Prime Factors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestSubarray = function(nums, k) {
  const MAXV = 100000;
  const spf = Array(MAXV + 1);
  for (let i = 0; i <= MAXV; i++) spf[i] = i;
  for (let i = 2; i * i <= MAXV; i++) {
    if (spf[i] === i) {
      for (let j = i * i; j <= MAXV; j += i) {
        if (spf[j] === j) spf[j] = i;
      }
    }
  }
  const primesOf = (v) => {
    const ps = [];
    let x = v;
    while (x > 1) {
      const p = spf[x];
      ps.push(p);
      while (x % p === 0) x /= p;
    }
    return ps;
  };

  const cnt = new Map();
  let kinds = 0;
  let ans = 0;
  let l = 0;
  for (let r = 0; r < nums.length; r++) {
    for (const p of primesOf(nums[r])) {
      const c = (cnt.get(p) || 0) + 1;
      cnt.set(p, c);
      if (c === 1) kinds++;
    }
    while (kinds > k) {
      for (const p of primesOf(nums[l])) {
        const c = cnt.get(p) - 1;
        cnt.set(p, c);
        if (c === 0) kinds--;
      }
      l++;
    }
    ans = Math.max(ans, r - l + 1);
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(longestSubarray([7, 6, 10, 12, 11], 3) === 3);
console.log(longestSubarray([4, 6, 9, 18], 4) === 4);
console.log(longestSubarray([6, 10, 15], 2) === 1);
console.log(longestSubarray([6], 1) === 0);
console.log(longestSubarray([6], 2) === 1);
console.log(longestSubarray([2, 4, 8, 16], 1) === 4);
console.log(longestSubarray([2, 3, 5, 7], 2) === 2);
console.log(longestSubarray([100000], 4) === 0);
