/*
 * @lc app=leetcode.cn id=LCR 062 lang=javascript
 *
 * [LCR 062] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.children = {};
  this.isEnd = false;
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this;
  for (const ch of word) {
    if (!node.children[ch]) node.children[ch] = new Trie();
    node = node.children[ch];
  }
  node.isEnd = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this;
  for (const ch of word) {
    if (!node.children[ch]) return false;
    node = node.children[ch];
  }
  return node.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this;
  for (const ch of prefix) {
    if (!node.children[ch]) return false;
    node = node.children[ch];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

// TEST:
const assert = require('assert');

const t = new Trie();
t.insert('apple');
assert.strictEqual(t.search('apple'), true);
assert.strictEqual(t.search('app'), false);
assert.strictEqual(t.startsWith('app'), true);
t.insert('app');
assert.strictEqual(t.search('app'), true);
assert.strictEqual(t.search('ap'), false);
assert.strictEqual(t.startsWith('a'), true);
assert.strictEqual(t.startsWith('b'), false);
t.insert('banana');
assert.strictEqual(t.search('banana'), true);
assert.strictEqual(t.search('ban'), false);
assert.strictEqual(t.startsWith('ban'), true);
// prefix longer than any word
assert.strictEqual(t.startsWith('applepie'), false);

console.log('All tests passed!');
