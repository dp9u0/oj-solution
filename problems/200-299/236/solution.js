/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
let lowestCommonAncestor = function (root, p, q) {
  let solver = {
    pps: null,
    qps: null,
    parents: []
  };
  const bt = (node, solver) => {
    if (!node || (solver.pps && solver.qps)) return;
    solver.parents.push(node);
    if (node.val === p.val) {
      solver.pps = [...solver.parents];
    } else if (node.val === q.val) {
      solver.qps = [...solver.parents];
    }
    bt(node.left, solver);
    bt(node.right, solver);
    solver.parents.pop();
  }
  bt(root, solver);
  let i = 0;
  while (solver.pps[i] && solver.qps[i] && solver.pps[i].val === solver.qps[i].val) {
    i++;
  }
  return solver.pps[i - 1];
};

/**
// TEST: 
const {
  arrayToTree
} = require("./utils/arrayToTree");
let tree;
tree = arrayToTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
console.log(lowestCommonAncestor(tree, {
  val: 5
}, {
  val: 4
}).val);

console.log(lowestCommonAncestor(tree, {
  val: 5
}, {
  val: 1
}).val);
*/