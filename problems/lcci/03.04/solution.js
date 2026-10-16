/*
 * @lc app=leetcode.cn id=面试题 03.04 lang=javascript
 *
 * [面试题 03.04] 化栈为队
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.inStack = [];
    this.outStack = [];
};

// 仅当 outStack 为空时才整体倒入，均摊每个元素只进出栈各一次
MyQueue.prototype.transfer = function() {
    while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
    }
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.inStack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.outStack.length === 0) {
        this.transfer();
    }
    return this.outStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.outStack.length === 0) {
        this.transfer();
    }
    return this.outStack[this.outStack.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.inStack.length === 0 && this.outStack.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

// TEST:
const q = new MyQueue();
console.log(q.empty() === true);
q.push(1);
q.push(2);
console.log(q.peek() === 1);
console.log(q.pop() === 1);
console.log(q.empty() === false);
console.log(q.pop() === 2);
console.log(q.empty() === true);
q.push(3);
console.log(q.peek() === 3 && q.pop() === 3);
