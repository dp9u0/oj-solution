/*
 * @lc app=leetcode.cn id=3551 lang=javascript
 *
 * [3551] 数位和排序需要的最小交换次数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
  const n = nums.length;
  const digitSum = (num) => {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  };
  const sumOf = new Map();
  for (const num of nums) sumOf.set(num, digitSum(num));
  const sorted = [...nums].sort((a, b) => sumOf.get(a) - sumOf.get(b) || a - b);
  const pos = new Map();
  for (let i = 0; i < n; i++) pos.set(sorted[i], i);

  const target = new Array(n);
  for (let i = 0; i < n; i++) target[i] = pos.get(nums[i]);

  const visited = new Array(n).fill(false);
  let swaps = 0;
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    let len = 0;
    for (let j = i; !visited[j]; j = target[j]) {
      visited[j] = true;
      len++;
    }
    swaps += len - 1;
  }
  return swaps;
};
// @lc code=end

// TEST:
console.log(minSwaps([37, 100])); // 1
console.log(minSwaps([22, 14, 33, 7])); // 0
console.log(minSwaps([18, 43, 34, 16])); // 2
console.log(minSwaps([5])); // 0
console.log(minSwaps([10, 1, 100, 1000])); // 1
console.log(minSwaps([999999999, 1, 1000000000])); // 2
