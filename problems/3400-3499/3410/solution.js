/*
 * @lc app=leetcode id=3410 lang=javascript
 *
 * [3410] Maximize Subarray Sum After Removing All Occurrences of One Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySum = function (nums) {
  const n = nums.length;
  const NEG = -Infinity;

  let size = 1;
  while (size < n) size <<= 1;

  // Segment tree: each node keeps {sum, pref, suf, best} of its range
  const sum = new Array(2 * size).fill(0);
  const pref = new Array(2 * size).fill(NEG);
  const suf = new Array(2 * size).fill(NEG);
  const best = new Array(2 * size).fill(NEG);

  const pull = (k) => {
    const l = 2 * k;
    const r = l + 1;
    sum[k] = sum[l] + sum[r];
    pref[k] = Math.max(pref[l], sum[l] + pref[r]);
    suf[k] = Math.max(suf[r], sum[r] + suf[l]);
    best[k] = Math.max(best[l], best[r], suf[l] + pref[r]);
  };

  const setLeaf = (i, v) => {
    let k = size + i;
    sum[k] = v;
    pref[k] = v;
    suf[k] = v;
    best[k] = v;
    for (k >>= 1; k >= 1; k >>= 1) pull(k);
  };

  // Padding leaves (i >= n) stay neutral: sum = 0, pref/suf/best = -Infinity
  for (let i = 0; i < n; i++) {
    const k = size + i;
    sum[k] = nums[i];
    pref[k] = nums[i];
    suf[k] = nums[i];
    best[k] = nums[i];
  }
  for (let k = size - 1; k >= 1; k--) pull(k);

  // No-op answer (plain max subarray sum)
  let ans = best[1];

  // Group indices by value
  const groups = new Map();
  for (let i = 0; i < n; i++) {
    if (!groups.has(nums[i])) groups.set(nums[i], []);
    groups.get(nums[i]).push(i);
  }

  // Two largest distinct values, for bound(x) = max element != x
  const distinct = [...groups.keys()].sort((a, b) => b - a);
  const top1 = distinct[0];
  const top2 = distinct.length > 1 ? distinct[1] : NEG;

  for (const [x, idxs] of groups) {
    if (idxs.length === n) continue; // removing would empty the array
    for (const i of idxs) setLeaf(i, 0);
    // Zeroed array max subarray; a zero best may come from an all-x range
    // (empty subarray in the new array), fall back to best single non-x.
    const t = best[1];
    ans = Math.max(ans, t > 0 ? t : x === top1 ? top2 : top1);
    for (const i of idxs) setLeaf(i, nums[i]);
  }

  return ans;
};
// @lc code=end

// TEST:
console.log(maxSubarraySum([-3, 2, -2, -1, 3, -2, 3]), 'expect 7');
console.log(maxSubarraySum([1, 2, 3, 4]), 'expect 10');
console.log(maxSubarraySum([5]), 'expect 5');
console.log(maxSubarraySum([-1, -1, -1]), 'expect -1');
console.log(maxSubarraySum([2, -1, 2, -1, 2]), 'expect 6');
console.log(maxSubarraySum([-5, 3, -5]), 'expect 3');
console.log(maxSubarraySum([1000000, -1000000, 1000000]), 'expect 2000000');
console.log(maxSubarraySum([-1, -2]), 'expect -1'); // 删 x 后全负：取最大非 x 单元素
