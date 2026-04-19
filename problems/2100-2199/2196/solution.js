/*
 * @lc app=leetcode id=2196 lang=javascript
 *
 * [2196] Create Binary Tree From Descriptions
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
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    const nodes = new Map();
    const children = new Set();

    const getNode = (val) => {
        if (!nodes.has(val)) nodes.set(val, new TreeNode(val));
        return nodes.get(val);
    };

    for (const [parentVal, childVal, isLeft] of descriptions) {
        const parent = getNode(parentVal);
        const child = getNode(childVal);
        if (isLeft === 1) parent.left = child;
        else parent.right = child;
        children.add(childVal);
    }

    for (const [val] of nodes) {
        if (!children.has(val)) return nodes.get(val);
    }
    return null;
};
// @lc code=end

// TEST:
function TreeNode(val, left, right) { this.val = (val === undefined ? 0 : val); this.left = (left === undefined ? null : left); this.right = (right === undefined ? null : right); }
const { arrayToTree, treeToArray } = require('./utils/arrayToTree');
const res1 = createBinaryTree([[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]);
console.log(treeToArray(res1)); // [50,20,80,15,17,19]
const res2 = createBinaryTree([[1,2,1],[2,3,0],[3,4,1]]);
console.log(treeToArray(res2)); // [1,2,null,null,3,4]
