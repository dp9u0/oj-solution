/*
 * @lc app=leetcode id=1123 lang=javascript
 *
 * [1123] Lowest Common Ancestor of Deepest Leaves
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
var lcaDeepestLeaves = function(root) {
    const helper = (node, depth) => {
        if (!node) return { node: null, depth };

        const left = helper(node.left, depth + 1);
        const right = helper(node.right, depth + 1);

        if (left.depth > right.depth) return left;
        if (right.depth > left.depth) return right;
        return { node, depth: left.depth };
    };

    return helper(root, 0).node;
};
// @lc code=end

// TEST:
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

function buildTree(arr) {
    if (!arr.length) return null;
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
    while (i < arr.length) {
        const node = queue.shift();
        if (arr[i] !== null && arr[i] !== undefined) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    return root;
}

console.log(lcaDeepestLeaves(buildTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])).val);
// Expected: 2

console.log(lcaDeepestLeaves(buildTree([1])).val);
// Expected: 1

console.log(lcaDeepestLeaves(buildTree([0, 1, 3, null, 2])).val);
// Expected: 2
