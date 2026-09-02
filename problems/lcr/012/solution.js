/*
 * @lc app=leetcode.cn id=LCR 012 lang=javascript
 *
 * [LCR 012] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  const total = nums.reduce((acc, num) => acc + num, 0);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === total - leftSum - nums[i]) return i;
    leftSum += nums[i];
  }
  return -1;
};
// @lc code=end

// TEST:
function test(nums, expected) {
  const res = pivotIndex(nums);
  const pass = res === expected;
  console.log(`${pass ? 'PASS' : 'FAIL'} nums=[${nums}] => ${res} (expected ${expected})`);
  return pass;
}

let allPass = true;
allPass &= test([1, 7, 3, 6, 5, 6], 3); // 示例1
allPass &= test([1, 2, 3], -1);          // 示例2
allPass &= test([2, 1, -1], 0);          // 示例3：中心在数组最左端
allPass &= test([1], 0);                 // 单元素，左0右0
allPass &= test([-1, -1, -1, -1, -1, 0], 2); // 负元素，中心偏中
allPass &= test([0, 0, 0, 0], 0);        // 多个中心下标，返回最左
allPass &= test([1, 2, 3, 4, 5], -1);    // 递增，无中心
allPass &= test([1, -1, 1, -1, 0], 4);   // 中心在数组最右端
allPass &= test([-1, 2, -1], 1);         // 负数数组
console.log(allPass ? 'ALL TESTS PASSED' : 'SOME TESTS FAILED');
