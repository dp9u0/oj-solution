/*
 * @lc app=leetcode id=865 lang=javascript
 *
 * [865] Smallest Subtree with all the Deepest Nodes
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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
    const dfs = (node) => {
        if (!node) return { depth: 0, node: null };
        const left = dfs(node.left);
        const right = dfs(node.right);
        if (left.depth > right.depth) {
            return { depth: left.depth + 1, node: left.node };
        }
        if (right.depth > left.depth) {
            return { depth: right.depth + 1, node: right.node };
        }
        return { depth: left.depth + 1, node: node };
    };
    return dfs(root).node;
};
// @lc code=end

// TEST:
const { arrayToTree, treeToArray } = require('./utils/arrayToTree');
console.log(treeToArray(subtreeWithAllDeepest(arrayToTree([3,5,1,6,2,0,8,null,null,7,4])))); // [2,7,4]
console.log(treeToArray(subtreeWithAllDeepest(arrayToTree([1])))); // [1]
console.log(treeToArray(subtreeWithAllDeepest(arrayToTree([0,1,3,null,2])))); // [2]
