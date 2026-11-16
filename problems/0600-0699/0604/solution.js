/*
 * @lc app=leetcode.cn id=604 lang=javascript
 *
 * [604] 迭代压缩字符串
 */

// @lc code=start
/**
 * @param {string} compressedString
 */
var StringIterator = function(compressedString) {
    this.s = compressedString;
    this.i = 0;
    this.ch = ' ';
    this.count = 0;
};

// load the next "letter + digits" group if the current one is exhausted
StringIterator.prototype.ensure = function() {
    if (this.count > 0 || this.i >= this.s.length) return;
    this.ch = this.s[this.i++];
    let num = 0;
    while (this.i < this.s.length && this.s[this.i] >= '0' && this.s[this.i] <= '9') {
        num = num * 10 + (+this.s[this.i++]);
    }
    this.count = num;
};

/**
 * @return {character}
 */
StringIterator.prototype.next = function() {
    this.ensure();
    if (this.count === 0) return ' ';
    this.count--;
    return this.ch;
};

/**
 * @return {boolean}
 */
StringIterator.prototype.hasNext = function() {
    this.ensure();
    return this.count > 0;
};

/** 
 * Your StringIterator object will be instantiated and called as such:
 * var obj = new StringIterator(compressedString)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end

// TEST:
const it1 = new StringIterator("L1e2t1C1o1d1e1");
console.log([it1.next(), it1.next(), it1.next(), it1.next(), it1.next(), it1.next()].join("")); // "Lee tC o" -> "LeeTCo"
console.log(it1.hasNext()); // true
console.log(it1.next()); // "d"
console.log(it1.hasNext()); // true
const it2 = new StringIterator("a12b3");
let out = [];
while (it2.hasNext()) out.push(it2.next());
console.log(out.join("")); // "aaaaaaaaaaaabbb" (12 a + 3 b)
const it3 = new StringIterator("x1");
console.log(it3.next(), it3.hasNext(), it3.next(), it3.hasNext()); // x false ' ' false
