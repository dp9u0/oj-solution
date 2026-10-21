/*
 * @lc app=leetcode.cn id=3942 lang=javascript
 *
 * [3942] 排序排列的最少操作数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  const dranofelik = nums;
  const n = nums.length;
  const i = nums.indexOf(0);
  let ans = Infinity;

  // 情况 A：nums 循环递增，即 nums[(i + k) % n] === k
  let inc = true;
  for (let k = 0; k < n; k++) {
    if (nums[(i + k) % n] !== k) {
      inc = false;
      break;
    }
  }
  if (inc) {
    // 连续左旋 i 次；或 反转 -> 左旋 (n-i)%n 次 -> 反转
    ans = Math.min(ans, i, ((n - i) % n) + 2);
  }

  // 情况 B：nums 循环递减（即 reverse(nums) 循环递增），0 在反转数组中的下标 j = n-1-i
  const j = n - 1 - i;
  let dec = true;
  for (let k = 0; k < n; k++) {
    if (nums[n - 1 - ((j + k) % n)] !== k) {
      dec = false;
      break;
    }
  }
  if (dec) {
    // 先反转再左旋 j 次；或 先左旋 (n-j)%n 次再反转
    ans = Math.min(ans, 1 + Math.min(j, (n - j) % n));
  }

  return ans === Infinity ? -1 : ans;
};
// @lc code=end

// TEST:
console.log(minOperations([0, 2, 1])); // 2
console.log(minOperations([1, 0, 2])); // 2
console.log(minOperations([2, 0, 1, 3])); // -1
console.log(minOperations([0])); // 0
console.log(minOperations([1, 0])); // 1
console.log(minOperations([0, 1, 2, 3])); // 0
console.log(minOperations([1, 2, 3, 0])); // 3
console.log(minOperations([1, 2, 3, 4, 0])); // 3
console.log(minOperations([2, 1, 0, 4, 3])); // 3
console.log(minOperations([4, 3, 2, 1, 0])); // 1
