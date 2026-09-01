/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function (root) {
  const calcHeight = (node) => {
    return node ? Math.max(calcHeight(node.left), calcHeight(node.right)) + 1 : 0;
  }
  const fill = (rows, node, r, s, e) => {
    if (!node) return;
    let i = ~~((s + e) / 2);
    rows[r][i] = '' + node.val;
    fill(rows, node.left, r + 1, s, i - 1);
    fill(rows, node.right, r + 1, i + 1, e);
  }
  let h = calcHeight(root);
  let l = Math.pow(2, h - 1) * 2 - 1;
  let rows = Array.from({
    length: h
  }, () => new Array(l).fill(''));
  fill(rows, root, 0, 0, l - 1);
  return rows;
};

/**
// TEST:
let {
  arrayToTree
} = require("./utils/arrayToTree")
let tree = arrayToTree([1, 2, 3, null, 4]);
let result = printTree(tree);
console.log(result);
*/