/*
 * @lc app=leetcode.cn id=LCR 156 lang=javascript
 *
 * [LCR 156] 序列化与反序列化二叉树
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

// local TreeNode shim so the TEST section can run outside LeetCode
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const roundTrip = (arr) => treeToArray(deserialize(serialize(arrayToTree(arr))));

assert.deepStrictEqual(roundTrip([1, 2, 3, null, null, 4, 5]), [1, 2, 3, null, null, 4, 5]);
assert.strictEqual(serialize(arrayToTree([])), '');
assert.strictEqual(deserialize(''), null);
assert.deepStrictEqual(roundTrip([]), [null]);
assert.deepStrictEqual(roundTrip([1]), [1]);
assert.deepStrictEqual(roundTrip([1, 2]), [1, 2]);
// deeper asymmetric + negative values
assert.deepStrictEqual(roundTrip([1, -2, 3, 4, null, null, 5, null, null, null, 6]), [1, -2, 3, 4, null, null, 5, null, null, null, 6]);
// left-only chain (trailing nulls trimmed by treeToArray)
assert.deepStrictEqual(roundTrip([1, 2, null, 3, null, 4, null]), [1, 2, null, 3, null, 4]);
// serialize format sanity: values joined by comma, 'null' markers
assert.strictEqual(serialize(arrayToTree([1, 2, null])), '1,2,null,null,null');

console.log('All tests passed!');
console.log('serialize([1,2,3,null,null,4,5]) =', serialize(arrayToTree([1, 2, 3, null, null, 4, 5])));
