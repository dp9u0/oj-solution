/*
 * @lc app=leetcode id=895 lang=javascript
 *
 * [895] Maximum Frequency Stack
 */

// @lc code=start
var FreqStack = function() {
  this.freq = new Map();
  this.group = new Map();
  this.maxFreq = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
  const f = (this.freq.get(val) || 0) + 1;
  this.freq.set(val, f);
  if (!this.group.has(f)) this.group.set(f, []);
  this.group.get(f).push(val);
  if (f > this.maxFreq) this.maxFreq = f;
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
  const stack = this.group.get(this.maxFreq);
  const val = stack.pop();
  this.freq.set(val, this.maxFreq - 1);
  if (stack.length === 0) {
    this.group.delete(this.maxFreq);
    this.maxFreq--;
  }
  return val;
};
// @lc code=end

// TEST:
const fs = new FreqStack();
[5, 7, 5, 7, 4, 5].forEach((v) => fs.push(v));
console.log(fs.pop() === 5);
console.log(fs.pop() === 7);
console.log(fs.pop() === 5);
console.log(fs.pop() === 4);
const fs2 = new FreqStack();
fs2.push(1);
fs2.push(1);
fs2.push(2);
console.log(fs2.pop() === 1);
console.log(fs2.pop() === 2);
console.log(fs2.pop() === 1);
