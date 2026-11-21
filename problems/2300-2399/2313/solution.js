/*
 * @lc app=leetcode.cn id=2313 lang=javascript
 *
 * [2313] 二叉树中得到结果所需的最少翻转次数
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
 * @param {boolean} result
 * @return {number}
 */
var minimumFlips = function(root, result) {
    const cost = new Map(); // node -> [costFalse, costTrue]
    const stack = [{ node: root, state: 0 }];
    while (stack.length) {
        const top = stack[stack.length - 1];
        const { node, state } = top;
        if (node === null) {
            stack.pop();
            continue;
        }
        const isLeaf = !node.left && !node.right;
        if (isLeaf) {
            const c0 = node.val === 0 ? 0 : 1;
            cost.set(node, [c0, 1 - c0]);
            stack.pop();
            continue;
        }
        if (state === 0) {
            top.state = 1;
            stack.push({ node: node.left, state: 0 });
            stack.push({ node: node.right, state: 0 });
        } else {
            stack.pop();
            const L = cost.get(node.left);
            const R = node.right ? cost.get(node.right) : null;
            let c0, c1;
            switch (node.val) {
                case 5: { // NOT: single child (either side)
                    const C = cost.get(node.left || node.right);
                    c0 = C[1];
                    c1 = C[0];
                    break;
                }
                case 2: { // OR
                    c0 = L[0] + R[0];
                    c1 = Math.min(L[1] + R[0], L[0] + R[1], L[1] + R[1]);
                    break;
                }
                case 3: { // AND
                    c0 = Math.min(L[0] + R[0], L[0] + R[1], L[1] + R[0]);
                    c1 = L[1] + R[1];
                    break;
                }
                default: { // XOR (4)
                    c0 = Math.min(L[0] + R[0], L[1] + R[1]);
                    c1 = Math.min(L[0] + R[1], L[1] + R[0]);
                }
            }
            cost.set(node, [c0, c1]);
        }
    }
    return result ? cost.get(root)[1] : cost.get(root)[0];
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
console.log(minimumFlips(arrayToTree([3,5,4,2,null,1,1,1,0]), true)); // 2
console.log(minimumFlips(arrayToTree([0]), false)); // 0
console.log(minimumFlips(arrayToTree([5,1]), true)); // 1 (flip leaf 1 -> NOT(0)=true)
console.log(minimumFlips(arrayToTree([2,1,1]), true)); // 0 (1 OR 1 = true)
console.log(minimumFlips(arrayToTree([3,1,0]), true)); // 1 (1 AND 0 = false; flip 0 -> true: 1 flip)
