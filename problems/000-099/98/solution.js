/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  let nodes = [];
  let preNodeVal = -Infinity;
  let p = root;
  while (p || nodes.length) {
    while (p) {
      nodes.push(p);
      p = p.left;
    }
    if (nodes.length) {
      p = nodes.pop();
      if (p.val <= preNodeVal) {
        return false;
      }
      // console.log(`${preNodeVal}, ${p.val}`);
      preNodeVal = p.val;
      p = p.right;
    }
  }
  return true;
};

/**
// TEST:

let {
  arrayToTree
} = require("./utils/arrayToTree")
let array = [5, 1, 4, null, null, 3, 6]
let root = arrayToTree(array);
console.log(isValidBST(root));
*/