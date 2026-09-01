/*
 * @lc app=leetcode id=946 lang=javascript
 *
 * [946] Validate Stack Sequences
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    const stack = [];
    let j = 0;
    for (const x of pushed) {
        stack.push(x);
        while (stack.length > 0 && stack[stack.length - 1] === popped[j]) {
            stack.pop();
            j++;
        }
    }
    return stack.length === 0;
};
// @lc code=end

// TEST:
console.log(validateStackSequences([1,2,3,4,5], [4,5,3,2,1])); // true
console.log(validateStackSequences([1,2,3,4,5], [4,3,5,1,2])); // false
console.log(validateStackSequences([1], [1])); // true
