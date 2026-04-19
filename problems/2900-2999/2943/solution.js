/*
 * @lc app=leetcode id=2943 lang=javascript
 *
 * [2943] Maximize Area of Square Hole in Grid
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} hBars
 * @param {number[]} vBars
 * @return {number}
 */
var maximizeSquareHoleArea = function(n, m, hBars, vBars) {
    const maxGap = (bars) => {
        bars.sort((a, b) => a - b);
        let maxLen = 1, cur = 1;
        for (let i = 1; i < bars.length; i++) {
            if (bars[i] === bars[i - 1] + 1) {
                cur++;
                if (cur > maxLen) maxLen = cur;
            } else {
                cur = 1;
            }
        }
        return maxLen + 1;
    };
    const side = Math.min(maxGap(hBars), maxGap(vBars));
    return side * side;
};
// @lc code=end

// TEST:
console.log(maximizeSquareHoleArea(2, 1, [2,3], [2])); // 4
console.log(maximizeSquareHoleArea(1, 1, [2], [2])); // 4
console.log(maximizeSquareHoleArea(2, 3, [2,3], [2,4])); // 4
console.log(maximizeSquareHoleArea(3, 3, [2,3,4], [2,3,4])); // 16
