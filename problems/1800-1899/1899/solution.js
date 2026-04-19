/*
 * @lc app=leetcode id=1899 lang=javascript
 *
 * [1899] Merge Triplets to Form Target Triplet
 */

// @lc code=start
/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
  const [x, y, z] = target;
  let a = false, b = false, c = false;
  for (const [ai, bi, ci] of triplets) {
    if (ai <= x && bi <= y && ci <= z) {
      if (ai === x) a = true;
      if (bi === y) b = true;
      if (ci === z) c = true;
    }
  }
  return a && b && c;
};
// @lc code=end

// TEST:
console.log(mergeTriplets([[2,5,3],[1,8,4],[1,7,5]], [2,7,5])); // true
console.log(mergeTriplets([[3,4,5],[4,5,6]], [3,2,5])); // false
console.log(mergeTriplets([[2,5,3],[2,3,4],[1,2,5],[5,2,3]], [5,5,5])); // true
