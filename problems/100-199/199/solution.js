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
var rightSideView = function (root) {
    if (!root) return []
    let nodes = [root];
    let result = [];
    while (nodes.length) {
        let next = []
        result.push(nodes[nodes.length - 1].val);
        nodes.forEach(({ left, right }) => {
            left && next.push(left);
            right && next.push(right);
        });
        nodes = next;
    }
    return result;
};

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
let root = arrayToTree([1, 2, 3, null, 5, null, 4])
console.log(rightSideView(root));
