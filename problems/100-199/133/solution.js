/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    return clone(node, new Map());
};

/**
 * 
 * @param {Node} n 
 * @param {Map} seen 
 */
const clone = (n, seen) => {
    if (!n) return null;
    let cloned = seen.get(n);
    if (cloned) return cloned;
    cloned = {
        val: n.val,
    };
    seen.set(n, cloned);
    cloned.neighbors = n.neighbors.map(nb => {
        return clone(nb, seen);
    });
    return cloned;
} 
