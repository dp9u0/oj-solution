/*
 * @lc app=leetcode.cn id=LCR 058 lang=javascript
 *
 * [LCR 058] 我的日程安排表 I
 */

// @lc code=start

var MyCalendar = function() {
  this.bookings = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
  for (const [s, e] of this.bookings) {
    if (start < e && s < end) return false; // overlap
  }
  this.bookings.push([start, end]);
  return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end

// TEST:
const assert = require('assert');

const run = (ops, vals) => {
  let obj;
  const out = [];
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === 'MyCalendar') { obj = new MyCalendar(); out.push(null); }
    else out.push(obj.book(vals[i][0], vals[i][1]));
  }
  return out;
};

assert.deepStrictEqual(
  run(['MyCalendar', 'book', 'book', 'book'], [[], [10, 20], [15, 25], [20, 30]]),
  [null, true, false, true]
);
// touching endpoints allowed
assert.deepStrictEqual(
  run(['MyCalendar', 'book', 'book'], [[], [10, 20], [20, 25]]),
  [null, true, true]
);
// back-to-back reversed
assert.deepStrictEqual(
  run(['MyCalendar', 'book', 'book'], [[], [20, 30], [10, 20]]),
  [null, true, true]
);
// inner contained
assert.deepStrictEqual(
  run(['MyCalendar', 'book', 'book'], [[], [5, 15], [7, 10]]),
  [null, true, false]
);
// spanning
assert.deepStrictEqual(
  run(['MyCalendar', 'book', 'book'], [[], [5, 15], [1, 8]]),
  [null, true, false]
);

console.log('All tests passed!');