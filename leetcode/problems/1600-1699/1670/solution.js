/*
 * @lc app=leetcode id=1670 lang=javascript
 *
 * [1670] Design Front Middle Back Queue
 */

// @lc code=start

var FrontMiddleBackQueue = function() {
    this.arr = [];
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
    this.arr.unshift(val);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
    this.arr.splice(Math.floor(this.arr.length / 2), 0, val);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
    this.arr.push(val);
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
    return this.arr.length ? this.arr.shift() : -1;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
    if (!this.arr.length) return -1;
    const i = Math.floor((this.arr.length - 1) / 2);
    return this.arr.splice(i, 1)[0];
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
    return this.arr.length ? this.arr.pop() : -1;
};

/** 
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
// @lc code=end

// TEST:
const q = new FrontMiddleBackQueue();
q.pushFront(1);    // [1]
q.pushBack(2);     // [1, 2]
q.pushMiddle(3);   // [1, 3, 2]
q.pushMiddle(4);   // [1, 4, 3, 2]
console.log(q.popFront());  // 1
console.log(q.popMiddle()); // 3
console.log(q.popMiddle()); // 4
console.log(q.popBack());   // 2
console.log(q.popFront());  // -1
