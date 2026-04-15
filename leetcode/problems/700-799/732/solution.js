/*
 * @lc app=leetcode id=732 lang=javascript
 *
 * [732] My Calendar III
 */

// @lc code=start

var MyCalendarThree = function() {
  this.counts = new Map();
};

/**
 * @param {number} startTime
 * @param {number} endTime
 * @return {number}
 */
MyCalendarThree.prototype.book = function(startTime, endTime) {
  this.counts.set(startTime, (this.counts.get(startTime) || 0) + 1);
  this.counts.set(endTime, (this.counts.get(endTime) || 0) - 1);

  let maxK = 0, cur = 0;
  const keys = [...this.counts.keys()].sort((a, b) => a - b);
  for (const k of keys) {
    cur += this.counts.get(k);
    maxK = Math.max(maxK, cur);
  }
  return maxK;
};

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(startTime,endTime)
 */
// @lc code=end

// TEST:
const cal = new MyCalendarThree();
console.log(cal.book(10, 20)); // 1
console.log(cal.book(50, 60)); // 1
console.log(cal.book(10, 40)); // 2
console.log(cal.book(5, 15));  // 3
console.log(cal.book(5, 10));  // 3
console.log(cal.book(25, 55)); // 3
