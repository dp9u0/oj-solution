/*
 * @lc app=leetcode id=901 lang=javascript
 *
 * [901] Online Stock Span
 */

// @lc code=start

var StockSpanner = function() {
    this.stack = []; // [price, span]
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let span = 1;
    while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
        span += this.stack.pop()[1];
    }
    this.stack.push([price, span]);
    return span;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// @lc code=end

// TEST:
const spanner = new StockSpanner();
console.log(spanner.next(100)); // 1
console.log(spanner.next(80));  // 1
console.log(spanner.next(60));  // 1
console.log(spanner.next(70));  // 2
console.log(spanner.next(60));  // 1
console.log(spanner.next(75));  // 4
console.log(spanner.next(85));  // 6
