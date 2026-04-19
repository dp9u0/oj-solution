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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  let nodes = [root];
  let children = [];
  while (nodes.length !== 0) {
    let xParent = null, yParent = null;
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      const { left, right } = node;
      if (left) {
        children.push(left);
        if (left.val === x) { xParent = node; }
        else if (left.val === y) { yParent = node; }
      }
      if (right) {
        if (right.val === x) { xParent = node; }
        else if (right.val === y) { yParent = node; }
        children.push(right);
      }
      if (xParent !== null && yParent !== null) return xParent !== yParent;
    }
    if (xParent !== null || yParent !== null) return false;
    nodes = children;
    children = [];
  }
  return false;
};

// TEST:
let { arrayToTree } = require("./utils/arrayToTree")
let root, x, y, result;
root = [1, 2, 3, 4], x = 4, y = 3
result = isCousins(arrayToTree(root), x, y)
console.log(result)

root = [1, 2, 3, null, 4, null, 5], x = 5, y = 4
result = isCousins(arrayToTree(root), x, y)
console.log(result)

root = [1, 2, 3, null, 4], x = 2, y = 3
result = isCousins(arrayToTree(root), x, y)
console.log(result)
