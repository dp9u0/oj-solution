/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.payloads = [];
  this.mins = [];
  this.min = null;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.payloads.push(x);
  this.min = this.min === null ? x : Math.min(this.min, x);
  this.mins.push(this.min);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.payloads.pop();
  this.mins.pop();
  this.min = this.mins[this.mins.length - 1] || null;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.payloads[this.payloads.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};