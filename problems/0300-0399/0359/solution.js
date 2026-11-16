/*
 * @lc app=leetcode.cn id=359 lang=javascript
 *
 * [359] 日志速率限制器
 */

// @lc code=start

var Logger = function() {
    this.last = new Map(); // message -> last printed timestamp
};

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    const prev = this.last.get(message);
    if (prev !== undefined && timestamp - prev < 10) return false;
    this.last.set(message, timestamp);
    return true;
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
// @lc code=end
// TEST:
const logger = new Logger();
console.log(logger.shouldPrintMessage(1, "foo")); // true
console.log(logger.shouldPrintMessage(2, "bar")); // true
console.log(logger.shouldPrintMessage(3, "foo")); // false (1+10 > 3)
console.log(logger.shouldPrintMessage(8, "bar")); // false
console.log(logger.shouldPrintMessage(10, "foo")); // false (10-1=9 < 10)
console.log(logger.shouldPrintMessage(11, "foo")); // true (11-1=10 >= 10)
