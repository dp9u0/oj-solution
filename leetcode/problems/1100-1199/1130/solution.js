/*
 * @lc app=leetcode id=1130 lang=javascript
 *
 * [1130] Minimum Cost Tree From Leaf Values
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function(arr) {
    let result = 0;
    const stack = [Infinity];

    for (const num of arr) {
        while (stack[stack.length - 1] <= num) {
            const mid = stack.pop();
            result += mid * Math.min(stack[stack.length - 1], num);
        }
        stack.push(num);
    }

    while (stack.length > 2) {
        result += stack.pop() * stack[stack.length - 1];
    }

    return result;
};
// @lc code=end

// TEST:
console.log(mctFromLeafValues([6, 2, 4])); // 32
console.log(mctFromLeafValues([4, 11])); // 44
console.log(mctFromLeafValues([1, 2, 3, 4])); // 20
console.log(mctFromLeafValues([15, 13, 5, 3, 15])); // 500
