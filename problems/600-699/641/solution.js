/*
 * @lc app=leetcode id=641 lang=javascript
 *
 * [641] Design Circular Deque
 */

// @lc code=start
/**
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    this.cap = k;
    this.size = 0;
    this.head = 0;
    this.tail = 0;
    this.data = new Array(k);
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if (this.isFull()) return false;
    this.head = (this.head - 1 + this.cap) % this.cap;
    this.data[this.head] = value;
    this.size++;
    return true;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    if (this.isFull()) return false;
    this.data[this.tail] = value;
    this.tail = (this.tail + 1) % this.cap;
    this.size++;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if (this.isEmpty()) return false;
    this.head = (this.head + 1) % this.cap;
    this.size--;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if (this.isEmpty()) return false;
    this.tail = (this.tail - 1 + this.cap) % this.cap;
    this.size--;
    return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    return this.isEmpty() ? -1 : this.data[this.head];
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    return this.isEmpty() ? -1 : this.data[(this.tail - 1 + this.cap) % this.cap];
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.size === 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.size === this.cap;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end

// TEST:
const dq = new MyCircularDeque(3);
console.log(dq.insertLast(1) === true);
console.log(dq.insertLast(2) === true);
console.log(dq.insertFront(3) === true);
console.log(dq.insertFront(4) === false);
console.log(dq.getRear() === 2);
console.log(dq.isFull() === true);
console.log(dq.deleteLast() === true);
console.log(dq.insertFront(4) === true);
console.log(dq.getFront() === 4);

const dq2 = new MyCircularDeque(1);
console.log(dq2.insertFront(5) === true);
console.log(dq2.getFront() === 5);
console.log(dq2.deleteLast() === true);
console.log(dq2.isEmpty() === true);
