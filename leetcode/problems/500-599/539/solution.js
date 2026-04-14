/*
 * @lc app=leetcode id=539 lang=javascript
 *
 * [539] Minimum Time Difference
 */

// @lc code=start
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    const minutes = timePoints.map(t => {
        const [h, m] = t.split(':').map(Number);
        return h * 60 + m;
    });
    minutes.sort((a, b) => a - b);

    let result = Infinity;
    for (let i = 1; i < minutes.length; i++) {
        result = Math.min(result, minutes[i] - minutes[i - 1]);
        if (result === 0) return 0;
    }
    // circular diff
    result = Math.min(result, 1440 - minutes[minutes.length - 1] + minutes[0]);
    return result;
};
// @lc code=end

// TEST:
console.log(findMinDifference(["23:59","00:00"])); // 1
console.log(findMinDifference(["00:00","23:59","00:00"])); // 0
