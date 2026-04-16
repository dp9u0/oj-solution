/*
 * @lc app=leetcode id=998 lang=javascript
 *
 * [998] Maximum Binary Tree II
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoMaxTree = function(root, val) {
    if (!root) return new TreeNode(val);
    if (val > root.val) {
        let node = new TreeNode(val);
        node.left = root;
        return node;
    }
    root.right = insertIntoMaxTree(root.right, val);
    return root;
};
// @lc code=end

// TEST:
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
let { arrayToTree, treeToArray } = require('./utils/arrayToTree');
console.log(JSON.stringify(treeToArray(insertIntoMaxTree(arrayToTree([4,1,3,null,null,2]), 5))));
console.log(JSON.stringify(treeToArray(insertIntoMaxTree(arrayToTree([5,2,4,null,1]), 3))));
console.log(JSON.stringify(treeToArray(insertIntoMaxTree(arrayToTree([5,2,3,null,1]), 4))));
