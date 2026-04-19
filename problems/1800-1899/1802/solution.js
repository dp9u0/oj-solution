/*
 * @lc app=leetcode id=1802 lang=javascript
 *
 * [1802] Maximum Value at a Given Index in a Bounded Array
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function(n, index, maxSum) {
    const getSum = (peak, len) => {
        if (peak >= len) {
            return (peak + peak - len + 1) * len / 2;
        }
        return (peak + 1) * peak / 2 + (len - peak);
    };

    let lo = 1, hi = maxSum;
    while (lo < hi) {
        const mid = Math.ceil((lo + hi) / 2);
        const leftLen = index;
        const rightLen = n - 1 - index;
        const total = getSum(mid - 1, leftLen) + mid + getSum(mid - 1, rightLen);
        if (total <= maxSum) {
            lo = mid;
        } else {
            hi = mid - 1;
        }
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(maxValue(4, 2, 6));    // 2
console.log(maxValue(6, 1, 10));   // 3
