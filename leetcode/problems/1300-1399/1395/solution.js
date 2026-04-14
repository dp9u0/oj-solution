/*
 * @lc app=leetcode id=1395 lang=javascript
 *
 * [1395] Count Number of Teams
 */

// @lc code=start
/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
  const n = rating.length;
  let count = 0;
  for (let j = 1; j < n - 1; j++) {
    let leftLess = 0, leftGreater = 0, rightLess = 0, rightGreater = 0;
    for (let i = 0; i < j; i++) {
      if (rating[i] < rating[j]) leftLess++;
      else leftGreater++;
    }
    for (let k = j + 1; k < n; k++) {
      if (rating[k] > rating[j]) rightGreater++;
      else rightLess++;
    }
    count += leftLess * rightGreater + leftGreater * rightLess;
  }
  return count;
};
// @lc code=end

// TEST:
console.log(numTeams([2, 5, 3, 4, 1])); // 3
console.log(numTeams([2, 1, 3])); // 0
console.log(numTeams([1, 2, 3, 4])); // 4
