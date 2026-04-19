/*
 * @lc app=leetcode id=1954 lang=javascript
 *
 * [1954] Minimum Garden Perimeter to Collect Enough Apples
 */

// @lc code=start
/**
 * @param {number} neededApples
 * @return {number}
 */
var minimumPerimeter = function(neededApples) {
    let lo = 1, hi = 100000;
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        const apples = 2 * mid * (2 * mid + 1) * (mid + 1);
        if (apples >= neededApples) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }
    return 8 * lo;
};
// @lc code=end

// TEST:
console.log(minimumPerimeter(1)); // 8
console.log(minimumPerimeter(13)); // 16
console.log(minimumPerimeter(1000000000)); // 5040
console.log(minimumPerimeter(12)); // 8
