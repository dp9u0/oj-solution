/*
 * @lc app=leetcode id=2848 lang=javascript
 *
 * [2848] Points That Intersect With Cars
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {
    let set = new Set();
    for (let [start, end] of nums) {
      for (let i = start; i <= end; i++) {
        set.add(i);
      }
    }
    return set.size;
};
// @lc code=end

// TEST:
console.log(numberOfPoints([[3,6],[1,5],[4,7]]));
console.log(numberOfPoints([[1,3],[5,8]]));
