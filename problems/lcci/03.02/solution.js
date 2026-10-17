/*
 * @lc app=leetcode.cn id=面试题 03.02 lang=javascript
 *
 * [面试题 03.02] 栈的最小值
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    // 每个节点存 [值, 到该节点为止的最小值]
    this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    const min = this.stack.length ? Math.min(this.stack[this.stack.length - 1][1], x) : x;
    this.stack.push([x, min]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1][1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

// TEST:
const ms = new MinStack();
ms.push(-2);
ms.push(0);
ms.push(-3);
console.log(ms.getMin() === -3);
ms.pop();
console.log(ms.top() === 0);
console.log(ms.getMin() === -2);
const ms2 = new MinStack();
ms2.push(5);
ms2.push(5);
ms2.push(1);
ms2.push(5);
console.log(ms2.getMin() === 1);
ms2.pop();
console.log(ms2.getMin() === 1);
ms2.pop();
console.log(ms2.getMin() === 5);
ms2.pop();
console.log(ms2.getMin() === 5);
