/*
 * @lc app=leetcode id=3074 lang=javascript
 *
 * [3074] Apple Redistribution into Boxes
 */

// @lc code=start
/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    let total = apple.reduce((a, b) => a + b, 0);
    capacity.sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < capacity.length; i++) {
        sum += capacity[i];
        if (sum >= total) return i + 1;
    }
    return capacity.length;
};
// @lc code=end

// TEST:
console.log(minimumBoxes([1,3,2], [4,3,1,5,2])); // 2
console.log(minimumBoxes([5,5,5], [2,4,2,7])); // 4
