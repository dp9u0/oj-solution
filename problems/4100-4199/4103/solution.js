/*
 * @lc app=leetcode.cn id=4103 lang=javascript
 *
 * [4103] 按类型和颜色删除元素
 */

// @lc code=start
/**
 * @param {number[]} types
 * @param {number[]} colors
 * @param {number[]} groupSize
 * @return {boolean}
 */
var canRemoveAll = function(types, colors, groupSize) {
    // 栈中每个元素: [type, color, count]
    const stack = [];
    for (let i = 0; i < types.length; i++) {
        const t = types[i];
        const c = colors[i];
        const top = stack[stack.length - 1];
        if (top && top[0] === t && top[1] === c) {
            top[2]++;
        } else {
            stack.push([t, c, 1]);
        }
        const run = stack[stack.length - 1];
        if (run[2] % groupSize[run[0]] === 0) stack.pop();
    }
    return stack.length === 0;
};
// @lc code=end

// TEST:
console.log(canRemoveAll([0, 1, 1, 0], [5, 3, 3, 5], [2, 2]) === true);
console.log(canRemoveAll([0, 1, 0], [9, 9, 9], [3, 2]) === false);
console.log(canRemoveAll([2, 0, 1, 2], [7, 5, 4, 7], [3, 1, 2]) === false);
console.log(canRemoveAll([0], [1], [1]) === true);
console.log(canRemoveAll([0, 0], [1, 2], [2]) === false);
console.log(canRemoveAll([0, 0, 0], [1, 1, 1], [2]) === false);
console.log(canRemoveAll([0, 1, 0], [5, 5, 5], [2, 1]) === true);
