/*
 * @lc app=leetcode id=1200 lang=javascript
 *
 * [1200] Minimum Absolute Difference
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
  arr.sort((a, b) => a - b);
  let minDiff = Infinity;
  for (let i = 1; i < arr.length; i++) {
    minDiff = Math.min(minDiff, arr[i] - arr[i - 1]);
  }
  const result = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === minDiff) {
      result.push([arr[i - 1], arr[i]]);
    }
  }
  return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(minimumAbsDifference([4, 2, 1, 3]))); // [[1,2],[2,3],[3,4]]
console.log(JSON.stringify(minimumAbsDifference([1, 3, 6, 10, 15]))); // [[1,3]]
console.log(JSON.stringify(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]))); // [[-14,-10],[19,23],[23,27]]
console.log(JSON.stringify(minimumAbsDifference([1, 2]))); // [[1,2]]
console.log(JSON.stringify(minimumAbsDifference([1, 2, 3, 4]))); // [[1,2],[2,3],[3,4]]
