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
      hasNextLevels = nodes[0].left !== null;
      let nextLevelNodes = [];
      while (nodes.length) {
        let node = nodes.shift();
        node.next = nodes.length ? nodes[0] : null;
        nextLevelNodes.push(node.left);
        nextLevelNodes.push(node.right);
      }
      nodes = nextLevelNodes;
    }
  }
  return root;
};