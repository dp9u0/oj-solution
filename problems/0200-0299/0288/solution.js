/*
 * @lc app=leetcode.cn id=288 lang=javascript
 *
 * [288] 单词的唯一缩写
 */

// @lc code=start
/**
 * @param {string[]} dictionary
 */
const abbrOf = w => w.length <= 2 ? w : w[0] + (w.length - 2) + w[w.length - 1];

var ValidWordAbbr = function(dictionary) {
    this.groups = new Map(); // abbreviation -> set of words sharing it
    for (const w of dictionary) {
        const a = abbrOf(w);
        if (!this.groups.has(a)) this.groups.set(a, new Set());
        this.groups.get(a).add(w);
    }
};

/**
 * @param {string} word
 * @return {boolean}
 */
ValidWordAbbr.prototype.isUnique = function(word) {
    const set = this.groups.get(abbrOf(word));
    return !set || (set.size === 1 && set.has(word));
};

/** 
 * Your ValidWordAbbr object will be instantiated and called as such:
 * var obj = new ValidWordAbbr(dictionary)
 * var param_1 = obj.isUnique(word)
 */
// @lc code=end

// TEST:
const dict = new ValidWordAbbr(["deer", "door", "cake", "card"]);
console.log(dict.isUnique("dear")); // false (d1r shared with deer)
console.log(dict.isUnique("cart")); // false (c2t shared with card)
console.log(dict.isUnique("cane")); // false (c2e shared with cake)
console.log(dict.isUnique("make")); // true
console.log(dict.isUnique("deer")); // true (word itself in dict)
const d2 = new ValidWordAbbr(["hello"]);
console.log(d2.isUnique("hello")); // true
console.log(d2.isUnique("hallo")); // false (h3o shared)
