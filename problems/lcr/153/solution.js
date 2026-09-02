/*
 * @lc app=leetcode.cn id=LCR 153 lang=javascript
 *
 * [LCR 153] 二叉树中和为目标值的路径
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
 * @param {number} target
 * @return {number[][]}
 */
var pathTarget = function(root, target) {
  const res = [];
  const path = [];

  // DFS + 回溯,收集所有 根->叶子 且和为 target 的路径
  const dfs = (node, sum) => {
    if (!node) return;
    path.push(node.val);
    sum += node.val;
    // 叶子且总和达标, 记录一条路径
    if (!node.left && !node.right && sum === target) {
      res.push(path.slice());
    } else {
      dfs(node.left, sum);
      dfs(node.right, sum);
    }
    // 回溯: 移除当前节点, 还原到父级状态
    path.pop();
  };

  dfs(root, 0);
  return res;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
const assert = require('assert');

// 示例 1: 标准树,两条达标路径
let t = arrayToTree([5,4,8,11,null,13,4,7,2,null,null,5,1].slice());
assert.deepStrictEqual(pathTarget(t, 22), [[5,4,11,2],[5,8,4,5]], 'case 1');

// 示例 2: 无达标路径
t = arrayToTree([1,2,3].slice());
assert.deepStrictEqual(pathTarget(t, 5), [], 'case 2');

// 示例 3: 达标和为目标但非叶子, 不算
t = arrayToTree([1,2].slice());
assert.deepStrictEqual(pathTarget(t, 0), [], 'case 3');

// 空树
assert.deepStrictEqual(pathTarget(null, 0), [], 'case 4');

// 单根节点即为叶子, 值与 target 相等
t = arrayToTree([7].slice());
assert.deepStrictEqual(pathTarget(t, 7), [[7]], 'case 5');

// 含负数: 根 5 走左叶 -1 得 4, 而直接到右叶 7 是 12, 排除
t = arrayToTree([5,-1,7].slice());
assert.deepStrictEqual(pathTarget(t, 4), [[5,-1]], 'case 6');

console.log('All test cases passed!');
