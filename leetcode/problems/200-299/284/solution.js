/*
 * @lc app=leetcode id=284 lang=javascript
 *
 * [284] Peeking Iterator
 */

// @lc code=start
/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function (iterator) {
  this.iterator = iterator;
  this.current = null;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
  if (this.current === null) {
    this.current = this.iterator.next();
  }
  return this.current;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
  if (this.current === null) {
    return this.iterator.next();
  }
  const result = this.current;
  this.current = null;
  return result;
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
  return this.current !== null || this.iterator.hasNext();
};

/** 
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
// @lc code=end
// TEST:
const iterator = new PeekingIterator([1, 2, 3]);
console.log(iterator.peek()); // Output: 1
console.log(iterator.next()); // Output: 1
console.log(iterator.hasNext()); // Output: true
console.log(iterator.next()); // Output: 2
console.log(iterator.hasNext()); // Output: true
console.log(iterator.peek()); // Output: 3
console.log(iterator.next()); // Output: 3
console.log(iterator.hasNext()); // Output: false
