/*
 * @lc app=leetcode id=3200 lang=javascript
 *
 * [3200] Maximum Height of a Triangle
 */

// @lc code=start
/**
 * @param {number} red
 * @param {number} blue
 * @return {number}
 */
var maxHeightOfTriangle = function(red, blue) {
    let calcHeight = (a, b) => {
        let h = 0;
        while (true) {
            let need = h + 1;
            if (h % 2 === 0) {
                if (a >= need) a -= need;
                else break;
            } else {
                if (b >= need) b -= need;
                else break;
            }
            h++;
        }
        return h;
    };
    return Math.max(calcHeight(red, blue), calcHeight(blue, red));
};
// @lc code=end

// TEST:
console.log(maxHeightOfTriangle(2, 4)); // 3
console.log(maxHeightOfTriangle(2, 1)); // 2
console.log(maxHeightOfTriangle(1, 1)); // 1
console.log(maxHeightOfTriangle(10, 1)); // 2
