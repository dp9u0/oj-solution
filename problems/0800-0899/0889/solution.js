/*
 * @lc app=leetcode id=889 lang=javascript
 *
 * [889] Construct Binary Tree from Preorder and Postorder Traversal
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
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
  const postIdx = new Map();
  for (let i = 0; i < postorder.length; i++) {
    postIdx.set(postorder[i], i);
  }

  const build = (preStart, preEnd, postStart, postEnd) => {
    if (preStart > preEnd) return null;
    const root = new TreeNode(preorder[preStart]);
    if (preStart === preEnd) return root;

    const leftRootVal = preorder[preStart + 1];
    const leftSize = postIdx.get(leftRootVal) - postStart + 1;

    root.left = build(preStart + 1, preStart + leftSize, postStart, postStart + leftSize - 1);
    root.right = build(preStart + leftSize + 1, preEnd, postStart + leftSize, postEnd - 1);

    return root;
  };

  return build(0, preorder.length - 1, 0, postorder.length - 1);
};
// @lc code=end

// TEST:
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

const treeToArray = (root) => {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      result.push(node.val);
      queue.push(node.left, node.right);
    } else {
      result.push(null);
    }
  }
  while (result[result.length - 1] === null) result.pop();
  return result;
};

console.log(JSON.stringify(treeToArray(constructFromPrePost([1,2,4,5,3,6,7], [4,5,2,6,7,3,1])))); // [1,2,3,4,5,6,7]
console.log(JSON.stringify(treeToArray(constructFromPrePost([1], [1])))); // [1]
