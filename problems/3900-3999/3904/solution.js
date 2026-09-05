/*
 * @lc app=leetcode.cn id=3904 lang=javascript
 *
 * [3904] 最小稳定下标 II
 */

// @lc code=start
/**
 * 对每个下标 i, 定义其"不稳定值" = max(nums[0..i]) - min(nums[i..n-1])。
 * 若该值 <= k, 则 i 是"稳定下标"。返回最小的稳定下标, 不存在则 -1。
 *
 * 思路(前缀最大 + 后缀最小, O(n)):
 *  - prefMax[i] = max(nums[0..i]); suffMin[i] = min(nums[i..n-1])。
 *  - 从左到右找第一个使 prefMax[i] - suffMin[i] <= k 的下标即可。
 *  - 可再省一个数组: 先预计算后缀最小 suffMin, 再用滚动变量维护前缀最大, 一趟完成扫描。
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function(nums, k) {
  const n = nums.length;
  // 后缀最小: suffMin[i] = min(nums[i..n-1])
  const suffMin = new Array(n);
  suffMin[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffMin[i] = Math.min(nums[i], suffMin[i + 1]);
  }
  // 滚动前缀最大, 找第一个稳定下标
  let prefMax = -Infinity;
  for (let i = 0; i < n; i++) {
    if (nums[i] > prefMax) prefMax = nums[i];
    if (prefMax - suffMin[i] <= k) return i;
  }
  return -1;
};
// @lc code=end

// TEST:
const assert = require('assert');

// 官方示例
assert.strictEqual(firstStableIndex([5, 0, 1, 4], 3), 3);
assert.strictEqual(firstStableIndex([3, 2, 1], 1), -1);
assert.strictEqual(firstStableIndex([0], 0), 0);

// 更多有代表性的用例
// 递增数组 [1,2,3], k=0: i0: prefMax=1, suffMin[0..]=1 → 0 ≤ 0 → 稳定
assert.strictEqual(firstStableIndex([1, 2, 3], 0), 0);
// 全同值, k=0 → 任意 i 稳定, 最小为 0
assert.strictEqual(firstStableIndex([7, 7, 7], 0), 0);
// 递减数组 [3,2,1], k=2: i0: max[0]=3, min[0..]=1 → 2 ≤ 2 → 稳定
assert.strictEqual(firstStableIndex([3, 2, 1], 2), 0);
// 差值恒定 9 > k=8, 无稳定下标
assert.strictEqual(firstStableIndex([10, 1, 1, 1], 8), -1);
// 中间下标 2 才稳定 (i0:8-0=8, i1:8-0=8, i2:8-7=1)
assert.strictEqual(firstStableIndex([8, 0, 7, 9], 1), 2);
// 大 k 一定稳定(第一个下标即返回)
assert.strictEqual(firstStableIndex([1000000000, 0], 1000000000), 0);

// ---- 与朴素定义对拍 ----
function brute(nums, k) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let pm = -Infinity;
    for (let x = 0; x <= i; x++) pm = Math.max(pm, nums[x]);
    let sm = Infinity;
    for (let x = i; x < n; x++) sm = Math.min(sm, nums[x]);
    if (pm - sm <= k) return i;
  }
  return -1;
}
for (let t = 0; t < 5000; t++) {
  const n = 1 + Math.floor(Math.random() * 12);
  const nums = Array.from({ length: n }, () => Math.floor(Math.random() * 40));
  const k = Math.floor(Math.random() * 60);
  const got = firstStableIndex(nums.slice(), k);
  const exp = brute(nums, k);
  assert.strictEqual(got, exp, `mismatch nums=[${nums}] k=${k} got=${got} exp=${exp}`);
}

console.log('All tests passed!');
