/*
 * @lc app=leetcode.cn id=2702 lang=javascript
 *
 * [2702] 使数字变为非正数的最小操作次数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minOperations = function(nums, x, y) {
    const d = x - y;
    let max = 0;
    for (const v of nums) if (v > max) max = v;
    const feasible = (k) => {
        let total = 0;
        for (const v of nums) {
            const need = v - k * y;
            if (need > 0) {
                total += Math.ceil(need / d);
                if (total > k) return false;
            }
        }
        return true;
    };
    let lo = 1, hi = Math.ceil(max / y);
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (feasible(mid)) hi = mid;
        else lo = mid + 1;
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(minOperations([3,4,1,7,6], 4, 2)); // 3
console.log(minOperations([1,2,1], 2, 1)); // 1
console.log(minOperations([1,1,1,1,1], 3, 1)); // 1
console.log(minOperations([5,6,7,8,9], 4, 1)); // 5
console.log(minOperations([1000000000], 2, 1)); // 500000000
