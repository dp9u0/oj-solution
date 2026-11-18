/*
 * @lc app=leetcode.cn id=379 lang=javascript
 *
 * [379] 电话目录管理系统
 */

// @lc code=start
/**
 * @param {number} maxNumbers
 */
var PhoneDirectory = function(maxNumbers) {
    this.inPool = new Set();   // numbers currently available
    this.queue = [];           // allocation order (stale entries skipped by head)
    this.head = 0;
    for (let i = 0; i < maxNumbers; i++) {
        this.inPool.add(i);
        this.queue.push(i);
    }
};

/**
 * @return {number}
 */
PhoneDirectory.prototype.get = function() {
    while (this.head < this.queue.length) {
        const n = this.queue[this.head++];
        if (this.inPool.delete(n)) return n;
    }
    return -1;
};

/**
 * @param {number} number
 * @return {boolean}
 */
PhoneDirectory.prototype.check = function(number) {
    return this.inPool.has(number);
};

/**
 * @param {number} number
 * @return {void}
 */
PhoneDirectory.prototype.release = function(number) {
    if (!this.inPool.has(number)) {
        this.inPool.add(number);
        this.queue.push(number);
    }
};

/**
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */
// @lc code=end

// TEST:
const d1 = new PhoneDirectory(3);
console.log(d1.get()); // 0
console.log(d1.get()); // 1
console.log(d1.check(2)); // true
console.log(d1.get()); // 2
console.log(d1.check(2)); // false
d1.release(2);
console.log(d1.check(2)); // true

const d2 = new PhoneDirectory(1);
console.log(d2.get()); // 0
console.log(d2.get()); // -1 (exhausted)
console.log(d2.check(0)); // false
d2.release(0);
console.log(d2.get()); // 0 (recycled)

const d3 = new PhoneDirectory(2);
console.log(d3.get()); // 0
d3.release(0);
d3.release(0); // double release must not duplicate
console.log(d3.get()); // 0
console.log(d3.get()); // 1

const d4 = new PhoneDirectory(2);
d4.get(); d4.get();
console.log(d4.get()); // -1 (empty)
d4.release(1);
console.log(d4.check(1)); // true
console.log(d4.check(0)); // false
