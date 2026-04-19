/*
 * @lc app=leetcode id=3043 lang=javascript
 *
 * [3043] Find the Length of the Longest Common Prefix
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
  const prefixes = new Set();
  for (const num of arr1) {
    let x = num;
    while (x > 0) {
      prefixes.add(x);
      x = Math.floor(x / 10);
    }
  }

  let result = 0;
  for (const num of arr2) {
    let x = num;
    while (x > 0 && !prefixes.has(x)) {
      x = Math.floor(x / 10);
    }
    if (x > 0) {
      result = Math.max(result, String(x).length);
    }
  }

  return result;
};
// @lc code=end

// TEST:
console.log(longestCommonPrefix([1,10,100], [1000])); // 3
console.log(longestCommonPrefix([1,2,3], [4,4,4])); // 0
console.log(longestCommonPrefix([12345], [123])); // 3
