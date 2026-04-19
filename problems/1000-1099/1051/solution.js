/*
 * @lc app=leetcode id=1051 lang=javascript
 *
 * [1051] Height Checker
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */

var heightChecker = function(heights) {
    let expected = [...heights].sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) {
            count++;
        }
    }
    return count;
};
// @lc code=end
// TEST:
console.assert(heightChecker([1,1,4,2,1,3]) === 3, 'Test Case 1 Failed');
console.assert(heightChecker([5,1,2,3,4]) === 5, 'Test Case 2 Failed');
console.assert(heightChecker([1,2,3,4,5]) === 0, 'Test Case 3 Failed');
console.assert(heightChecker([1,1,1,1,1]) === 0, 'Test Case 4 Failed');
console.assert(heightChecker([2,1,2,1,2,1]) === 3, 'Test Case 5 Failed');

console.log('All test cases pass');
