/*
 * @lc app=leetcode id=449 lang=javascript
 *
 * [449] Serialize and Deserialize BST
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * Preorder traversal: root -> left -> right.
 * BST property makes null markers unnecessary (compact).
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const vals = [];
  const preorder = (node) => {
    if (!node) return;
    vals.push(node.val);
    preorder(node.left);
    preorder(node.right);
  };
  preorder(root);
  return vals.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * Rebuild with an index pointer + (lower, upper) bounds:
 * values out of bounds belong to an ancestor's other subtree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (!data) return null;
  const vals = data.split(',').map(Number);
  let idx = 0;

  const build = (lower, upper) => {
    if (idx >= vals.length) return null;
    const val = vals[idx];
    if (val < lower || val > upper) return null;
    idx++;
    const node = new TreeNode(val);
    node.left = build(lower, val);
    node.right = build(val, upper);
    return node;
  };

  return build(-Infinity, Infinity);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

// TEST:
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function arrayToTree(arr) {
  if (!arr.length) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (queue.length && i < arr.length) {
    const node = queue.shift();
    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}

function treeToArray(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push(null);
    }
  }
  while (result[result.length - 1] === null) result.pop();
  return result;
}

const check = (input) => {
  const output = treeToArray(deserialize(serialize(arrayToTree(input))));
  console.log(JSON.stringify(input), '->', JSON.stringify(output), JSON.stringify(input) === JSON.stringify(output) ? 'PASS' : 'FAIL');
};

check([2, 1, 3]);                       // example 1
check([]);                              // example 2: empty tree
check([5, 3, 8, 1, 4, 7, 9, null, 2]);  // deeper BST, right-heavy path
check([10]);                            // single node
check([41, 37, 44, 24, 39, 42, 48, 1, 35, 38, 40, null, null, 46, 49, 0, null, 34]); // large BST
check([5, 4, null, 3, null, 2, null, 1]); // left-skewed
check([1, null, 2, null, 3]);             // right-skewed
