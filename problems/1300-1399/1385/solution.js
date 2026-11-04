/*
 * @lc app=leetcode.cn id=1385 lang=javascript
 *
 * [1385] 两个数组间的距离值
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    arr2.sort((a, b) => a - b);
    let count = 0;
    for (const x of arr1) {
        // 第一个 >= x - d 的位置
        let lo = 0, hi = arr2.length;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (arr2[mid] < x - d) lo = mid + 1;
            else hi = mid;
        }
        if (lo === arr2.length || arr2[lo] > x + d) count++;
    }
    return count;
};
// @lc code=end

// TEST:
if (require.main === module) {
    console.log(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2)); // 2
    console.log(findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3)); // 2
    console.log(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6)); // 1
    console.log(findTheDistanceValue([1], [1], 0)); // 0
    console.log(findTheDistanceValue([-1000], [1000], 100)); // 1
    console.log(findTheDistanceValue([3, 2, 1], [4, 5, 6], 1)); // 0
}
