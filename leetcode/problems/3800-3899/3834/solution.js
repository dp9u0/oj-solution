/*
 * @lc app=leetcode id=3834 lang=javascript
 *
 * [3834] Merge Adjacent Equal Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var mergeAdjacent = function(nums) {
    const stack = [];
    for (const num of nums) {
        stack.push(num);
        while (stack.length >= 2 && stack[stack.length - 1] === stack[stack.length - 2]) {
            const sum = stack.pop() + stack.pop();
            stack.push(sum);
        }
    }
    return stack;
};
// @lc code=end

// TEST:
console.log(mergeAdjacent([3, 1, 1, 2])); // [3, 4]
console.log(mergeAdjacent([2, 2, 4])); // [8]
console.log(mergeAdjacent([3, 7, 5])); // [3, 7, 5]
console.log(mergeAdjacent([1, 1, 1, 1])); // [4]
