/*
 * @lc app=leetcode.cn id=LCR 147 lang=javascript
 *
 * [LCR 147] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  const curMin = this.minStack.length ? this.minStack[this.minStack.length - 1] : Infinity;
  this.minStack.push(Math.min(x, curMin));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop();
  this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1];
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
const assert = require('assert');

const run = (ops, vals) => {
  let obj;
  const out = [];
  for (let i = 0; i < ops.length; i++) {
    switch (ops[i]) {
      case 'MinStack': obj = new MinStack(); out.push(null); break;
      case 'push': obj.push(vals[i][0]); out.push(null); break;
      case 'pop': obj.pop(); out.push(null); break;
      case 'top': out.push(obj.top()); break;
      case 'getMin': out.push(obj.getMin()); break;
    }
  }
  return out;
};

assert.deepStrictEqual(
  run(['MinStack', 'push', 'push', 'push', 'getMin', 'pop', 'top', 'getMin'], [[], [-2], [0], [-3], [], [], [], []]),
  [null, null, null, null, -3, null, 0, -2]
);
// after pop the min returns
const s = new MinStack();
s.push(5); s.push(3); s.push(4);
assert.strictEqual(s.getMin(), 3);
s.pop();
assert.strictEqual(s.getMin(), 3);
s.pop();
assert.strictEqual(s.getMin(), 5);
assert.strictEqual(s.top(), 5);
s.push(-1);
assert.strictEqual(s.getMin(), -1);

console.log('All tests passed!');