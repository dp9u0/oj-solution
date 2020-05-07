/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
    this.trie = {};
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let node = this.trie;
    for (let i = 0; i < word.length; i++) {
        const w = word[i];
        if (!node[w]) { node[w] = {} };
        node = node[w];
    }
    node.end = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    const innerSearch = (node, word, i) => {
        if (!node) return false;
        if (i >= word.length) return !!node.end;
        const w = word[i];
        if (w !== '.') {
            return innerSearch(node[w], word, i + 1);
        }
        for (const key in node) {
            if (innerSearch(node[key], word, i + 1)) { return true; }
        }
        return false;
    }
    return innerSearch(this.trie, word, 0);
};

var dict = new WordDictionary()
dict.addWord("bad")
dict.addWord("dad")
dict.addWord("mad")
console.log(dict.search("pad")) //-> false
console.log(dict.search("bad")) //-> true
console.log(dict.search(".ad")) //-> true
console.log(dict.search("b..")) //-> true

