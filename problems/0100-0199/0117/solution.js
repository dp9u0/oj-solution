/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root) {
    let nodes = [root];
    let hasNextLevels = true;
    while (hasNextLevels) {
      hasNextLevels = false;
      let nextLevelNodes = [];
      while (nodes.length) {
        let node = nodes.shift();
        node.next = nodes.length ? nodes[0] : null;
        if (node.left) {
          nextLevelNodes.push(node.left);
          hasNextLevels = true;
        }
        if (node.right) {
          nextLevelNodes.push(node.right);
          hasNextLevels = true;
        }
      }
      nodes = nextLevelNodes;
    }
  }
  return root;
};