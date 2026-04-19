/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  let solver = [];
  preorderRec(root, solver);
  return solver;
};

function preorderRec(node, solver) {
  if (!node) {
    return;
  }
  solver.push(node.val);
  node.children.forEach(element => {
    preorderRec(element, solver);
  });
}