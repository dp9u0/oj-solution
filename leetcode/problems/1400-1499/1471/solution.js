/*
 * @lc app=leetcode id=1471 lang=javascript
 *
 * [1471] The k Strongest Values in an Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function(arr, k) {
  arr.sort((a, b) => a - b);
  const m = arr[((arr.length - 1) / 2) | 0];
  const result = [];
  let l = 0, r = arr.length - 1;
  for (let i = 0; i < k; i++) {
    if (m - arr[l] > arr[r] - m) {
      result.push(arr[l++]);
    } else {
      result.push(arr[r--]);
    }
  }
  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(getStrongest([1, 2, 3, 4, 5], 2))); // [5,1]
console.log(JSON.stringify(getStrongest([1, 1, 3, 5, 5], 2))); // [5,5]
console.log(JSON.stringify(getStrongest([6, 7, 11, 7, 6, 8], 5))); // [11,8,6,6,7]
console.log(JSON.stringify(getStrongest([1], 1))); // [1]
console.log(JSON.stringify(getStrongest([-7, 22, 17, 3], 2))); // [22,17]
