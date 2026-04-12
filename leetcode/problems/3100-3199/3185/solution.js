/*
 * @lc app=leetcode id=3185 lang=javascript
 *
 * [3185] Count Pairs That Form a Complete Day II
 */

// @lc code=start
/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(hours) {
    const count = new Array(24).fill(0);
    let result = 0;

    for (const h of hours) {
        const r = h % 24;
        result += count[(24 - r) % 24];
        count[r]++;
    }

    return result;
};
// @lc code=end

// TEST:
console.log(countCompleteDayPairs([12,12,30,24,24])); // 2
console.log(countCompleteDayPairs([72,48,24,3])); // 3
console.log(countCompleteDayPairs([12,12])); // 1
