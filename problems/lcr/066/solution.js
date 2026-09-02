/*
 * @lc app=leetcode.cn id=LCR 066 lang=javascript
 *
 * [LCR 066]  键值映射
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MapSum = function() {
  this.map = new Map();
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  this.map.set(key, val);
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
  let total = 0;
  for (const [key, val] of this.map) {
    if (key.startsWith(prefix)) total += val;
  }
  return total;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
// @lc code=end

// TEST:
const assert = require('assert');

const run = (ops, vals) => {
  let obj;
  const out = [];
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === 'MapSum') { obj = new MapSum(); out.push(null); }
    else if (ops[i] === 'insert') { obj.insert(vals[i][0], vals[i][1]); out.push(null); }
    else out.push(obj.sum(vals[i][0]));
  }
  return out;
};

assert.deepStrictEqual(
  run(['MapSum', 'insert', 'sum', 'insert', 'sum'], [[], ['apple', 3], ['ap'], ['app', 2], ['ap']]),
  [null, null, 3, null, 5]
);
// replace existing key value
const m = new MapSum();
m.insert('a', 1);
assert.strictEqual(m.sum('a'), 1);
m.insert('a', 10);
assert.strictEqual(m.sum('a'), 10);
// no matching prefix
assert.strictEqual(m.sum('zz'), 0);
// longer prefix partial overlap
m.insert('abc', 5);
assert.strictEqual(m.sum('ab'), 5); // only 'abc' matches 'ab'
assert.strictEqual(m.sum('a'), 15); // 'a' + 'abc'

console.log('All tests passed!');