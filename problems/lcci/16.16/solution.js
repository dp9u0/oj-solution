/*
 * @lc app=leetcode.cn id=面试题 16.16 lang=javascript
 *
 * [面试题 16.16] 部分排序
 */

// @lc code=start
/**
 * @param {number[]} array
 * @return {number[]}
 */
var subSort = function(array) {
    const n = array.length;
    let m = -1;
    let right = -1;
    // 从右往左：出现比后缀最小值大的最左位置即左端
    let minSoFar = Infinity;
    for (let i = n - 1; i >= 0; i--) {
        if (array[i] > minSoFar) m = i;
        if (array[i] < minSoFar) minSoFar = array[i];
    }
    // 从左往右：出现比前缀最大值小的最右位置即右端
    let maxSoFar = -Infinity;
    for (let i = 0; i < n; i++) {
        if (array[i] < maxSoFar) right = i;
        if (array[i] > maxSoFar) maxSoFar = array[i];
    }
    return [m, right];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(subSort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19])) === '[3,9]');
console.log(JSON.stringify(subSort([])) === '[-1,-1]');
console.log(JSON.stringify(subSort([1, 2, 3])) === '[-1,-1]');
console.log(JSON.stringify(subSort([1])) === '[-1,-1]');
console.log(JSON.stringify(subSort([1, 2, 1])) === '[1,2]');
console.log(JSON.stringify(subSort([1, 3, 2, 2, 2])) === '[1,4]'); // 重复元素
console.log(JSON.stringify(subSort([3, 2, 1])) === '[0,2]'); // 全乱
