/*
 * @lc app=leetcode id=2013 lang=javascript
 *
 * [2013] Detect Squares
 */

// @lc code=start

var DetectSquares = function() {
    this.points = new Map();
};

/**
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function(point) {
    const [x, y] = point;
    if (!this.points.has(x)) {
        this.points.set(x, new Map());
    }
    const col = this.points.get(x);
    col.set(y, (col.get(y) || 0) + 1);
};

/**
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function(point) {
    const [x, y] = point;
    if (!this.points.has(x)) return 0;
    let result = 0;
    const col = this.points.get(x);
    for (const [y2, cnt2] of col) {
        const d = Math.abs(y - y2);
        if (d === 0) continue;
        // check left corner (x-d, y) and (x-d, y2)
        if (this.points.has(x - d)) {
            const left = this.points.get(x - d);
            result += (left.get(y) || 0) * (left.get(y2) || 0) * cnt2;
        }
        // check right corner (x+d, y) and (x+d, y2)
        if (this.points.has(x + d)) {
            const right = this.points.get(x + d);
            result += (right.get(y) || 0) * (right.get(y2) || 0) * cnt2;
        }
    }
    return result;
};

/** 
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */
// @lc code=end

// TEST:
var ds = new DetectSquares();
ds.add([3, 10]);
ds.add([11, 2]);
ds.add([3, 2]);
console.log(ds.count([11, 10])); // 1
console.log(ds.count([14, 8]));  // 0
ds.add([11, 2]);
console.log(ds.count([11, 10])); // 2
