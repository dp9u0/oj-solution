/*
 * @lc app=leetcode id=4013 lang=javascript
 *
 * [4013] Count Subarrays With Even Odd Ratio II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var countRatioSubarrays = function (nums, a, b) {
  const n = nums.length;
  // Transform: even -> +b, odd -> -a. Subarray valid <=> transformed sum <= 0
  const pref = new Array(n + 1);
  pref[0] = 0;
  for (let i = 0; i < n; i++) {
    pref[i + 1] = pref[i] + (nums[i] % 2 === 0 ? b : -a);
  }

  // Coordinate compression
  const sorted = Array.from(pref).sort((x, y) => x - y);
  const rankOf = new Map();
  for (const v of sorted) {
    if (!rankOf.has(v)) rankOf.set(v, rankOf.size + 1);
  }
  const m = rankOf.size;

  // Fenwick tree over compressed ranks
  const tree = new Array(m + 1).fill(0);
  const update = (i) => {
    for (; i <= m; i += i & -i) tree[i]++;
  };
  const query = (i) => {
    let s = 0;
    for (; i > 0; i -= i & -i) s += tree[i];
    return s;
  };

  // Count pairs i < j with pref[i] >= pref[j]
  let ans = 0;
  let seen = 0;
  for (let j = 0; j <= n; j++) {
    const r = rankOf.get(pref[j]);
    ans += seen - query(r - 1); // previous values >= pref[j]
    update(r);
    seen++;
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(countRatioSubarrays([1, 2, 1, 2], 3, 2) === 7);
console.log(countRatioSubarrays([2, 2, 1], 2, 1) === 3);
console.log(countRatioSubarrays([2, 2, 2], 1, 1) === 0);
console.log(countRatioSubarrays([1], 1, 1) === 1);
console.log(countRatioSubarrays([2], 1, 1) === 0);
console.log(countRatioSubarrays([1, 1, 1, 1], 1, 3) === 10);
