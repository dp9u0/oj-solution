/*
 * @lc app=leetcode id=450 lang=javascript
 *
 * [450] Delete Node in a BST
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (!root) return null;

  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    if (!root.left) return root.right;
    if (!root.right) return root.left;

    let successor = root.right;
    while (successor.left) successor = successor.left;
    root.val = successor.val;
    root.right = deleteNode(root.right, successor.val);
  }

  return root;
};
// @lc code=end

const { arrayToTree } = require('./utils/arrayToTree');

// TEST:
const treeToStr = (node) => {
  if (!node) return 'null';
  const queue = [node];
  const result = [];
  while (queue.length) {
    const cur = queue.shift();
    if (cur) {
      result.push(cur.val);
      queue.push(cur.left, cur.right);
    } else {
      result.push('null');
    }
  }
  while (result[result.length - 1] === 'null') result.pop();
  return `[${result.join(',')}]`;
};

console.log(treeToStr(deleteNode(arrayToTree([5, 3, 6, 2, 4, null, 7]), 3)));
// [5,4,6,2,null,null,7]
console.log(treeToStr(deleteNode(arrayToTree([5, 3, 6, 2, 4, null, 7]), 0)));
// [5,3,6,2,4,null,7]
console.log(treeToStr(deleteNode(null, 0)));
// []
console.log(treeToStr(deleteNode(arrayToTree([5, 3, 6, 2, 4, null, 7]), 5)));
// [6,3,7,2,4] or [4,3,6,2,null,null,7]
