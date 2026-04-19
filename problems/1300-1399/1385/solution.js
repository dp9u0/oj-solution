/*
 * @lc app=leetcode id=1385 lang=javascript
 *
 * [1385] Find the Distance Value Between Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
  arr2.sort((a, b) => a - b);
  let count = 0;

  for (const x of arr1) {
    // Check if any arr2[j] is in [x - d, x + d]
    const lo = x - d, hi = x + d;
    let left = 0, right = arr2.length - 1;
    let found = false;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (arr2[mid] < lo) {
        left = mid + 1;
      } else if (arr2[mid] > hi) {
        right = mid - 1;
      } else {
        found = true;
        break;
      }
    }
    if (!found) count++;
  }

  return count;
};
// @lc code=end

// TEST:
console.log(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2)); // 2
console.log(findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3)); // 2
console.log(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6)); // 1
console.log(findTheDistanceValue([1], [1], 0)); // 0
console.log(findTheDistanceValue([1], [10], 5)); // 1
