/*
 * @lc app=leetcode.cn id=LCR 054 lang=javascript
 *
 * [LCR 054] 把二叉搜索树转换为累加树
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
var convertBST = function(root) {
  let sum = 0;

  function traverse(node) {
    if (node === null) {
      return;
    }
    traverse(node.right);
    sum += node.val;
    node.val = sum;
    traverse(node.left);
  }

  traverse(root);
  return root;
};
// @lc code=end

// TEST:
const { arrayToTree } = require('./utils/arrayToTree');
function toArray(root) {
  if (root === null) return [];
  const res = [];
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node === null) {
      res.push(null);
      continue;
    }
    res.push(node.val);
    queue.push(node.left);
    queue.push(node.right);
  }
  while (res.length > 0 && res[res.length - 1] === null) res.pop();
  return res;
}

// 示例 1
console.log(JSON.stringify(toArray(convertBST(arrayToTree([4,1,6,0,2,5,7,null,null,null,3,null,null,null,8])))));
console.log(JSON.stringify([30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]));

// 示例 2
console.log(JSON.stringify(toArray(convertBST(arrayToTree([0,null,1])))));
console.log(JSON.stringify([1,null,1]));

// 示例 3
console.log(JSON.stringify(toArray(convertBST(arrayToTree([1,0,2])))));
console.log(JSON.stringify([3,3,2]));

// 示例 4
console.log(JSON.stringify(toArray(convertBST(arrayToTree([3,2,4,1])))));
console.log(JSON.stringify([7,9,4,10]));

// 单节点
console.log(JSON.stringify(toArray(convertBST(arrayToTree([5])))));
console.log(JSON.stringify([5]));

// 空树
console.log(JSON.stringify(toArray(convertBST(arrayToTree([])))));
console.log(JSON.stringify([]));
