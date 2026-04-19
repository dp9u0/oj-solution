/*
 * @lc app=leetcode id=1760 lang=javascript
 *
 * [1760] Minimum Limit of Balls in a Bag
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function(nums, maxOperations) {
    const check = (x) => {
        let ops = 0;
        for (const v of nums) {
            ops += Math.ceil(v / x) - 1;
            if (ops > maxOperations) return false;
        }
        return ops <= maxOperations;
    };

    let lo = 1, hi = Math.max(...nums);
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (check(mid)) hi = mid;
        else lo = mid + 1;
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(minimumSize([9], 2)); // 3
console.log(minimumSize([2,4,8,2], 4)); // 2
console.log(minimumSize([1], 1)); // 1
