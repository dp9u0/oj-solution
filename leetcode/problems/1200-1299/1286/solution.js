/*
 * @lc app=leetcode id=1286 lang=javascript
 *
 * [1286] Iterator for Combination
 */

// @lc code=start
/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
    this.combos = [];
    const n = characters.length;
    const k = combinationLength;

    const generate = (start, path) => {
        if (path.length === k) {
            this.combos.push(path.join(''));
            return;
        }
        for (let i = start; i < n; i++) {
            path.push(characters[i]);
            generate(i + 1, path);
            path.pop();
        }
    };

    generate(0, []);
    this.idx = 0;
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
    return this.combos[this.idx++];
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    return this.idx < this.combos.length;
};

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end

// TEST:
var itr = new CombinationIterator("abc", 2);
console.log(itr.next());     // "ab"
console.log(itr.hasNext()); // true
console.log(itr.next());     // "ac"
console.log(itr.hasNext()); // true
console.log(itr.next());     // "bc"
console.log(itr.hasNext()); // false

var itr2 = new CombinationIterator("abcd", 3);
console.log(itr2.next());     // "abc"
console.log(itr2.next());     // "abd"
console.log(itr2.next());     // "acd"
console.log(itr2.next());     // "bcd"
console.log(itr2.hasNext()); // false

var itr3 = new CombinationIterator("ahijp", 1);
console.log(itr3.next());     // "a"
console.log(itr3.next());     // "h"
console.log(itr3.hasNext()); // true

var itr4 = new CombinationIterator("abc", 1);
console.log(itr4.next());     // "a"
console.log(itr4.next());     // "b"
console.log(itr4.next());     // "c"
console.log(itr4.hasNext()); // false

var itr5 = new CombinationIterator("gkosu", 3);
console.log(itr5.next());     // "gko"
console.log(itr5.next());     // "gks"
console.log(itr5.hasNext()); // true
