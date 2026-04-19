/*
 * @lc app=leetcode id=3671 lang=javascript
 *
 * [3671] Sum of Beautiful Subsequences
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var totalBeauty = function(nums) {
  const MOD = 1e9 + 7;
  const maxVal = Math.max(...nums);
  const n = nums.length;

  // Precompute: for each divisor g, list of values divisible by g (index order)
  const lists = new Map();
  for (let i = 0; i < n; i++) {
    const v = nums[i];
    for (let d = 1; d * d <= v; d++) {
      if (v % d === 0) {
        if (!lists.has(d)) lists.set(d, []);
        lists.get(d).push(v);
        const d2 = v / d;
        if (d2 !== d) {
          if (!lists.has(d2)) lists.set(d2, []);
          lists.get(d2).push(v);
        }
      }
    }
  }

  const exact = new Map();
  let ans = 0;

  const gValues = [...lists.keys()].sort((a, b) => b - a);

  for (const g of gValues) {
    const vals = lists.get(g);
    const range = Math.floor(maxVal / g);

    // BIT for counting increasing subsequences
    const bit = new Int32Array(range + 1);
    const update = (i, v) => {
      while (i <= range) {
        bit[i] = (bit[i] + v) % MOD;
        i += i & (-i);
      }
    };
    const query = (i) => {
      let s = 0;
      while (i > 0) {
        s = (s + bit[i]) % MOD;
        i -= i & (-i);
      }
      return s;
    };

    let f = 0;
    for (const v of vals) {
      const vg = v / g;
      const cnt = (1 + query(vg - 1)) % MOD;
      f = (f + cnt) % MOD;
      update(vg, cnt);
    }

    // Inclusion-exclusion: exact[g] = f[g] - sum of exact[m] for multiples m > g
    let ex = f;
    for (let m = 2 * g; m <= maxVal; m += g) {
      if (exact.has(m)) {
        ex = (ex - exact.get(m) + MOD) % MOD;
      }
    }
    exact.set(g, ex);

    if (ex > 0) {
      ans = (ans + g * ex % MOD) % MOD;
    }
  }

  return ans;
};
// @lc code=end

// TEST:
console.log(totalBeauty([1, 2, 3]) === 10);
console.log(totalBeauty([4, 6]) === 12);
console.log(totalBeauty([1]) === 1);
console.log(totalBeauty([2, 2]) === 4);
console.log(totalBeauty([1, 2, 3, 4, 5]) === 42);
