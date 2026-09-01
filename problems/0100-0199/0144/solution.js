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
var preorderTraversal = function (root) {
    let stack = [];
    let result = []
    let node = root;
    while (node) {
        const { left, right, val } = node;     
        right && stack.push(right);
        left && stack.push(left);
        result.push(val);
        node = stack.pop();
    }
    return result;
};

// TEST:
console.log(preorderTraversal())