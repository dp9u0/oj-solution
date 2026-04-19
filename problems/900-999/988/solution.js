/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */

var smallestFromLeaf = function (root) {
  const charCodeOfA = 'a'.charCodeAt(0);
  const dfs = (node) => {
    if (!node) {
      return ''
    };
    let left = dfs(node.left);
    let right = dfs(node.right) || left;
    return ((!left || left > right) ? right : left) + String.fromCharCode(node.val + charCodeOfA);
  }
  return dfs(root);
};

console.log('' > "abc");