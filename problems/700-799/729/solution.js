/*
 * @lc app=leetcode id=729 lang=javascript
 *
 * [729] My Calendar I
 */

// @lc code=start

var MyCalendar = function() {
    this.events = [];
};

/**
 * @param {number} startTime
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendar.prototype.book = function(startTime, endTime) {
    for (const [s, e] of this.events) {
        if (startTime < e && endTime > s) return false;
    }
    this.events.push([startTime, endTime]);
    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(startTime,endTime)
 */
// @lc code=end

// TEST:
let cal = new MyCalendar();
console.log(cal.book(10, 20)); // true
console.log(cal.book(15, 25)); // false
console.log(cal.book(20, 30)); // true
