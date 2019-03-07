/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let nodes = [];
  let node = root;
  while (node || nodes.length) {
    while (node.left) {
      if (node.right) {
        nodes.push(node.right);
      }
      node.right = node.left;
      node.left = null;
      node = node.right;
    }
    // 将node上所有左孩子都转换成了右孩子
    // 如果最后一个左孩子没有右孩子,则将最后一个弹出的右孩子指定给这个节点
    if (!node.right && nodes.length) {
      node.right = nodes.pop();
    }
    // node = node.right 最后一个左孩子的右孩子作为下一个node 执行下一次迭代
    node = node.right;
  }
};