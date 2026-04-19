/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (!n) {
    return [];
  }
  let f = Array.from({
    length: n + 1
  }, x => []);
  for (let d = 0; d < n; d++) {
    for (let i = 1; i <= n - d; i++) {
      if (d === 0) {
        f[i][i] = [new TreeNode(i)];
      } else {
        let j = i + d;
        f[i][j] = [];
        for (let k = i; k <= j; k++) {
          let treeLeft = (k - 1 >= i) ? f[i][k - 1] : [null];
          let treeRight = (k + 1 <= j) ? f[k + 1][j] : [null];
          for (const left of treeLeft) {
            for (const right of treeRight) {
              let root = new TreeNode(k);
              root.left = left;
              root.right = right;
              f[i][j].push(root);
            }
          }
        }
      }
    }
  }
  return f[1][n];
};

/**
// TEST:
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
console.log(JSON.stringify(generateTrees(2)));
*/