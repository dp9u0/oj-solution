/*
 * @lc app=leetcode.cn id=LCR 050 lang=javascript
 *
 * [LCR 050] 路径总和 III
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    const prefixCount = new Map();
    prefixCount.set(0, 1);
    let count = 0;

    function dfs(node, curSum) {
        if (!node) return;
        curSum += node.val;
        // 存在某一祖先节点的前缀和为 curSum - targetSum，则该祖先到当前节点的和为 targetSum
        count += prefixCount.get(curSum - targetSum) || 0;
        prefixCount.set(curSum, (prefixCount.get(curSum) || 0) + 1);
        dfs(node.left, curSum);
        dfs(node.right, curSum);
        // 回溯：清除当前节点前缀和，避免影响兄弟子树
        prefixCount.set(curSum, prefixCount.get(curSum) - 1);
    }

    dfs(root, 0);
    return count;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');

// 示例 1: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8 -> 3
console.log(pathSum(arrayToTree([10,5,-3,3,2,null,11,3,-2,null,1]), 8));
console.log(3);

// 示例 2: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22 -> 3
console.log(pathSum(arrayToTree([5,4,8,11,null,13,4,7,2,null,null,5,1]), 22));
console.log(3);

// 空树: root = [], targetSum = 1 -> 0
console.log(pathSum(arrayToTree([]), 1));
console.log(0);

// 单节点命中: root = [1], targetSum = 1 -> 1
console.log(pathSum(arrayToTree([1]), 1));
console.log(1);

// 单节点未命中: root = [1], targetSum = 2 -> 0
console.log(pathSum(arrayToTree([1]), 2));
console.log(0);

// 负值节点组成的路径: root = [1,-2,-3,1,3,-2,null,-1], targetSum = -1 -> 4
console.log(pathSum(arrayToTree([1,-2,-3,1,3,-2,null,-1]), -1));
console.log(4);

// 全零链: root = [0,0,null,0] (链式 0-0-0), targetSum = 0
// 每个向下连续段和都为0: 3个单点 + 2个两点段 + 1个三点段 = 6
console.log(pathSum(arrayToTree([0,0,null,0]), 0));
console.log(6);
