/*
 * @lc app=leetcode id=2276 lang=javascript
 *
 * [2276] Count Integers in Intervals
 */

// @lc code=start

var CountIntervals = function() {
    this.ivs = [];
    this.cnt = 0;
};

CountIntervals.prototype.add = function(left, right) {
    const ivs = this.ivs;
    const n = ivs.length;

    let lo = 0, hi = n;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (ivs[mid][1] >= left - 1) hi = mid;
        else lo = mid + 1;
    }
    const s = lo;

    lo = s; hi = n;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (ivs[mid][0] > right + 1) hi = mid;
        else lo = mid + 1;
    }
    const e = lo;

    for (let i = s; i < e; i++) {
        left = Math.min(left, ivs[i][0]);
        right = Math.max(right, ivs[i][1]);
        this.cnt -= ivs[i][1] - ivs[i][0] + 1;
    }

    ivs.splice(s, e - s, [left, right]);
    this.cnt += right - left + 1;
};

CountIntervals.prototype.count = function() {
    return this.cnt;
};

/** 
 * Your CountIntervals object will be instantiated and called as such:
 * var obj = new CountIntervals()
 * obj.add(left,right)
 * var param_2 = obj.count()
 */
// @lc code=end

// TEST:
var obj = new CountIntervals();
obj.add(2, 3);
obj.add(7, 10);
console.log(obj.count()); // 6
obj.add(5, 8);
console.log(obj.count()); // 8

var obj2 = new CountIntervals();
obj2.add(1, 1);
obj2.add(2, 2);
console.log(obj2.count()); // 2
obj2.add(1, 2);
console.log(obj2.count()); // 2

var obj3 = new CountIntervals();
obj3.add(10, 20);
obj3.add(1, 5);
obj3.add(7, 8);
console.log(obj3.count()); // 18

var obj4 = new CountIntervals();
obj4.add(5, 10);
obj4.add(1, 3);
console.log(obj4.count()); // 9
obj4.add(2, 7);
console.log(obj4.count()); // 10
