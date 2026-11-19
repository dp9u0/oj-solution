/*
 * @lc app=leetcode.cn id=702 lang=javascript
 *
 * [702] 搜索长度未知的有序数组
 */

// @lc code=start
/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
var search = function (reader, target) {
    // doubling to find an upper bound (out-of-range reads return INT_MAX, ending the loop)
    let lo = 0, hi = 1;
    while (reader.get(hi) < target) {
        lo = hi;
        hi *= 2;
    }
    // binary search within [lo, hi]
    while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        const v = reader.get(mid);
        if (v === target) return mid;
        if (v < target) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;
};
// @lc code=end

// TEST:
class R {
    constructor(arr) { this.arr = arr; }
    get(i) { return i < 0 || i >= this.arr.length ? 2147483647 : this.arr[i]; }
}

console.log(search(new R([-1, 0, 3, 5, 9, 12]), 9)); // 4
console.log(search(new R([-1, 0, 3, 5, 9, 12]), 2)); // -1
console.log(search(new R([1]), 1)); // 0
const big = Array.from({ length: 100 }, (_, i) => i * 2); // [0,2,4,...,198]
console.log(search(new R(big), 66)); // 33
console.log(search(new R(big), 67)); // -1
