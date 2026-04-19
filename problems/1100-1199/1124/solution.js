/*
 * @lc app=leetcode id=1124 lang=javascript
 *
 * [1124] Longest Well-Performing Interval
 */

// @lc code=start
/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function(hours) {
    const map = new Map();
    let prefix = 0;
    let result = 0;
    for (let i = 0; i < hours.length; i++) {
        prefix += hours[i] > 8 ? 1 : -1;
        if (prefix > 0) {
            result = i + 1;
        } else {
            if (map.has(prefix - 1)) {
                result = Math.max(result, i - map.get(prefix - 1));
            }
        }
        if (!map.has(prefix)) {
            map.set(prefix, i);
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(longestWPI([9,9,6,0,6,6,9])); // 3
console.log(longestWPI([6,6,6])); // 0
console.log(longestWPI([9,9,9])); // 3
