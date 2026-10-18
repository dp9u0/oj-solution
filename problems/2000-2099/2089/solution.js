/*
 * @lc app=leetcode.cn id=2089 lang=javascript
 *
 * [2089] 找出数组排序后的目标下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let less = 0;
    let equal = 0;
    for (const num of nums) {
        if (num < target) less++;
        else if (num === target) equal++;
    }
    const result = [];
    for (let i = 0; i < equal; i++) {
        result.push(less + i);
    }
    return result;
};
// @lc code=end

// TEST:
console.log(targetIndices([1, 2, 5, 2, 3], 2)); // [1, 2]
console.log(targetIndices([1, 2, 5, 2, 3], 3)); // [3]
console.log(targetIndices([1, 2, 5, 2, 3], 5)); // [4]
console.log(targetIndices([1, 2, 5, 2, 3], 4)); // []
console.log(targetIndices([7], 7)); // [0]
console.log(targetIndices([2, 2, 2, 2], 2)); // [0, 1, 2, 3]
console.log(targetIndices([3, 1, 2], 6)); // []
