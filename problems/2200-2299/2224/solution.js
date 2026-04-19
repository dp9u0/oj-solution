/*
 * @lc app=leetcode id=2224 lang=javascript
 *
 * [2224] Minimum Number of Operations to Convert Time
 */

// @lc code=start
/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function(current, correct) {
    const toMin = (s) => { const [h, m] = s.split(':').map(Number); return h * 60 + m; };
    let diff = toMin(correct) - toMin(current);
    let ops = 0;
    for (const step of [60, 15, 5, 1]) {
        ops += Math.floor(diff / step);
        diff %= step;
    }
    return ops;
};
// @lc code=end

// TEST:
console.log(convertTime("02:30", "04:35")); // 3
console.log(convertTime("11:00", "11:01")); // 1
console.log(convertTime("00:00", "23:59")); // 32
console.log(convertTime("00:00", "00:00")); // 0
console.log(convertTime("01:00", "01:15")); // 1
