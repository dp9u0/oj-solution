/*
 * @lc app=leetcode id=3542 lang=javascript
 *
 * [3542] Minimum Operations to Convert All Elements to Zero
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const stack = [];
    let ops = 0;
    for (const val of nums) {
        if (val === 0) {
            ops += stack.length;
            stack.length = 0;
        } else {
            while (stack.length > 0 && stack[stack.length - 1] > val) {
                stack.pop();
                ops++;
            }
            if (stack.length === 0 || stack[stack.length - 1] < val) {
                stack.push(val);
            }
        }
    }
    ops += stack.length;
    return ops;
};
// @lc code=end

// TEST:
console.log(minOperations([0, 2]));             // 1
console.log(minOperations([3, 1, 2, 1]));       // 3
console.log(minOperations([1, 2, 1, 2, 1, 2])); // 4
