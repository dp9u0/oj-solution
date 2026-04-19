/*
 * @lc app=leetcode id=3633 lang=javascript
 *
 * [3633] Earliest Finish Time for Land and Water Rides I
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
    const n = landStartTime.length, m = waterStartTime.length;
    let ans = Infinity;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            // Land first, then water
            const landFinish = landStartTime[i] + landDuration[i];
            const waterStart = Math.max(landFinish, waterStartTime[j]);
            ans = Math.min(ans, waterStart + waterDuration[j]);

            // Water first, then land
            const waterFinish = waterStartTime[j] + waterDuration[j];
            const landStart = Math.max(waterFinish, landStartTime[i]);
            ans = Math.min(ans, landStart + landDuration[i]);
        }
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(earliestFinishTime([2,8], [4,1], [6], [3]));      // 9
console.log(earliestFinishTime([5], [3], [1], [10]));          // 14
console.log(earliestFinishTime([1], [1], [1], [1]));          // 3
console.log(earliestFinishTime([10], [5], [1], [2]));         // 17
console.log(earliestFinishTime([1,5], [3,2], [3], [4]));      // min?
