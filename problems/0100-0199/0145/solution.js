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
var postorderTraversal = function (root) {
    let stack = [];
    let result = []
    let node = root;
    while (node) {
        const { left, right, val } = node;
        left && stack.push(left);
        right && stack.push(right);       
        result.unshift(val);
        node = stack.pop();
    }
    return result;
};

// TEST:
let { arrayToTree } = require("./utils/arrayToTree");
let array = [1, null, 2, 3];
let root = arrayToTree(array);
console.log(postorderTraversal(root))
