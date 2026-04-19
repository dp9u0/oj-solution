/*
 * @lc app=leetcode id=2166 lang=javascript
 *
 * [2166] Design Bitset
 */

// @lc code=start
/**
 * @param {number} size
 */
var Bitset = function(size) {
    this.bits = new Uint8Array(size);
    this.size = size;
    this.ones = 0;
    this.flipped = false;
};

/**
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.fix = function(idx) {
    if ((this.bits[idx] ^ this.flipped) === 0) {
        this.bits[idx] = 1 ^ this.flipped;
        this.ones++;
    }
};

/**
 * @param {number} idx
 * @return {void}
 */
Bitset.prototype.unfix = function(idx) {
    if ((this.bits[idx] ^ this.flipped) === 1) {
        this.bits[idx] = 0 ^ this.flipped;
        this.ones--;
    }
};

/**
 * @return {void}
 */
Bitset.prototype.flip = function() {
    this.flipped = !this.flipped;
    this.ones = this.size - this.ones;
};

/**
 * @return {boolean}
 */
Bitset.prototype.all = function() {
    return this.ones === this.size;
};

/**
 * @return {boolean}
 */
Bitset.prototype.one = function() {
    return this.ones > 0;
};

/**
 * @return {number}
 */
Bitset.prototype.count = function() {
    return this.ones;
};

/**
 * @return {string}
 */
Bitset.prototype.toString = function() {
    let s = '';
    for (let i = 0; i < this.size; i++) {
        s += (this.bits[i] ^ this.flipped) ? '1' : '0';
    }
    return s;
};

/**
 * Your Bitset object will be instantiated and called as such:
 * var obj = new Bitset(size)
 * obj.fix(idx)
 * obj.unfix(idx)
 * obj.flip()
 * var param_4 = obj.all()
 * var param_5 = obj.one()
 * var param_6 = obj.count()
 * var param_7 = obj.toString()
 */
// @lc code=end

// TEST:
const bs = new Bitset(5);
bs.fix(3);
bs.fix(1);
console.log(bs.toString());  // '01010'
bs.flip();
console.log(bs.toString());  // '10101'
console.log(bs.all());       // false
bs.unfix(0);
console.log(bs.toString());  // '00101'
bs.flip();
console.log(bs.toString());  // '11010'
console.log(bs.one());       // true
bs.unfix(0);
console.log(bs.count());     // 2
console.log(bs.toString());  // '01010'
