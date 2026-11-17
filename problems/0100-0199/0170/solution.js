/*
 * @lc app=leetcode.cn id=170 lang=javascript
 *
 * [170] 两数之和 III - 数据结构设计
 */

// @lc code=start

var TwoSum = function() {
    this.count = new Map();
};

/**
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    this.count.set(number, (this.count.get(number) || 0) + 1);
};

/**
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    for (const [x, c] of this.count) {
        const comp = value - x;
        if (comp === x) {
            if (c >= 2) return true;
        } else if (this.count.has(comp)) {
            return true;
        }
    }
    return false;
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
// @lc code=end

// TEST:
const ts = new TwoSum();
ts.add(1); ts.add(3); ts.add(5);
console.log(ts.find(4)); // true (1+3)
console.log(ts.find(7)); // false
const ts2 = new TwoSum();
ts2.add(3); ts2.add(3);
console.log(ts2.find(6)); // true (two stored 3s)
console.log(ts2.find(3)); // false (a pair needs two entries; single 3 cannot pair with itself)
const ts3 = new TwoSum();
ts3.add(0); ts3.add(-1); ts3.add(1);
console.log(ts3.find(0)); // true (-1 + 1)
