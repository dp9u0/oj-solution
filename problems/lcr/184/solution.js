/*
 * @lc app=leetcode.cn id=LCR 184 lang=javascript
 *
 * [LCR 184] 设计自助结算系统
 */

// @lc code=start

var Checkout = function() {
  this.queue = [];
  this.maxDeque = [];
  this.head = 0; // pointer for queue front (avoid O(n) shift)
};

/**
 * @return {number}
 */
Checkout.prototype.get_max = function() {
  if (this.head >= this.queue.length) return -1;
  return this.maxDeque[0];
};

/**
 * @param {number} value
 * @return {void}
 */
Checkout.prototype.add = function(value) {
  this.queue.push(value);
  while (this.maxDeque.length && this.maxDeque[this.maxDeque.length - 1] < value) {
    this.maxDeque.pop();
  }
  this.maxDeque.push(value);
};

/**
 * @return {number}
 */
Checkout.prototype.remove = function() {
  if (this.head >= this.queue.length) return -1;
  const value = this.queue[this.head++];
  if (this.maxDeque[0] === value) this.maxDeque.shift();
  return value;
};

/** 
 * Your Checkout object will be instantiated and called as such:
 * var obj = new Checkout()
 * var param_1 = obj.get_max()
 * obj.add(value)
 * var param_3 = obj.remove()
 */
// @lc code=end

// TEST:
const assert = require('assert');

const run = (ops, vals) => {
  let obj;
  const out = [];
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === 'Checkout') { obj = new Checkout(); out.push(null); }
    else if (ops[i] === 'add') { obj.add(vals[i][0]); out.push(null); }
    else if (ops[i] === 'get_max') out.push(obj.get_max());
    else out.push(obj.remove());
  }
  return out;
};

assert.deepStrictEqual(
  run(['Checkout', 'add', 'add', 'get_max', 'remove', 'get_max'], [[], [4], [7], [], [], []]),
  [null, null, null, 7, 4, 7]
);
assert.deepStrictEqual(run(['Checkout', 'remove', 'get_max'], [[], [], []]), [null, -1, -1]);
// max preserved after removing max; ops: get_max, remove, get_max, remove, get_max
assert.deepStrictEqual(run(['Checkout', 'add', 'add', 'add', 'get_max', 'remove', 'get_max', 'remove', 'get_max'], [[], [5], [1], [3], [], [], [], [], []]), [null, null, null, null, 5, 5, 3, 1, 3]);
// decreasing adds
assert.deepStrictEqual(run(['Checkout', 'add', 'add', 'get_max', 'remove', 'get_max'], [[], [9], [2], [], [], []]), [null, null, null, 9, 9, 2]);
// empty get_max after all removed
assert.deepStrictEqual(run(['Checkout', 'add', 'get_max', 'remove', 'get_max', 'remove'], [[], [8], [], [], [], []]), [null, null, 8, 8, -1, -1]);

console.log('All tests passed!');