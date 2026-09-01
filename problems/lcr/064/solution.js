/*
 * @lc app=leetcode.cn id=LCR 064 lang=javascript
 *
 * [LCR 064] 实现一个魔法字典
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MagicDictionary = function() {
    // wildcard key -> Set of source words that produce this key
    this.map = new Map();
};

/**
 * 生成 word 在第 i 个位置用 '*' 替换后的通配 key
 */
MagicDictionary.prototype._wildcard = function(word, i) {
    return word.slice(0, i) + '*' + word.slice(i + 1);
};

/**
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
    for (const word of dictionary) {
        for (let i = 0; i < word.length; i++) {
            const key = this._wildcard(word, i);
            if (!this.map.has(key)) this.map.set(key, new Set());
            this.map.get(key).add(word);
        }
    }
};

/**
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
    for (let i = 0; i < searchWord.length; i++) {
        const key = this._wildcard(searchWord, i);
        const words = this.map.get(key);
        if (!words) continue;
        // 匹配到的词必须与 searchWord 不同（确实改了一个字母）
        if (words.size > 1 || !words.has(searchWord)) {
            return true;
        }
    }
    return false;
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
// @lc code=end

// TEST:
var md = new MagicDictionary();
md.buildDict(["hello", "leetcode"]);
console.log(md.search("hello"));    // false
console.log(md.search("hhllo"));    // true
console.log(md.search("hell"));     // false
console.log(md.search("leetcoded")); // false

var md2 = new MagicDictionary();
md2.buildDict(["hello", "hallo"]);
console.log(md2.search("hello"));   // true (hallo 改一个字母)
console.log(md2.search("hollo"));   // true (hello)

var md3 = new MagicDictionary();
md3.buildDict(["a"]);
console.log(md3.search("a"));       // false
console.log(md3.search("b"));       // true

var md4 = new MagicDictionary();
md4.buildDict(["abc", "def"]);
console.log(md4.search("abc"));     // false
console.log(md4.search("abx"));     // true (abc)
console.log(md4.search("aec"));     // false (abc需改2个，def需改2个)
