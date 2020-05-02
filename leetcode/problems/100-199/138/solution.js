/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let copies = new Map();
  return copy(head, copies);
};

/**
 * copy a node
 * @param {Node} node 
 * @param {Map} copies 
 */
const copy = (node, copies) => {
  if (!node) return null;
  let copied = copies.get(node);
  if (!copied) {
    const { val, next, random } = node;
    copied = { val };
    copies.set(node, copied);
    copied.next = copy(next, copies);
    copied.random = copy(random, copies);
  }
  return copied;
}
