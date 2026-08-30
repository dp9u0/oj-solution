/*
 * @lc app=leetcode id=757 lang=javascript
 *
 * [757] Set Intersection Size At Least Two
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intersectionSizeTwo = function(intervals) {
    // 按右端点升序，右端点相同时按左端点降序（短区间优先）
    intervals.sort((a, b) => a[1] - b[1] || b[0] - a[0]);

    // 已选集合中最大的两个元素（-1 视为负无穷，因坐标 >= 0）
    let largest = -1;
    let second = -1;

    let count = 0;
    for (const [s, e] of intervals) {
        if (second >= s) {
            // largest 和 second 均落在 [s, e] 内，已满足
            continue;
        }
        if (largest >= s) {
            // 仅 largest 在区间内，贪心添加最大的 e
            count++;
            second = largest;
            largest = e;
        } else {
            // 区间内没有任何已选元素，贪心添加 e-1 和 e
            count += 2;
            second = e - 1;
            largest = e;
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(intersectionSizeTwo([[1, 3], [3, 7], [8, 9]]));                    // 5
console.log(intersectionSizeTwo([[1, 3], [1, 4], [2, 5], [3, 5]]));            // 3
console.log(intersectionSizeTwo([[1, 2], [2, 3], [2, 4], [4, 5]]));            // 5
console.log(intersectionSizeTwo([[1, 2]]));                                    // 2
console.log(intersectionSizeTwo([[0, 1], [0, 1], [0, 1]]));                    // 2
console.log(intersectionSizeTwo([[1, 5], [2, 6], [3, 7]]));                    // 2
console.log(intersectionSizeTwo([[2, 3], [1, 4], [5, 6]]));                    // 4
