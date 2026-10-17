/*
 * @lc app=leetcode.cn id=面试题 16.06 lang=javascript
 *
 * [面试题 16.06] 最小差
 */

// @lc code=start
/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
var smallestDifference = function(a, b) {
    // 排序后归并双指针；差为零短路
    a.sort((x, y) => x - y);
    b.sort((x, y) => x - y);
    let i = 0;
    let j = 0;
    let best = Infinity;
    while (i < a.length && j < b.length) {
        const d = a[i] - b[j];
        const ad = Math.abs(d);
        if (ad < best) best = ad;
        if (d === 0) return 0;
        if (d < 0) i++;
        else j++;
    }
    return best;
};
// @lc code=end

// TEST:
console.log(smallestDifference([1, 3, 15, 11, 2], [23, 127, 235, 19, 8]) === 3);
console.log(smallestDifference([0], [2147483647]) === 2147483647);
console.log(smallestDifference([-2147483648], [2147483647]) === 4294967295);
console.log(smallestDifference([5, 7], [7, 5]) === 0); // 精确相等
console.log(smallestDifference([-5, -1], [-3, 10]) === 2);
console.log(smallestDifference([1, 2, 3], [4]) === 1);
