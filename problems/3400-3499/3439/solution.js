/*
 * @lc app=leetcode id=3439 lang=javascript
 *
 * [3439] Reschedule Meetings for Maximum Free Time I
 */

// @lc code=start
/**
 * @param {number} eventTime
 * @param {number} k
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function(eventTime, k, startTime, endTime) {
    const n = startTime.length;
    const gaps = new Array(n + 1);
    gaps[0] = startTime[0];
    for (let i = 1; i < n; i++) {
        gaps[i] = startTime[i] - endTime[i - 1];
    }
    gaps[n] = eventTime - endTime[n - 1];

    let windowSum = 0;
    for (let i = 0; i <= k; i++) {
        windowSum += gaps[i];
    }
    let maxSum = windowSum;

    for (let i = k + 1; i <= n; i++) {
        windowSum += gaps[i] - gaps[i - k - 1];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
};
// @lc code=end

// TEST:
console.log(maxFreeTime(5, 1, [1, 3], [2, 5])); // 2
console.log(maxFreeTime(10, 1, [0, 2, 9], [1, 4, 10])); // 6
console.log(maxFreeTime(5, 2, [0, 1, 2, 3, 4], [1, 2, 3, 4, 5])); // 0
console.log(maxFreeTime(10, 2, [0, 3, 5], [2, 4, 10])); // 2
console.log(maxFreeTime(5, 1, [0, 4], [1, 5])); // 3
