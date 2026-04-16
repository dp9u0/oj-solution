/*
 * @lc app=leetcode id=3440 lang=javascript
 *
 * [3440] Reschedule Meetings for Maximum Free Time II
 */

// @lc code=start
/**
 * @param {number} eventTime
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function(eventTime, startTime, endTime) {
    const n = startTime.length;

    const gap = new Array(n + 1);
    gap[0] = startTime[0];
    for (let i = 1; i < n; i++) gap[i] = startTime[i] - endTime[i - 1];
    gap[n] = eventTime - endTime[n - 1];

    const prefixMax = new Array(n + 2).fill(0);
    for (let i = 0; i <= n; i++) prefixMax[i + 1] = Math.max(prefixMax[i], gap[i]);

    const suffixMax = new Array(n + 2).fill(0);
    for (let i = n; i >= 0; i--) suffixMax[i] = Math.max(suffixMax[i + 1], gap[i]);

    let ans = 0;
    for (let i = 0; i < n; i++) {
        const d = endTime[i] - startTime[i];
        const freed = gap[i] + d + gap[i + 1];
        const maxOther = Math.max(prefixMax[i], suffixMax[i + 2]);

        if (maxOther >= d) {
            ans = Math.max(ans, freed);
        } else {
            ans = Math.max(ans, Math.max(freed - d, maxOther));
        }
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(maxFreeTime(5, [1,3], [2,5])); // 2
console.log(maxFreeTime(10, [0,7,9], [1,8,10])); // 7
console.log(maxFreeTime(10, [0,3,7,9], [1,4,8,10])); // 6
console.log(maxFreeTime(5, [0,1,2,3,4], [1,2,3,4,5])); // 0
console.log(maxFreeTime(10, [0,5], [1,6])); // 9
