/*
 * @lc app=leetcode.cn id=1064 lang=javascript
 *
 * [1064] 不动点
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var fixedPoint = function(arr) {
    let lo = 0, hi = arr.length;
    while (lo < hi) {
        const mid = (lo + hi) >> 1;
        if (arr[mid] - mid < 0) lo = mid + 1;
        else hi = mid;
    }
    return lo < arr.length && arr[lo] === lo ? lo : -1;
};
// @lc code=end

// TEST:
console.log(fixedPoint([-10, -5, 0, 3, 7])); // 3
console.log(fixedPoint([0, 2, 5, 8, 17])); // 0
console.log(fixedPoint([-10, -5, 3, 4, 7, 9])); // -1
console.log(fixedPoint([0])); // 0
console.log(fixedPoint([5])); // -1
