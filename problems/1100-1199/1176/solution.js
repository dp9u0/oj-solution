/*
 * @lc app=leetcode.cn id=1176 lang=javascript
 *
 * [1176] 健身计划评估
 */

// @lc code=start
/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var dietPlanPerformance = function(calories, k, lower, upper) {
    let score = 0, windowSum = 0;
    for (let i = 0; i < calories.length; i++) {
        windowSum += calories[i];
        if (i < k - 1) continue;
        if (i >= k) windowSum -= calories[i - k];
        if (windowSum < lower) score--;
        else if (windowSum > upper) score++;
    }
    return score;
};
// @lc code=end

// TEST:
console.log(dietPlanPerformance([1, 2, 3, 4, 5], 1, 3, 3)); // 0
console.log(dietPlanPerformance([3, 2], 2, 0, 1)); // 1
console.log(dietPlanPerformance([6, 5, 0, 0], 2, 1, 5)); // 0
console.log(dietPlanPerformance([1, 2, 3, 4, 5], 2, 3, 7)); // 0
console.log(dietPlanPerformance([10, 10, 10], 1, 5, 6)); // 3
