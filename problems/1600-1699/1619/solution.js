/*
 * @lc app=leetcode id=1619 lang=javascript
 *
 * [1619] Mean of Array After Removing Some Elements
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
  arr.sort((a, b) => a - b);
  const n = arr.length;
  const remove = n / 20;
  let sum = 0;
  for (let i = remove; i < n - remove; i++) sum += arr[i];
  return sum / (n - 2 * remove);
};
// @lc code=end

// TEST:
console.log(trimMean([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3])); // 2.00000
console.log(trimMean([6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0])); // 4.00000
console.log(trimMean([6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4])); // 4.77778
