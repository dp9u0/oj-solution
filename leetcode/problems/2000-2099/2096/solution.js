/*
 * @lc app=leetcode id=2096 lang=javascript
 *
 * [2096] Step-By-Step Directions From a Binary Tree Node to Another
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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
    const findPath = (node, target, path) => {
        if (!node) return false;
        if (node.val === target) return true;
        if (node.left) {
            path.push('L');
            if (findPath(node.left, target, path)) return true;
            path.pop();
        }
        if (node.right) {
            path.push('R');
            if (findPath(node.right, target, path)) return true;
            path.pop();
        }
        return false;
    };

    const startPath = [], destPath = [];
    findPath(root, startValue, startPath);
    findPath(root, destValue, destPath);

    let i = 0;
    while (i < startPath.length && i < destPath.length && startPath[i] === destPath[i]) i++;

    return 'U'.repeat(startPath.length - i) + destPath.slice(i).join('');
};
// @lc code=end

// TEST:
// Need to build tree manually for testing
// [5,1,2,3,null,6,4], startValue=3, destValue=6 => "UURL"
// [2,1], startValue=2, destValue=1 => "L"
