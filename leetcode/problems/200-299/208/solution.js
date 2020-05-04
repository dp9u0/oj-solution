/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = {};
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    const c = word[i];
    if (!node[c]) {
      node[c] = {};
    }
    node = node[c];
  }
  node.end = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.innerSearch(word);
  return !!node && !!node.end;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.innerSearch(prefix);
  return !!node;
};

Trie.prototype.innerSearch = function (word) {
  let node = this.root;
  for (let i = 0; node && i < word.length; i++) {
    const c = word[i];
    node = node[c];
  }
  return node;
};

// TEST:
const tree = new Trie();
tree.insert("apple");
let result = tree.search("apple"); // true
console.log(result)
result = tree.search("app"); // false
console.log(result)
result = tree.startsWith("app"); // true
console.log(result)
tree.insert("app");
result = tree.search("app"); // false
console.log(result)