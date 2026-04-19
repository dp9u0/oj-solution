/*
 * @lc app=leetcode id=410 lang=javascript
 *
 * [410] Split Array Largest Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    const check = (limit) => {
        let count = 1;
        let sum = 0;
        for (const x of nums) {
            if (sum + x > limit) {
                count++;
                sum = x;
            } else {
                sum += x;
            }
        }
        return count <= k;
    };

    let lo = 0;
    let hi = 0;
    for (const x of nums) {
        if (x > lo) lo = x;
        hi += x;
    }

    while (lo < hi) {
        const mid = lo + ((hi - lo) >> 1);
        if (check(mid)) hi = mid;
        else lo = mid + 1;
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(splitArray([7, 2, 5, 10, 8], 2)); // 18
console.log(splitArray([1, 2, 3, 4, 5], 2)); // 9
console.log(splitArray([1, 4, 4], 3)); // 4
console.log(splitArray([2, 3, 1, 1, 1, 1, 1], 5)); // 3
console.log(splitArray([10], 1)); // 10
console.log(splitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // 21
