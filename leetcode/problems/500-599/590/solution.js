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
var postorder = function(root) {
  let solver = [];
  postorderRec(root, solver);
  return solver;
};

function postorderRec(node, solver) {
  if (!node) {
    return;
  }
  node.children.forEach(element => {
    postorderRec(element, solver);
  });
  solver.push(node.val);
}