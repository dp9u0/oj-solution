/*
 * @lc app=leetcode id=1157 lang=javascript
 *
 * [1157] Online Majority Element In Subarray
 */

// @lc code=start
/**
 * @param {number[]} arr
 */
var MajorityChecker = function(arr) {
    this.arr = arr;
    this.pos = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (!this.pos.has(arr[i])) this.pos.set(arr[i], []);
        this.pos.get(arr[i]).push(i);
    }
};

function lowerBound(arr, target) {
    let lo = 0, hi = arr.length;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (arr[mid] < target) lo = mid + 1;
        else hi = mid;
    }
    return lo;
}

function upperBound(arr, target) {
    let lo = 0, hi = arr.length;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (arr[mid] <= target) lo = mid + 1;
        else hi = mid;
    }
    return lo;
}

/**
 * @param {number} left
 * @param {number} right
 * @param {number} threshold
 * @return {number}
 */
MajorityChecker.prototype.query = function(left, right, threshold) {
    for (let t = 0; t < 20; t++) {
        const idx = left + Math.floor(Math.random() * (right - left + 1));
        const val = this.arr[idx];
        const indices = this.pos.get(val);
        const lo = lowerBound(indices, left);
        const hi = upperBound(indices, right);
        if (hi - lo >= threshold) return val;
    }
    return -1;
};
// @lc code=end

// TEST:
const mc = new MajorityChecker([1, 1, 2, 2, 1, 1]);
console.log(mc.query(0, 5, 4)); // 1
console.log(mc.query(0, 3, 3)); // -1
console.log(mc.query(2, 3, 2)); // 2
const mc2 = new MajorityChecker([1]);
console.log(mc2.query(0, 0, 1)); // 1
const mc3 = new MajorityChecker([2,2,1,2,2]);
console.log(mc3.query(0, 4, 3)); // 2
