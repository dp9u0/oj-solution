/** 
 * @param {number[]} voyage 
 * @return {TreeNode}
 */
function arrayToTree(array) {
  if (!array.length || array[0] === null) {
    return null;
  }
  let root = { val: array.shift(), left: null, right: null }
  let q = [root];
  while (array.length) {
    let node = q.shift();
    let val = array.shift();
    if (val || val === 0) {
      node.left = { val, left: null, right: null }
      q.push(node.left);
    }
    val = array.shift();
    if (val || val === 0) {
      node.right = { val, left: null, right: null }
      q.push(node.right);
    }
  }
  return root;
}
exports.arrayToTree = arrayToTree;