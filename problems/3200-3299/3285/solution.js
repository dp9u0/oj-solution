/*
 * @lc app=leetcode id=3285 lang=javascript
 *
 * [3285] Find Indices of Stable Mountains
 */

// @lc code=start
/**
 * @param {number[]} height
 * @param {number} threshold
 * @return {number[]}
 */
var stableMountains = function(height, threshold) {
    let result = [];
    for (let i = 1; i < height.length; i++) {
        if (height[i - 1] > threshold) result.push(i);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(stableMountains([1,2,3,4,5], 2))); // [3,4]
console.log(JSON.stringify(stableMountains([10,1,10,1,10], 3))); // [1,3]
console.log(JSON.stringify(stableMountains([10,1,10,1,10], 10))); // []
