/*
 * @lc app=leetcode id=327 lang=javascript
 *
 * [327] Count of Range Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function(nums, lower, upper) {
  const n = nums.length;
  // 构建前缀和数组
  const preSum = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
      preSum[i + 1] = preSum[i] + nums[i];
  }
  
  // 归并排序过程中统计满足条件的区间和个数
  function mergeSort(left, right) {
      if (left >= right) return 0;
      
      const mid = Math.floor((left + right) / 2);
      let count = mergeSort(left, mid) + mergeSort(mid + 1, right);
      
      // 统计满足条件的区间和个数
      let i = left;
      let l = mid + 1, r = mid + 1;
      while (i <= mid) {
          while (l <= right && preSum[l] - preSum[i] < lower) l++;
          while (r <= right && preSum[r] - preSum[i] <= upper) r++;
          count += r - l;
          i++;
      }
      
      // 合并两个有序数组
      const temp = new Array(right - left + 1);
      let p1 = left, p2 = mid + 1;
      let p = 0;
      while (p1 <= mid && p2 <= right) {
          temp[p++] = preSum[p1] <= preSum[p2] ? preSum[p1++] : preSum[p2++];
      }
      while (p1 <= mid) temp[p++] = preSum[p1++];
      while (p2 <= right) temp[p++] = preSum[p2++];
      
      // 将排序结果复制回原数组
      for (let i = 0; i < temp.length; i++) {
          preSum[left + i] = temp[i];
      }
      
      return count;
  }
  
  return mergeSort(0, n);
};
// @lc code=end
/**
// TEST:
function runTests() {
  // 测试用例1：题目中的示例
  console.log("Test Case 1:");
  console.log(countRangeSum([-2,5,-1], -2, 2)); // 应该返回 3

  // 测试用例2：空数组
  console.log("\nTest Case 2:");
  console.log(countRangeSum([], -1, 1)); // 应该返回 0

  // 测试用例3：单个元素
  console.log("\nTest Case 3:");
  console.log(countRangeSum([0], 0, 0)); // 应该返回 1

  // 测试用例4：全负数数组
  console.log("\nTest Case 4:");
  console.log(countRangeSum([-3,-2,-1], -3, -1)); // 应该返回 6

  // 测试用例5：大数组
  console.log("\nTest Case 5:");
  console.log(countRangeSum([1,2,3,4,5], 3, 7)); // 应该返回 4

  // 测试用例6：lower和upper相等
  console.log("\nTest Case 6:");
  console.log(countRangeSum([1,-1,0], 0, 0)); // 应该返回 3

  // 测试用例7：区间跨度很大
  console.log("\nTest Case 7:");
  console.log(countRangeSum([0,0], -100, 100)); // 应该返回 3
}

// 运行测试
runTests();

*/