/*
 * @lc app=leetcode id=731 lang=javascript
 *
 * [731] My Calendar II
 */

// @lc code=start

var MyCalendarTwo = function() {
  this.bookings = [];
  this.overlaps = [];
};

/**
 * @param {number} startTime
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(startTime, endTime) {
  const start = startTime, end = endTime;

  // Check if new event would cause triple booking
  for (const [s, e] of this.overlaps) {
    if (start < e && end > s) return false;
  }

  // Add to bookings and compute new overlaps
  for (const [s, e] of this.bookings) {
    const os = Math.max(start, s);
    const oe = Math.min(end, e);
    if (os < oe) {
      this.overlaps.push([os, oe]);
    }
  }

  this.bookings.push([start, end]);
  return true;
};

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(startTime,endTime)
 */
// @lc code=end

// TEST:
const cal = new MyCalendarTwo();
console.log(cal.book(10, 20)); // true
console.log(cal.book(50, 60)); // true
console.log(cal.book(10, 40)); // true
console.log(cal.book(5, 15));  // false
console.log(cal.book(5, 10));  // true
console.log(cal.book(25, 55)); // true
