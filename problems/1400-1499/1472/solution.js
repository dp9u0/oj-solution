/*
 * @lc app=leetcode id=1472 lang=javascript
 *
 * [1472] Design Browser History
 */

// @lc code=start
/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.history = [homepage];
    this.cur = 0;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.history = this.history.slice(0, this.cur + 1);
    this.history.push(url);
    this.cur++;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    this.cur = Math.max(0, this.cur - steps);
    return this.history[this.cur];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    this.cur = Math.min(this.history.length - 1, this.cur + steps);
    return this.history[this.cur];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
// @lc code=end

// TEST:
const bh = new BrowserHistory('leetcode.com');
bh.visit('google.com');
bh.visit('facebook.com');
bh.visit('youtube.com');
console.log(bh.back(1));      // 'facebook.com'
console.log(bh.back(1));      // 'google.com'
console.log(bh.forward(1));   // 'facebook.com'
bh.visit('linkedin.com');
console.log(bh.forward(2));   // 'linkedin.com'
console.log(bh.back(2));      // 'google.com'
console.log(bh.back(7));      // 'leetcode.com'
