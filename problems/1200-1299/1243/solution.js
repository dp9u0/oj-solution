/*
 * @lc app=leetcode.cn id=1243 lang=javascript
 *
 * [1243] 数组变换
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var transformArray = function(arr) {
    const n = arr.length;
    while (true) {
        let changed = false;
        const next = arr.slice();
        for (let i = 1; i < n - 1; i++) {
            if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) { next[i]++; changed = true; }
            else if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) { next[i]--; changed = true; }
        }
        if (!changed) return arr;
        arr = next;
    }
};
// @lc code=end

// TEST:
console.log(transformArray([6, 2, 3, 4])); // [6,3,3,4]
console.log(transformArray([1, 6, 3, 4, 3, 5])); // [1,4,4,4,4,5]
console.log(transformArray([1])); // [1]
console.log(transformArray([2, 1, 2, 1, 2])); // [2,2,2,2,2]
console.log(transformArray([1, 2, 3])); // [1,2,3]
