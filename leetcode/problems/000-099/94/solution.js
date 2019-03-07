/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let traverse = [];
  if (root) {
    let nodes = [];
    let p = root;
    while (p || nodes.length) {
      while (p) {
        nodes.push(p);
        p = p.left;
      }
      if (nodes.length) {
        p = nodes.pop();
        traverse.push(p.val);
        p = p.right;
      }
    }
  }
  return traverse;
};

/**
// TEST:

let {
  arrayToTree
} = require("./utils/arrayToTree")
let array = [1, null, 2, 3]
let root = arrayToTree(array);
console.log(inorderTraversal(root));
*/