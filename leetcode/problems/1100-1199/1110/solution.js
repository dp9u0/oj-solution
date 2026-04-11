/*
 * @lc app=leetcode id=1110 lang=javascript
 *
 * [1110] Delete Nodes And Return Forest
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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    const deleteSet = new Set(to_delete);
    const result = [];

    const dfs = (node, isRoot) => {
        if (!node) return null;
        const deleted = deleteSet.has(node.val);
        if (isRoot && !deleted) {
            result.push(node);
        }
        node.left = dfs(node.left, deleted);
        node.right = dfs(node.right, deleted);
        return deleted ? null : node;
    };

    dfs(root, true);
    return result;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');

const forest1 = delNodes(arrayToTree([1,2,3,4,5,6,7]), [3,5]);
console.log(JSON.stringify(forest1)); // [[1,2,null,4],[6],[7]]

const forest2 = delNodes(arrayToTree([1,2,4,null,3]), [3]);
console.log(JSON.stringify(forest2)); // [[1,2,4]]

const forest3 = delNodes(arrayToTree([1,2,3,null,null,null,4]), [2,1]);
console.log(JSON.stringify(forest3)); // [[3,null,4]]
