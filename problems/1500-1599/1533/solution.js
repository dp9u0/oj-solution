/*
 * @lc app=leetcode.cn id=1533 lang=javascript
 *
 * [1533] 找到最大整数的索引
 */

// @lc code=start
/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *     // Compares the sum of arr[l..r] with the sum of arr[x..y]
 *     // return 1 if sum(arr[l..r]) > sum(arr[x..y])
 *     // return 0 if sum(arr[l..r]) == sum(arr[x..y])
 *     // return -1 if sum(arr[l..r]) < sum(arr[x..y])
 *     @param {number} l, r, x, y
 *     @return {number}
 *     this.compareSub = function(l, r, x, y) {
 *         ...
 *     };
 *
 *     // Returns the length of the array
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @return {number}
 */
var getIndex = function(reader) {
    let lo = 0, hi = reader.length() - 1;
    while (lo < hi) {
        const len = hi - lo + 1;
        if (len === 2) {
            return reader.compareSub(lo, lo, hi, hi) === 1 ? lo : hi;
        }
        const mid = (lo + hi) >> 1;
        if (len % 2 === 0) {
            const res = reader.compareSub(lo, mid, mid + 1, hi);
            if (res === 1) hi = mid;
            else lo = mid + 1;
        } else {
            const res = reader.compareSub(lo, mid - 1, mid + 1, hi);
            if (res === 0) return mid; // equal sides -> the odd one out is mid
            if (res === 1) hi = mid - 1;
            else lo = mid + 1;
        }
    }
    return lo;
};
// @lc code=end

// TEST:
const makeReader = (arr) => {
    let calls = 0;
    return {
        calls: () => calls,
        length: () => arr.length,
        compareSub: (l, r, x, y) => {
            calls++;
            const sum = (a, b) => { let s = 0; for (let i = a; i <= b; i++) s += arr[i]; return s; };
            return Math.sign(sum(l, r) - sum(x, y));
        },
    };
};
console.log(getIndex(makeReader([7,7,7,7,10,7,7,7]))); // 4
console.log(getIndex(makeReader([6,6,12]))); // 2
console.log(getIndex(makeReader([1,2,1]))); // 1 (odd, middle)
console.log(getIndex(makeReader([5,1]))); // 0
console.log(getIndex(makeReader([3,3,3,9]))); // 3
