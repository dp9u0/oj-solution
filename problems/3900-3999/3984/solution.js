/*
 * @lc app=leetcode id=3984 lang=javascript
 *
 * [3984] Divisible Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var divisibleGame = function (nums) {
  const MOD = 1000000007;
  const n = nums.length;

  // prefix sums: S[i] = nums[0] + ... + nums[i-1]
  const S = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) S[i + 1] = S[i] + nums[i];

  // enumerate divisors (> 1) of every element, group divisible positions by k
  const positionsByK = new Map();
  for (let i = 0; i < n; i++) {
    const v = nums[i];
    for (let d = 2; d * d <= v; d++) {
      if (v % d !== 0) continue;
      for (const k of d * d === v ? [d] : [d, v / d]) {
        if (!positionsByK.has(k)) positionsByK.set(k, []);
        positionsByK.get(k).push(i);
      }
    }
    if (v > 1) {
      // k = v itself always divides v
      if (!positionsByK.has(v)) positionsByK.set(v, []);
      positionsByK.get(v).push(i);
    }
  }

  // no element has a divisor > 1 (all ones): best is k = 2 with diff -1
  if (positionsByK.size === 0) return ((-1 * 2) % MOD + MOD) % MOD;

  let bestDiff = -Infinity;
  let bestK = Infinity;
  for (const [k, pos] of positionsByK) {
    // compressed Kadane: [v_1, -g_1, v_2, -g_2, ..., v_m]
    // gaps between divisible positions hold only negative transformed values
    let best = -Infinity;
    let cur = -Infinity;
    for (let j = 0; j < pos.length; j++) {
      if (j > 0) {
        const gap = S[pos[j]] - S[pos[j - 1] + 1];
        cur = Math.max(-gap, cur - gap);
        if (cur > best) best = cur;
      }
      const v = nums[pos[j]];
      cur = Math.max(v, cur + v);
      if (cur > best) best = cur;
    }
    if (best > bestDiff || (best === bestDiff && k < bestK)) {
      bestDiff = best;
      bestK = k;
    }
  }

  return ((bestDiff * bestK) % MOD + MOD) % MOD;
};
// @lc code=end

// TEST:
console.log(divisibleGame([1, 4, 6, 8])); // 36 (k=2, diff=18)
console.log(divisibleGame([2, 1, 2])); // 6 (k=2, diff=3)
console.log(divisibleGame([1])); // 1000000005 (k=2, diff=-1 -> -2 mod)
console.log(divisibleGame([1, 1, 1])); // 1000000005 (k=2, diff=-1 -> -2 mod)
console.log(divisibleGame([5])); // 25 (k=5, diff=5)
console.log(divisibleGame([3, 9])); // 36 (k=3, diff=12)
console.log(divisibleGame([9, 3, 5])); // 36 (k=3, diff=12)
console.log(divisibleGame([7, 7, 7])); // 147 (k=7, diff=21)
console.log(divisibleGame([2, 3, 5, 7])); // 49 (candidates k=2,3,5,7; diffs 2,3,5,7 -> best 7*7=49)
