/*
 * @lc app=leetcode.cn id=281 lang=javascript
 *
 * [281] 锯齿迭代器
 */

// @lc code=start
/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
var ZigzagIterator = function ZigzagIterator(v1, v2) {
    this.seq = [];
    const len = Math.max(v1.length, v2.length);
    for (let i = 0; i < len; i++) {
        if (i < v1.length) this.seq.push(v1[i]);
        if (i < v2.length) this.seq.push(v2[i]);
    }
    this.i = 0;
};


/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
    return this.i < this.seq.length;
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
    return this.seq[this.i++];
};

/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
// @lc code=end

// TEST:
const collect = (v1, v2) => {
    const i = new ZigzagIterator(v1, v2), a = [];
    while (i.hasNext()) a.push(i.next());
    return a;
};
console.log(collect([1, 2], [3, 4, 5, 6])); // [1,3,2,4,5,6]
console.log(collect([], [])); // []
console.log(collect([1], [])); // [1]
console.log(collect([], [1, 2])); // [1,2]
console.log(collect([1, 2, 3], [4])); // [1,4,2,3]
