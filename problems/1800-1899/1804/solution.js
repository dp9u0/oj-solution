/*
 * @lc app=leetcode.cn id=1804 lang=javascript
 *
 * [1804] 实现 Trie （前缀树） II
 */

// @lc code=start

var Trie = function() {
    this.root = { children: new Map(), pass: 0, end: 0 };
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    node.pass++;
    for (const ch of word) {
        let next = node.children.get(ch);
        if (!next) {
            next = { children: new Map(), pass: 0, end: 0 };
            node.children.set(ch, next);
        }
        next.pass++;
        node = next;
    }
    node.end++;
};

Trie.prototype.walk = function(s) {
    let node = this.root;
    for (const ch of s) {
        node = node.children.get(ch);
        if (!node) return null;
    }
    return node;
};

/**
 * @param {string} word
 * @return {number}
 */
Trie.prototype.countWordsEqualTo = function(word) {
    const node = this.walk(word);
    return node ? node.end : 0;
};

/**
 * @param {string} prefix
 * @return {number}
 */
Trie.prototype.countWordsStartingWith = function(prefix) {
    const node = this.walk(prefix);
    return node ? node.pass : 0;
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.erase = function(word) {
    let node = this.root;
    node.pass--;
    for (const ch of word) {
        const next = node.children.get(ch);
        next.pass--;
        if (next.pass === 0) {
            node.children.delete(ch); // prune the whole subtree
            return;
        }
        node = next;
    }
    node.end--;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.countWordsEqualTo(word)
 * var param_3 = obj.countWordsStartingWith(prefix)
 * obj.erase(word)
 */
// @lc code=end

// TEST:
const trie = new Trie();
trie.insert("apple");
trie.insert("apple");
console.log(trie.countWordsEqualTo("apple")); // 2
console.log(trie.countWordsStartingWith("app")); // 2
trie.erase("apple");
console.log(trie.countWordsEqualTo("apple")); // 1
console.log(trie.countWordsStartingWith("app")); // 1
trie.erase("apple");
console.log(trie.countWordsStartingWith("app")); // 0
