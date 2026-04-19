/*
 * @lc app=leetcode id=3635 lang=javascript
 *
 * [3635] Earliest Finish Time for Land and Water Rides II
 */

// @lc code=start
/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
  let minLandFinish = Infinity, minWaterFinish = Infinity;
  for (let i = 0; i < landStartTime.length; i++) {
    minLandFinish = Math.min(minLandFinish, landStartTime[i] + landDuration[i]);
  }
  for (let j = 0; j < waterStartTime.length; j++) {
    minWaterFinish = Math.min(minWaterFinish, waterStartTime[j] + waterDuration[j]);
  }

  let ans = Infinity;
  // Land first, then water
  for (let j = 0; j < waterStartTime.length; j++) {
    ans = Math.min(ans, Math.max(waterStartTime[j], minLandFinish) + waterDuration[j]);
  }
  // Water first, then land
  for (let i = 0; i < landStartTime.length; i++) {
    ans = Math.min(ans, Math.max(landStartTime[i], minWaterFinish) + landDuration[i]);
  }
  return ans;
};
// @lc code=end

// TEST:
console.log(earliestFinishTime([2, 8], [4, 1], [6], [3])); // 9
console.log(earliestFinishTime([5], [3], [1], [10])); // 14
console.log(earliestFinishTime([1], [1], [1], [1])); // 3
console.log(earliestFinishTime([1, 10], [1, 1], [1, 10], [1, 1])); // 3
console.log(earliestFinishTime([100], [5], [1], [2])); // 105
