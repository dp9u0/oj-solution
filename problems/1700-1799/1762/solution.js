/*
 * @lc app=leetcode.cn id=1762 lang=javascript
 *
 * [1762] 能看到海景的建筑物
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    const res = [];
    let max = 0; // heights >= 1, so the rightmost always qualifies
    for (let i = heights.length - 1; i >= 0; i--) {
        if (heights[i] > max) {
            res.push(i);
            max = heights[i];
        }
    }
    return res.reverse();
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findBuildings([4,2,3,1]))); // [0,2,3]
console.log(JSON.stringify(findBuildings([4,3,2,1]))); // [0,1,2,3]
console.log(JSON.stringify(findBuildings([1,3,2,4]))); // [3]
console.log(JSON.stringify(findBuildings([2,2,2,2]))); // [3]
