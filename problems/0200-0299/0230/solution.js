/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const dfs = (node, kc) => {
    let ci = {
      count: 0,
      val: null
    };
    if (!node) {
      return ci;
    }
    let li = dfs(node.left, kc);
    if (li.val !== null) {
      return li;
    }
    if ((li.count + 1) === kc) {
      ci.val = node.val;
      return ci;
    }
    let ri = dfs(node.right, kc - li.count - 1);
    if (ri.val !== null) {
      return ri;
    }
    ci.count = li.count + ri.count + 1;
    return ci;
  }
  return dfs(root, k).val;
};


/**
// TEST:
let {
  arrayToTree
} = require("./utils/arrayToTree")

let tree;
tree = arrayToTree([5, 3, 6, 2, 4, null, null, 1]);
console.log(kthSmallest(tree, 3))
*/