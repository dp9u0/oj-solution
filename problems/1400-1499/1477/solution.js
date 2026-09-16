/*
 * @lc app=leetcode.cn id=1477 lang=javascript
 *
 * [1477] 找两个和为目标值且不重叠的子数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function(arr, target) {
  const n = arr.length;
  const INF = Infinity;
  // best[i]: minimal length of a subarray with sum target within arr[0..i]
  const best = new Array(n).fill(INF);
  let ans = INF;
  let minLen = INF;
  let left = 0;
  let sum = 0;
  for (let right = 0; right < n; right++) {
    sum += arr[right];
    while (sum > target) {
      sum -= arr[left++];
    }
    if (sum === target) {
      const len = right - left + 1;
      if (left > 0 && best[left - 1] !== INF) {
        ans = Math.min(ans, len + best[left - 1]);
      }
      minLen = Math.min(minLen, len);
    }
    best[right] = minLen;
  }
  return ans === INF ? -1 : ans;
};
// @lc code=end

// TEST:
console.log(minSumOfLengths([3, 2, 2, 4, 3], 3)); // 2
console.log(minSumOfLengths([7, 3, 4, 7], 7)); // 2
console.log(minSumOfLengths([4, 3, 2, 6, 2, 3, 4], 6)); // -1
console.log(minSumOfLengths([5, 5, 4, 4, 5], 3)); // -1
console.log(minSumOfLengths([3, 1, 1, 1, 5, 1, 2, 1], 3)); // 3
console.log(minSumOfLengths([3], 3)); // -1
console.log(minSumOfLengths([2, 2, 4, 4, 4, 4, 4, 4, 4, 4], 8)); // 4
