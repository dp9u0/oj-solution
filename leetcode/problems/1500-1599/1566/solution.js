/*
 * @lc app=leetcode id=1566 lang=javascript
 *
 * [1566] Detect Pattern of Length M Repeated K or More Times
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function(arr, m, k) {
  let count = 0;
  for (let i = m; i < arr.length; i++) {
    if (arr[i] === arr[i - m]) {
      count++;
      if (count >= m * (k - 1)) return true;
    } else {
      count = 0;
    }
  }
  return false;
};
// @lc code=end

// TEST:
console.log(containsPattern([1, 2, 4, 4, 4, 4], 1, 3)); // true
console.log(containsPattern([1, 2, 1, 2, 1, 1, 1, 3], 2, 2)); // true
console.log(containsPattern([1, 2, 1, 2, 1, 3], 2, 3)); // false
console.log(containsPattern([1, 2, 3, 1, 2, 3], 3, 2)); // true
