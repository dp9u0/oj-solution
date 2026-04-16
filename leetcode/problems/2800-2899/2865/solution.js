/*
 * @lc app=leetcode id=2865 lang=javascript
 *
 * [2865] Beautiful Towers I
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var maximumSumOfHeights = function(heights) {
    const n = heights.length;
    let result = 0;

    for (let peak = 0; peak < n; peak++) {
        let sum = heights[peak];

        let prev = heights[peak];
        for (let i = peak - 1; i >= 0; i--) {
            prev = Math.min(prev, heights[i]);
            sum += prev;
        }

        prev = heights[peak];
        for (let i = peak + 1; i < n; i++) {
            prev = Math.min(prev, heights[i]);
            sum += prev;
        }

        result = Math.max(result, sum);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(maximumSumOfHeights([5,3,4,1,1])); // 13
console.log(maximumSumOfHeights([6,5,3,9,2,7])); // 22
console.log(maximumSumOfHeights([3,2,5,5,2,3])); // 18
