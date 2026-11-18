/*
 * @lc app=leetcode.cn id=545 lang=javascript
 *
 * [545] 二叉树的边界
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
 * @return {number[]}
 */
var boundaryOfBinaryTree = function(root) {
    if (!root) return [];
    const isLeaf = n => !n.left && !n.right;
    const res = [root.val];
    if (isLeaf(root)) return res;

    // left boundary (non-leaf nodes, prefer left child)
    let cur = root.left;
    while (cur) {
        if (!isLeaf(cur)) res.push(cur.val);
        cur = cur.left ? cur.left : cur.right;
    }

    // all leaves left to right
    const addLeaves = node => {
        if (!node) return;
        if (isLeaf(node)) { res.push(node.val); return; }
        addLeaves(node.left);
        addLeaves(node.right);
    };
    addLeaves(root);

    // right boundary (non-leaf, bottom-to-top via stack)
    const stack = [];
    cur = root.right;
    while (cur) {
        if (!isLeaf(cur)) stack.push(cur.val);
        cur = cur.right ? cur.right : cur.left;
    }
    while (stack.length) res.push(stack.pop());
    return res;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');

console.log(boundaryOfBinaryTree(arrayToTree([1, null, 2, 3, 4]))); // [1,3,4,2]
console.log(boundaryOfBinaryTree(arrayToTree([1, 2, 3, 4, 5, 6, null, null, null, 7, 8, 9, 10]))); // [1,2,4,7,8,9,10,6,3]
console.log(boundaryOfBinaryTree(arrayToTree([1]))); // [1]
console.log(boundaryOfBinaryTree(arrayToTree([1, 2]))); // [1,2]
console.log(boundaryOfBinaryTree(arrayToTree([1, null, 2]))); // [1,2]
