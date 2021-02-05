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
 * @return {number}
 */
var rob = function (root) {
  return Math.max(...dfs(root))
};

const dfs = (node) => {
  if (!node) return [0, 0]; // 0 代表不偷该节点最大值 1 代表偷该节点最大值
  const lefts = dfs(node.left);
  const rights = dfs(node.right);
  return [
    Math.max(...lefts) + Math.max(...rights),
    node.val + lefts[0] + rights[0] // 偷该节点最大值 = val + 不偷left的最大值 + 不偷 right 的最大值
  ];
}

// TEST:
const { arrayToTree } = require("./utils/arrayToTree");
let array, result;

array = [3, 2, 3, null, 3, null, 1];
result = rob(arrayToTree(array));
console.log(result);

array = [3, 4, 5, 1, 3, null, 1];
result = rob(arrayToTree(array));
console.log(result);


array = [41, 37, 44, 24, 39, 42, 48, 1, 35, 38, 40, null, 43, 46, 49, 0, 2, 30, 36, null, null, null,
  null, null, null, 45, 47, null, null, null, null, null, 4, 29, 32, null, null, null, null, null, null,
  3, 9, 26, null, 31, 34, null, null, 7, 11, 25, 27, null, null, 33, null, 6, 8, 10, 16, null, null, null,
  28, null, null, 5, null, null, null, null, null, 15, 19,
  null, null, null, null, 12, null, 18, 20, null, 13, 17, null, null, 22, null, 14, null, null, 21, 23]
result = rob(arrayToTree(array));
console.log(result);