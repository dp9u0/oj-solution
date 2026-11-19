/*
 * @lc app=leetcode.cn id=1214 lang=javascript
 *
 * [1214] 查找两棵二叉搜索树之和
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @param {number} target
 * @return {boolean}
 */
var twoSumBSTs = function(root1, root2, target) {
    const inOrder = (node, out) => {
        if (!node) return;
        inOrder(node.left, out);
        out.push(node.val);
        inOrder(node.right, out);
    };
    const a1 = [], a2 = [];
    inOrder(root1, a1);
    inOrder(root2, a2);

    let i = 0, j = a2.length - 1;
    while (i < a1.length && j >= 0) {
        const s = a1[i] + a2[j];
        if (s === target) return true;
        if (s < target) i++;
        else j--;
    }
    return false;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
console.log(twoSumBSTs(arrayToTree([2,1,4]), arrayToTree([1,0,3]), 5)); // true
console.log(twoSumBSTs(arrayToTree([0,-10,10]), arrayToTree([5,1,7,0,2]), 18)); // false
console.log(twoSumBSTs(arrayToTree([1]), arrayToTree([1]), 2)); // true
console.log(twoSumBSTs(arrayToTree([-5,-7,-3]), arrayToTree([8,6,9]), 1)); // true (-7 + 8)
console.log(twoSumBSTs(arrayToTree([10]), arrayToTree([1,0,2]), 5)); // false
