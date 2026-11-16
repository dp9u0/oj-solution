/*
 * @lc app=leetcode.cn id=346 lang=javascript
 *
 * [346] 数据流中的移动平均值
 */

// @lc code=start
/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size;
    this.queue = [];
    this.sum = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.queue.push(val);
    this.sum += val;
    if (this.queue.length > this.size) {
        this.sum -= this.queue.shift();
    }
    return this.sum / this.queue.length;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
// @lc code=end
// TEST:
const m = new MovingAverage(3);
console.log(m.next(1)); // 1
console.log(m.next(10)); // (1+10)/2 = 5.5
console.log(m.next(3)); // (1+10+3)/3 ≈ 4.66667
console.log(m.next(5)); // (10+3+5)/3 = 6
