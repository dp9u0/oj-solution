/** 
 * @param {number[]}  array
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

/** 
 * @param {TreeNode} node 
 * @return {number[]}
 */
function treeToArray(node) {
  if (!node) return [null];
  const nodes = [node];
  let end = false;
  let i = 0;
  while (!end) {
    end = true;
    let lastIndex = nodes.length - 1;
    while (i <= lastIndex) {
      const node = nodes[i];
      if (node) {
        end = false;
        nodes.push(node.left);
        nodes.push(node.right);
      }
      i++;
    }
  }
  while (!nodes[nodes.length - 1]) {
    nodes.pop();
  }
  return nodes.map(n => !n ? null : n.val)
}

exports.arrayToTree = arrayToTree;
exports.treeToArray = treeToArray;