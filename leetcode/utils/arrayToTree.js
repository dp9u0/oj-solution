/** 
 * @param {number[]} voyage 
 * @return {TreeNode}
 */
function arrayToTree(array) {
  if (!array.length || !array[0]) {
    return null;
  }
  let root = {
    val: array.shift(),
    left: null,
    right: null
  }
  let q = [root];
  while (array.length) {
    let node = q.shift();
    if (!node) {
      throw 'unvalid array'
    }
    if (array[0]) {
      node.left = {
        val: array[0],
        left: null,
        right: null
      }
      q.push(node.left);
    }
    array.shift();
    if (array[0]) {
      node.right = {
        val: array[0],
        left: null,
        right: null
      }
      q.push(node.right);
    }
    array.shift();
  }
  return root;
}
exports.arrayToTree = arrayToTree;