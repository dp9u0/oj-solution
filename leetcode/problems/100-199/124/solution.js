/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = -Infinity;
  const maxPath = (node) => {
    if (!node) return 0;
    let leftMaxSum = maxPath(node.left);
    let rightMaxSum = maxPath(node.right);
    // 经过该节点的最大路径.
    let maxSumPath = node.val;
    if (leftMaxSum >= 0) {
      maxSumPath += leftMaxSum
    }
    if (rightMaxSum >= 0) {
      maxSumPath += rightMaxSum
    }
    max = Math.max(max, maxSumPath);
    // 如果父节点选择经过当前node,node最大的sum
    let result = Math.max(leftMaxSum, rightMaxSum);
    if (result >= 0) {
      result += node.val;
    } else {
      result = node.val;
    }
    return result;
  }
  maxPath(root);
  return max;
};


/**
// TEST:


let {
  arrayToTree
} = require("./utils/arrayToTree")
let root;

// test case :
root = arrayToTree([-10, 9, 20, null, null, 15, 7])
console.log(maxPathSum(root));
*/