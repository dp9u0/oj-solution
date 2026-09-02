/*
 * @lc app=leetcode.cn id=LCR 030 lang=javascript
 *
 * [LCR 030] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.map = new Map(); // val -> index in arr
  this.arr = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.map.has(val)) return false;
  this.map.set(val, this.arr.length);
  this.arr.push(val);
  return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (!this.map.has(val)) return false;
  const idx = this.map.get(val);
  const last = this.arr[this.arr.length - 1];
  this.arr[idx] = last;            // move last into removed slot
  this.map.set(last, idx);
  this.arr.pop();
  this.map.delete(val);
  return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  return this.arr[Math.floor(Math.random() * this.arr.length)];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

// TEST:
const assert = require('assert');

const s = new RandomizedSet();
assert.strictEqual(s.insert(1), true);
assert.strictEqual(s.insert(1), false);
assert.strictEqual(s.insert(2), true);
assert.strictEqual(s.insert(3), true);
// getRandom returns one of {1,2,3}
for (let i = 0; i < 50; i++) {
  assert.ok([1, 2, 3].includes(s.getRandom()));
}
assert.strictEqual(s.remove(2), true);
assert.strictEqual(s.remove(2), false);
// after removing 2, set has {1,3}
for (let i = 0; i < 50; i++) {
  assert.ok([1, 3].includes(s.getRandom()));
}
assert.strictEqual(s.remove(1), true);
assert.strictEqual(s.remove(3), true);

// fresh: remove middle after many
const t = new RandomizedSet();
t.insert(10); t.insert(20); t.insert(30); t.insert(40);
assert.strictEqual(t.remove(20), true);
// remaining {10,30,40}
for (let i = 0; i < 100; i++) assert.ok([10, 30, 40].includes(t.getRandom()));

console.log('All tests passed!');