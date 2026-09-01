/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} voyage
 * @return {number[]}
 */
var flipMatchVoyage = function (root, voyage) {
  let results = [];
  const process = (node) => {
    if (!node) return true;
    if (node.val !== voyage.shift()) return false;
    if (node.left && node.left.val !== voyage[0]) {
      results.push(node.val);
      return process(node.right) && process(node.left);
    }
    return process(node.left) && process(node.right);
  }
  return process(root) ? results : [-1];
};

/**
// TEST:

let {
  arrayToTree
} = require('./utils/arrayToTree');

let tree = null;
tree = arrayToTree([8, 9, 4, 12, 46, 7, 14, 48, 29, 6, 37, 10, null, null, 15, 26, 3, 50, 42, 45, null,
  17, 40, null, null, 18, null, null, 25, 11, 31, 41, null, null, null, 1, null, null, null, 22, 19, null,
  null, null, null, 13, null, null, null, null, 34, null, null, 27, null, 23, null, 28, 38, null, null,
  33, null, 16, 20, null, null, 43, null, 44, 35, 5, 49, 21, 36, 24, null, 2, 47, null, null, null,
  null, null, 39, null, null, null, null, null, null, null, 32, null, 30
]);
console.log(flipMatchVoyage(tree, [8, 9, 12, 29, 42, 50, 41, 34, 48, 26, 25,
  49, 31, 11, 13, 38, 43, 24, 28, 46, 6, 45, 1, 37, 40, 22, 27, 33, 44, 47, 30, 2,
  32, 35, 19, 23, 16, 5, 3, 39, 20, 36, 21, 17, 4, 14, 15, 18, 7, 10
]));

tree = arrayToTree([1, 2, 3]);
console.log(flipMatchVoyage(tree, [1, 3, 2]));
*/