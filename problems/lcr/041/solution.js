/*
 * @lc app=leetcode.cn id=LCR 041 lang=javascript
 *
 * [LCR 041] 数据流中的移动平均值
 */

// @lc code=start
/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
  this.size = size;
  this.queue = [];
  this.sum = 0;
  this.head = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  this.queue.push(val);
  this.sum += val;
  if (this.queue.length - this.head > this.size) {
    this.sum -= this.queue[this.head];
    this.head++;
  }
  return this.sum / (this.queue.length - this.head);
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
// @lc code=end

// TEST:
const assert = require('assert');

const run = (ops, vals) => {
  let obj;
  const out = [];
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === 'MovingAverage') { obj = new MovingAverage(vals[i][0]); out.push(null); }
    else out.push(obj.next(vals[i][0]));
  }
  return out;
};

const r = run(['MovingAverage', 'next', 'next', 'next', 'next'], [[3], [1], [10], [3], [5]]);
assert.strictEqual(r[1], 1);
assert.strictEqual(r[2], 5.5);
assert.ok(Math.abs(r[3] - 14 / 3) < 1e-9);
assert.strictEqual(r[4], 6);

const m = new MovingAverage(1);
assert.strictEqual(m.next(5), 5);
assert.strictEqual(m.next(7), 7); // window size 1 -> only 7

console.log('All tests passed!');