/*
 * @lc app=leetcode id=2453 lang=javascript
 *
 * [2453] Destroy Sequential Targets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} space
 * @return {number}
 */
var destroyTargets = function(nums, space) {
    const count = new Map();
    const minVal = new Map();
    for (const num of nums) {
        const r = num % space;
        count.set(r, (count.get(r) || 0) + 1);
        if (!minVal.has(r) || num < minVal.get(r)) {
            minVal.set(r, num);
        }
    }
    let maxCount = 0, result = Infinity;
    for (const [r, c] of count) {
        if (c > maxCount || (c === maxCount && minVal.get(r) < result)) {
            maxCount = c;
            result = minVal.get(r);
        }
    }
    return result;
};
// @lc code=end

// TEST:
console.log(destroyTargets([3,7,8,1,1,5], 2)); // 1
console.log(destroyTargets([1,3,5,2,4,6], 2)); // 1
console.log(destroyTargets([6,2,5], 100)); // 2
