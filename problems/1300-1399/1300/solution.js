/*
 * @lc app=leetcode id=1300 lang=javascript
 *
 * [1300] Sum of Mutated Array Closest to Target
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function(arr, target) {
  arr.sort((a, b) => a - b);
  const n = arr.length;
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + arr[i];
  }

  const getSum = (v) => {
    let lo = 0, hi = n;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (arr[mid] > v) hi = mid;
      else lo = mid + 1;
    }
    return prefix[lo] + v * (n - lo);
  };

  let left = 0, right = arr[n - 1];
  while (left < right) {
    const mid = (left + right) >> 1;
    if (getSum(mid) < target) left = mid + 1;
    else right = mid;
  }

  const s1 = getSum(left - 1);
  const s2 = getSum(left);
  return Math.abs(s1 - target) <= Math.abs(s2 - target) ? left - 1 : left;
};
// @lc code=end

// TEST:
console.log(findBestValue([4, 9, 3], 10)); // 3
console.log(findBestValue([2, 3, 5], 10)); // 5
console.log(findBestValue([60864, 25176, 27249, 21296, 20204], 56803)); // 11361
