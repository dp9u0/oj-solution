/*
 * @lc app=leetcode id=1381 lang=javascript
 *
 * [1381] Design a Stack With Increment Operation
 */

// @lc code=start
/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.stack = [];
    this.maxSize = maxSize;
};

CustomStack.prototype.push = function(x) {
    if (this.stack.length < this.maxSize) this.stack.push(x);
};

CustomStack.prototype.pop = function() {
    return this.stack.length ? this.stack.pop() : -1;
};

CustomStack.prototype.increment = function(k, val) {
    let n = Math.min(k, this.stack.length);
    for (let i = 0; i < n; i++) this.stack[i] += val;
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
// @lc code=end

// TEST:
let stk = new CustomStack(3);
stk.push(1);
stk.push(2);
console.log(stk.pop()); // 2
stk.push(2);
stk.push(3);
stk.push(4);
stk.increment(5, 100);
stk.increment(2, 100);
console.log(stk.pop()); // 103
console.log(stk.pop()); // 202
console.log(stk.pop()); // 201
console.log(stk.pop()); // -1
