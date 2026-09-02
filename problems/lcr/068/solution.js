/*
 * @lc app=leetcode.cn id=LCR 068 lang=javascript
 *
 * [LCR 068] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length;
  // 在 [left, right) 中找第一个 >= target 的位置(lower_bound)
  while (left < right) {
    const mid = (left + right) >> 1;
    if (nums[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
// @lc code=end

// TEST:
function test(nums, target, expected) {
  const res = searchInsert(nums, target);
  const pass = res === expected;
  console.log(`${pass ? 'PASS' : 'FAIL'} nums=[${nums}] target=${target} => ${res} (expected ${expected})`);
  return pass;
}

let allPass = true;
allPass &= test([1, 3, 5, 6], 5, 2); // target 存在
allPass &= test([1, 3, 5, 6], 2, 1); // target 应插中间
allPass &= test([1, 3, 5, 6], 7, 4); // target 大于所有元素
allPass &= test([1, 3, 5, 6], 0, 0); // target 小于所有元素
allPass &= test([1], 0, 0);          // 单元素
allPass &= test([1], 1, 0);          // 单元素且等于
allPass &= test([2, 4, 6, 8, 10], 5, 2); // 偶数长度数组
console.log(allPass ? 'ALL TESTS PASSED' : 'SOME TESTS FAILED');
