/*
 * @lc app=leetcode id=2951 lang=javascript
 *
 * [2951] Find the Peaks
 */

// @lc code=start
/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {
  const res = [];
  for (let i = 1; i < mountain.length - 1; i++) {
    if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) {
      res.push(i);
    }
  }
  return res;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findPeaks([2, 4, 4]))); // []
console.log(JSON.stringify(findPeaks([1, 4, 3, 8, 5]))); // [1,3]
console.log(JSON.stringify(findPeaks([1, 3, 2, 4, 1, 5, 3]))); // [1,3,5]
console.log(JSON.stringify(findPeaks([5, 4, 3, 2, 1]))); // []
console.log(JSON.stringify(findPeaks([1, 5, 1]))); // [1]
