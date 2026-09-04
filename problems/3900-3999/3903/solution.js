/*
 * @lc app=leetcode.cn id=3903 lang=javascript
 *
 * [3903] 最小稳定下标 I
 */

// @lc code=start
/**
 * 下标 i 的不稳定值 = max(nums[0..i]) - min(nums[i..n-1])。
 * 要求返回不稳定值 <= k 的最小下标 i,不存在则 -1。
 *
 * 思路:先自右向左预计算后缀最小值 suffixMin[i] = min(nums[i..n-1]);
 * 再自左向右扫描,维护前缀最大值 prefixMax = max(nums[0..i]),
 * 第一个满足 prefixMax - suffixMin[i] <= k 的 i 即为最小稳定下标。
 * O(n) 时间,O(n) 空间。
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function(nums, k) {
  const n = nums.length;
  // suffixMin[i] = min(nums[i..n-1])
  const suffixMin = new Array(n);
  suffixMin[n - 1] = nums[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    suffixMin[i] = Math.min(nums[i], suffixMin[i + 1]);
  }

  let prefixMax = -Infinity;
  for (let i = 0; i < n; i++) {
    prefixMax = Math.max(prefixMax, nums[i]);
    if (prefixMax - suffixMin[i] <= k) return i;
  }
  return -1;
};
// @lc code=end

// TEST:
const assert = require('assert');

// 示例
assert.strictEqual(firstStableIndex([5, 0, 1, 4], 3), 3);
assert.strictEqual(firstStableIndex([3, 2, 1], 1), -1);
assert.strictEqual(firstStableIndex([0], 0), 0);

// 单元素,不稳定值为 0
assert.strictEqual(firstStableIndex([100], 0), 0);
assert.strictEqual(firstStableIndex([100], 5), 0);

// 答案在开头
assert.strictEqual(firstStableIndex([1, 2, 3, 4], 0), 0);
// 递增数组:不稳定值恒为 0(前缀最大 = 后缀最小所在元素本身的最大值 - 最小)
// 对 [1,2,3],i=0:1-1=0;i=1:2-2=0;i=2:3-3=0 → 全稳定,最小为 0
assert.strictEqual(firstStableIndex([1, 2, 3], 0), 0);
// 递减数组:不稳定值恒为 max(0..i) - min 后缀,例如 [5,4,3]
// i=0:5-3=2;i=1:5-3=2;i=2:5-3=2
assert.strictEqual(firstStableIndex([5, 4, 3], 2), 0);
assert.strictEqual(firstStableIndex([5, 4, 3], 1), -1);

// k 极大,必存在稳定下标
assert.strictEqual(firstStableIndex([9, 2, 7], 1e9), 0);

// ---- 暴力 O(n^2) 对拍 ----
function brute(nums, k) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let prefixMax = -Infinity, suffixMin = Infinity;
    for (let j = 0; j <= i; j++) prefixMax = Math.max(prefixMax, nums[j]);
    for (let j = i; j < n; j++) suffixMin = Math.min(suffixMin, nums[j]);
    if (prefixMax - suffixMin <= k) return i;
  }
  return -1;
}
// 随机对拍
for (let t = 0; t < 500; t++) {
  const n = 1 + Math.floor(Math.random() * 10);
  const nums = Array.from({ length: n }, () => Math.floor(Math.random() * 20));
  const k = Math.floor(Math.random() * 20);
  assert.strictEqual(firstStableIndex(nums, k), brute(nums, k),
    `mismatch on nums=[${nums}], k=${k}`);
}

console.log('All tests passed!');
