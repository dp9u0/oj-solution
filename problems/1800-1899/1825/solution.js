/*
 * @lc app=leetcode id=1825 lang=javascript
 *
 * [1825] Finding MK Average
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} k
 */
var MKAverage = function(m, k) {
    this.m = m;
    this.k = k;
    this.queue = [];
    this.MAX = 100001;
    this.cntBIT = new Array(this.MAX + 1).fill(0);
    this.sumBIT = new Array(this.MAX + 1).fill(0);
    this.totalSum = 0;
};

MKAverage.prototype._update = function(bit, i, delta) {
    for (; i <= this.MAX; i += i & (-i)) bit[i] += delta;
};

MKAverage.prototype._query = function(bit, i) {
    let s = 0;
    for (; i > 0; i -= i & (-i)) s += bit[i];
    return s;
};

MKAverage.prototype._sumSmallest = function(cnt) {
    if (cnt <= 0) return 0;
    let lo = 1, hi = this.MAX;
    while (lo < hi) {
      let mid = (lo + hi) >> 1;
      if (this._query(this.cntBIT, mid) >= cnt) hi = mid;
      else lo = mid + 1;
    }
    let v = lo;
    let countBefore = this._query(this.cntBIT, v - 1);
    let sumBefore = this._query(this.sumBIT, v - 1);
    return sumBefore + (cnt - countBefore) * v;
};

MKAverage.prototype.addElement = function(num) {
    this.queue.push(num);
    this._update(this.cntBIT, num, 1);
    this._update(this.sumBIT, num, num);
    this.totalSum += num;
    if (this.queue.length > this.m) {
      let old = this.queue.shift();
      this._update(this.cntBIT, old, -1);
      this._update(this.sumBIT, old, -old);
      this.totalSum -= old;
    }
};

MKAverage.prototype.calculateMKAverage = function() {
    if (this.queue.length < this.m) return -1;
    let sumSmallK = this._sumSmallest(this.k);
    let sumLargeK = this.totalSum - this._sumSmallest(this.m - this.k);
    return Math.floor((this.totalSum - sumSmallK - sumLargeK) / (this.m - 2 * this.k));
};
// @lc code=end

// TEST:
let obj = new MKAverage(3, 1);
obj.addElement(3);
obj.addElement(1);
console.log(obj.calculateMKAverage()); // -1
obj.addElement(10);
console.log(obj.calculateMKAverage()); // 3
obj.addElement(5);
obj.addElement(5);
obj.addElement(5);
console.log(obj.calculateMKAverage()); // 5
