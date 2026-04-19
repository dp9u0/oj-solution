/*
 * @lc app=leetcode id=3892 lang=javascript
 *
 * [3892] Minimum Operations to Achieve At Least K Peaks
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    const n = nums.length;
    if (k === 0) return 0;
    if (k > Math.floor(n / 2)) return -1;

    const cost = new Array(n);
    for (let i = 0; i < n; i++) {
        const prev = nums[(i - 1 + n) % n];
        const next = nums[(i + 1) % n];
        cost[i] = Math.max(0, Math.max(prev, next) + 1 - nums[i]);
    }

    const INF = 1e18;

    // Select target non-adjacent indices from cost[start..end-1] with min total cost
    const solve = (start, end, target) => {
        if (target === 0) return 0;
        const m = end - start;
        if (m <= 0 || target > Math.ceil(m / 2)) return INF;

        let prev2 = new Array(target + 1).fill(INF);
        let prev1 = new Array(target + 1).fill(INF);
        let curr = new Array(target + 1).fill(INF);
        prev2[0] = 0;
        prev1[0] = 0;

        for (let i = 0; i < m; i++) {
            const c = cost[start + i];
            curr[0] = 0;
            for (let j = 1; j <= target; j++) {
                curr[j] = prev1[j];
                const sel = prev2[j - 1] + c;
                if (sel < curr[j]) curr[j] = sel;
            }
            const tmp = prev2;
            prev2 = prev1;
            prev1 = curr;
            curr = tmp;
        }

        return prev1[target];
    };

    let ans = solve(1, n, k);
    if (k >= 1) {
        const r2 = cost[0] + solve(2, n - 1, k - 1);
        if (r2 < ans) ans = r2;
    }

    return ans >= INF ? -1 : ans;
};
// @lc code=end

// TEST:
console.log(minOperations([2, 1, 2], 1)); // 1
console.log(minOperations([4, 5, 3, 6], 2)); // 0
console.log(minOperations([3, 7, 3], 2)); // -1
console.log(minOperations([1, 1], 1)); // 1
console.log(minOperations([5, 1, 3], 1)); // 0
console.log(minOperations([1, 2, 1, 2, 1], 2)); // 0
console.log(minOperations([3, 3, 3], 1)); // 1
