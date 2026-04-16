/*
 * @lc app=leetcode id=1725 lang=javascript
 *
 * [1725] Number Of Rectangles That Can Form The Largest Square
 */

// @lc code=start
/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    let maxLen = 0, count = 0;
    for (const [l, w] of rectangles) {
        const side = Math.min(l, w);
        if (side > maxLen) { maxLen = side; count = 1; }
        else if (side === maxLen) count++;
    }
    return count;
};
// @lc code=end

// TEST:
console.log(countGoodRectangles([[5,8],[3,9],[5,12],[16,5]])); // 3
console.log(countGoodRectangles([[2,3],[3,7],[4,3],[3,7]])); // 3
console.log(countGoodRectangles([[1,2]])); // 1
console.log(countGoodRectangles([[5,8],[3,9],[5,12],[16,5],[5,6]])); // 4
console.log(countGoodRectangles([[3,4],[4,3],[5,6]])); // 2
