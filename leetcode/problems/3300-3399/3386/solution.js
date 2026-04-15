/*
 * @lc app=leetcode id=3386 lang=javascript
 *
 * [3386] Button with Longest Push Time
 */

// @lc code=start
/**
 * @param {number[][]} events
 * @return {number}
 */
var buttonWithLongestTime = function(events) {
    let maxTime = events[0][1];
    let result = events[0][0];

    for (let i = 1; i < events.length; i++) {
        const duration = events[i][1] - events[i - 1][1];
        if (duration > maxTime || (duration === maxTime && events[i][0] < result)) {
            maxTime = duration;
            result = events[i][0];
        }
    }

    return result;
};
// @lc code=end

// TEST:
console.log(buttonWithLongestTime([[1,2],[2,5],[3,9],[1,15]]));  // 1
console.log(buttonWithLongestTime([[10,5],[1,7]]));               // 10
