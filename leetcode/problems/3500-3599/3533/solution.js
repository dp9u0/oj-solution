/*
 * @lc app=leetcode id=3533 lang=javascript
 *
 * [3533] Concatenated Divisibility
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var concatenatedDivisibility = function(nums, k) {
  const n = nums.length;
  nums.sort((a, b) => a - b);

  // Precompute digit lengths and pow10 mod k for each number
  const digits = nums.map(x => String(x).length);
  const pow10Mod = digits.map(d => {
    let p = 1;
    for (let i = 0; i < d; i++) p = (p * 10) % k;
    return p;
  });

  // memo[mask][rem] = true if this state was tried and failed
  const memo = Array.from({ length: 1 << n }, () => new Uint8Array(k));
  const result = [];

  const dfs = (mask, rem) => {
    if (mask === (1 << n) - 1) {
      return rem === 0;
    }
    if (memo[mask][rem]) return false;

    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) continue;
      // Skip duplicates: if same value as previous unused, skip
      if (i > 0 && nums[i] === nums[i - 1] && !(mask & (1 << (i - 1)))) continue;

      const newRem = (rem * pow10Mod[i] + nums[i] % k) % k;
      result.push(nums[i]);
      if (dfs(mask | (1 << i), newRem)) return true;
      result.pop();
    }

    memo[mask][rem] = 1;
    return false;
  };

  return dfs(0, 0) ? result : [];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(concatenatedDivisibility([3, 12, 45], 5))); // [3,12,45]
console.log(JSON.stringify(concatenatedDivisibility([10, 5], 10))); // [5,10]
console.log(JSON.stringify(concatenatedDivisibility([1, 2, 3], 5))); // []
