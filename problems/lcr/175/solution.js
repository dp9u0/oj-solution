/*
 * @lc app=leetcode.cn id=LCR 175 lang=javascript
 *
 * [LCR 175] 计算二叉树的深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var calculateDepth = function(root) {
    if (root === null) {
        return 0;
    }
    return 1 + Math.max(calculateDepth(root.left), calculateDepth(root.right));
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
function test(input, expected) {
    const tree = arrayToTree(input.slice());
    const result = calculateDepth(tree);
    console.log(`${JSON.stringify(input)} -> ${result} ${result === expected ? 'PASS' : `FAIL (expected ${expected})`}`);
}
test([1, 2, 2, 3, null, null, 5, 4, null, null, 4], 4);
test([], 0);
test([3, 9, 20, null, null, 15, 7], 3);
test([1, null, 2], 2);
test([1, 2, 3, 4, 5], 3);
test([1], 1);
