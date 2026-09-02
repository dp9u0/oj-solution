/*
 * @lc app=leetcode.cn id=LCR 048 lang=javascript
 *
 * [LCR 048] 二叉树的序列化与反序列化
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
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) return '';
  const parts = [];
  const pre = (node) => {
    if (!node) {
      parts.push('null');
      return;
    }
    parts.push(String(node.val));
    pre(node.left);
    pre(node.right);
  };
  pre(root);
  return parts.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (data === '') return null;
  const tokens = data.split(',');
  let i = 0;
  const build = () => {
    const tok = tokens[i++];
    if (tok === 'null') return null;
    const node = new TreeNode(Number(tok));
    node.left = build();
    node.right = build();
    return node;
  };
  return build();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

// TEST:
const assert = require('assert');
const { arrayToTree, treeToArray } = require('./utils/arrayToTree');
function TreeNode(val) { this.val = val; this.left = this.right = null; }

const rt = (arr) => treeToArray(deserialize(serialize(arrayToTree(arr))));
assert.deepStrictEqual(rt([1, 2, 3, null, null, 4, 5]), [1, 2, 3, null, null, 4, 5]);
assert.strictEqual(serialize(arrayToTree([])), '');
assert.strictEqual(deserialize(''), null);
assert.deepStrictEqual(rt([1]), [1]);
assert.deepStrictEqual(rt([1, 2]), [1, 2]);
assert.deepStrictEqual(rt([1, -2, 3, 4, null, null, 5]), [1, -2, 3, 4, null, null, 5]);
assert.deepStrictEqual(rt([1, 2, null, 3, null, 4]), [1, 2, null, 3, null, 4]);

console.log('All tests passed!');
console.log('serialize([1,2,3,null,null,4,5]) =', serialize(arrayToTree([1, 2, 3, null, null, 4, 5])));
