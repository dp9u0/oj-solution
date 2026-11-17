/*
 * @lc app=leetcode.cn id=255 lang=javascript
 *
 * [255] 验证二叉搜索树的前序遍历序列
 */

// @lc code=start
/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function(preorder) {
    const stack = [];
    let lower = -Infinity;
    for (const x of preorder) {
        if (x < lower) return false; // belongs to a finished left subtree
        while (stack.length && stack[stack.length - 1] < x) {
            lower = stack.pop(); // entering the right subtree of popped node
        }
        stack.push(x);
    }
    return true;
};
// @lc code=end

// TEST:
console.log(verifyPreorder([5, 2, 1, 3, 6])); // true
console.log(verifyPreorder([5, 2, 6, 1, 3])); // false
console.log(verifyPreorder([1])); // true
console.log(verifyPreorder([])); // true
console.log(verifyPreorder([3, 1, 2])); // true
console.log(verifyPreorder([2, 4, 1])); // false
