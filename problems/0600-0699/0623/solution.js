/*
 * @lc app=leetcode id=623 lang=javascript
 *
 * [623] Add One Row to Tree
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
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    if (depth === 1) {
        const newRoot = new TreeNode(val);
        newRoot.left = root;
        return newRoot;
    }

    const dfs = (node, d) => {
        if (!node) return;
        if (d === depth - 1) {
            const newLeft = new TreeNode(val, node.left, null);
            const newRight = new TreeNode(val, null, node.right);
            node.left = newLeft;
            node.right = newRight;
            return;
        }
        dfs(node.left, d + 1);
        dfs(node.right, d + 1);
    };

    dfs(root, 1);
    return root;
};
// @lc code=end

// TEST:
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
const { arrayToTree, treeToArray } = require('./utils/arrayToTree');
console.log(JSON.stringify(treeToArray(addOneRow(arrayToTree([4,2,6,3,1,5]), 1, 2))));
// [4,1,1,2,null,null,6,3,1,5]
console.log(JSON.stringify(treeToArray(addOneRow(arrayToTree([4,2,null,3,1]), 1, 3))));
// [4,2,null,1,1,3,null,null,1]
console.log(JSON.stringify(treeToArray(addOneRow(arrayToTree([4,2,6,3,1,5]), 1, 1))));
// [1,4,null,2,6,3,1,5]
