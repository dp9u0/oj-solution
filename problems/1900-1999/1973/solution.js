/*
 * @lc app=leetcode.cn id=1973 lang=javascript
 *
 * [1973] 值等于子节点值之和的节点数量
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
 * @return {number}
 */
var equalToDescendants = function(root) {
    let count = 0;
    const stack = [{ node: root, state: 0 }];
    while (stack.length) {
        const top = stack[stack.length - 1];
        const { node, state } = top;
        if (node === null) {
            stack.pop();
            continue;
        }
        if (state === 0) {
            top.state = 1;
            stack.push({ node: node.left, state: 0 });
        } else if (state === 1) {
            top.state = 2;
            stack.push({ node: node.right, state: 0 });
        } else {
            stack.pop();
            node.sum = node.val
                + (node.left ? node.left.sum : 0)
                + (node.right ? node.right.sum : 0);
            if (node.val === node.sum - node.val) count++;
        }
    }
    return count;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
console.log(equalToDescendants(arrayToTree([10,3,4,2,1]))); // 2
console.log(equalToDescendants(arrayToTree([2,3,null,2,null]))); // 0
console.log(equalToDescendants(arrayToTree([0]))); // 1
console.log(equalToDescendants(arrayToTree([1,2,3]))); // 0
console.log(equalToDescendants(arrayToTree([4,2,2]))); // 1 (only root 4 == 2+2)
