/*
 * @lc app=leetcode id=2034 lang=javascript
 *
 * [2034] Stock Price Fluctuation 
 */

// @lc code=start

var StockPrice = function() {
    this.prices = {};
    this.maxTime = 0;
    this.counts = {};
    this.sorted = []; // sorted unique prices
};

/**
 * @param {number} timestamp
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function(timestamp, price) {
    if (this.prices[timestamp] !== undefined) {
        let old = this.prices[timestamp];
        this.counts[old]--;
        if (this.counts[old] === 0) {
            delete this.counts[old];
            let idx = this.sorted.indexOf(old);
            if (idx !== -1) this.sorted.splice(idx, 1);
        }
    }
    this.prices[timestamp] = price;
    if (!this.counts[price]) {
        // binary insert
        let lo = 0, hi = this.sorted.length;
        while (lo < hi) {
            let mid = (lo + hi) >> 1;
            if (this.sorted[mid] < price) lo = mid + 1;
            else hi = mid;
        }
        this.sorted.splice(lo, 0, price);
    }
    this.counts[price] = (this.counts[price] || 0) + 1;
    if (timestamp > this.maxTime) this.maxTime = timestamp;
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function() {
    return this.prices[this.maxTime];
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function() {
    return this.sorted[this.sorted.length - 1];
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function() {
    return this.sorted[0];
};

/** 
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */
// @lc code=end

// TEST:
let sp = new StockPrice();
sp.update(1, 10);
sp.update(2, 5);
console.log(sp.current()); // 5
console.log(sp.maximum()); // 10
sp.update(1, 3);
console.log(sp.maximum()); // 5
sp.update(4, 2);
console.log(sp.minimum()); // 2
