/*
 * @lc app=leetcode id=745 lang=javascript
 *
 * [745] Prefix and Suffix Search
 */

// @lc code=start
/**
 * @param {string[]} words
 */
var WordFilter = function(words) {
    // 联合 Trie：对每个单词插入所有 "后缀{单词" 变体，路径节点记录最大下标
    // 注意 weight 为多字符属性名，不会与单字符子节点 'a'-'z','{' 冲突
    this.root = {};
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        for (let j = word.length; j >= 0; j--) {
            const key = word.slice(j) + '{' + word;
            let node = this.root;
            node.weight = i;
            for (let k = 0; k < key.length; k++) {
                const ch = key[k];
                if (!node[ch]) node[ch] = {};
                node = node[ch];
                node.weight = i;
            }
        }
    }
};

/**
 * @param {string} pref
 * @param {string} suff
 * @return {number}
 */
WordFilter.prototype.f = function(pref, suff) {
    const key = suff + '{' + pref;
    let node = this.root;
    for (let k = 0; k < key.length; k++) {
        node = node[key[k]];
        if (!node) return -1;
    }
    return node.weight;
};

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */
// @lc code=end

// TEST:
const wf1 = new WordFilter(['apple']);
console.log(wf1.f('a', 'e') === 0); // 基础示例
console.log(wf1.f('apple', 'apple') === 0); // 前后缀均为整个单词
console.log(wf1.f('apples', 'e') === -1); // 前缀比单词长，不匹配
console.log(wf1.f('b', 'e') === -1); // 前缀不存在

const wf2 = new WordFilter(['cab', 'sad', 'bad']);
console.log(wf2.f('sa', 'd') === 1); // 只有 sad 匹配
console.log(wf2.f('b', 'd') === 2); // bad 匹配
console.log(wf2.f('c', 'ab') === 0); // cab 匹配
console.log(wf2.f('a', 'd') === -1); // 无单词前缀 a 且后缀 d

const wf3 = new WordFilter(['apple', 'ape', 'apple']);
console.log(wf3.f('a', 'e') === 2); // 重复单词取最大下标
console.log(wf3.f('app', 'e') === 2); // apple(0,2) 与 ape(1) 均匹配，取最大
console.log(wf3.f('ape', 'e') === 1); // 仅 ape 前缀为 ape
