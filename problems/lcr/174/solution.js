/*
 * @lc app=leetcode.cn id=LCR 174 lang=javascript
 *
 * [LCR 174] 寻找二叉搜索树中的目标节点
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
 * @param {number} cnt
 * @return {number}
 */
var findTargetNode = function(root, cnt) {
    let count = 0;
    let result = null;

    function dfs(node) {
        if (!node || result !== null) return; // 已找到则剪枝
        dfs(node.right);   // 右-根-左,逆中序为降序
        if (result !== null) return;
        count++;
        if (count === cnt) {
            result = node.val;
            return;
        }
        dfs(node.left);
    }

    dfs(root);
    return result;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');

// 示例 1: [7,3,9,1,5], cnt=2 -> 7 (降序 9,7,5,3,1)
console.log(findTargetNode(arrayToTree([7,3,9,1,5]), 2) === 7);

// 示例 2: [10,5,15,2,7,null,20,1,null,6,8], cnt=4 -> 8 (降序 20,15,10,8,7,6,5,2,1)
console.log(findTargetNode(arrayToTree([10,5,15,2,7,null,20,1,null,6,8]), 4) === 8);

// cnt=1 取最大值: [7,3,9,1,5], cnt=1 -> 9
console.log(findTargetNode(arrayToTree([7,3,9,1,5]), 1) === 9);

// cnt=节点总数取最小值: [7,3,9,1,5], cnt=5 -> 1
console.log(findTargetNode(arrayToTree([7,3,9,1,5]), 5) === 1);

// 单节点: [1], cnt=1 -> 1
console.log(findTargetNode(arrayToTree([1]), 1) === 1);

// 左偏链(降序即右到左): [3,2,null,1], cnt=2 -> 2 (3,2,1)
console.log(findTargetNode(arrayToTree([3,2,null,1]), 2) === 2);

// 右偏链: [1,null,2,null,3], cnt=3 -> 1 (3,2,1)
console.log(findTargetNode(arrayToTree([1,null,2,null,3]), 3) === 1);

// 负值 BST: [-10,-3,0,5,9] 形状 [0,-3,9,-10,null,5] cnt=2 -> 5 (9,5,0,-3,-10)
console.log(findTargetNode(arrayToTree([0,-3,9,-10,null,5]), 2) === 5);
