/*
 * @lc app=leetcode.cn id=644 lang=javascript
 *
 * [644] 子数组最大平均数 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    const n = nums.length;
    // feasible(mid): some subarray of length >= k has average >= mid
    const feasible = mid => {
        const b = nums.map(x => x - mid);
        const pre = new Array(n + 1).fill(0);
        for (let i = 0; i < n; i++) pre[i + 1] = pre[i] + b[i];
        let minPre = Infinity;
        for (let j = k; j <= n; j++) {
            if (pre[j - k] < minPre) minPre = pre[j - k];
            if (pre[j] - minPre >= 0) return true;
        }
        return false;
    };

    let lo = Math.min(...nums), hi = Math.max(...nums);
    while (hi - lo > 1e-6) {
        const mid = (lo + hi) / 2;
        if (feasible(mid)) lo = mid;
        else hi = mid;
    }
    return lo;
};
// @lc code=end

// TEST:
console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4).toFixed(5)); // "12.75000"
console.log(findMaxAverage([5], 1).toFixed(5)); // "5.00000"
console.log(findMaxAverage([4, 0, 4, -1, -1, 0], 1).toFixed(5)); // "4.00000"
console.log(findMaxAverage([-1, -2, -3], 2).toFixed(5)); // "-1.50000"
console.log(findMaxAverage([3, 1, 4, 1, 5], 3).toFixed(5)); // "3.33333"
