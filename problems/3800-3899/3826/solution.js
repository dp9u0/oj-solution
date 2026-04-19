/*
 * @lc app=leetcode id=3826 lang=javascript
 *
 * [3826] Minimum Partition Score
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minPartitionScore = function(nums, k) {
    const n = nums.length;

    const P = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) P[i + 1] = P[i] + nums[i];

    const f = (x) => x * (x + 1) / 2;

    const INF = 1e18;
    let dp_prev = new Array(n + 1).fill(INF);
    dp_prev[0] = 0;

    for (let j = 1; j <= k; j++) {
        const dp_curr = new Array(n + 1).fill(INF);

        const compute = (L, R, optL, optR) => {
            if (L > R) return;
            const mid = (L + R) >> 1;
            let bestCost = INF, bestM = -1;
            const mEnd = Math.min(mid - 1, optR);
            for (let m = optL; m <= mEnd; m++) {
                if (dp_prev[m] >= INF) continue;
                const cost = dp_prev[m] + f(P[mid] - P[m]);
                if (cost < bestCost) {
                    bestCost = cost;
                    bestM = m;
                }
            }
            dp_curr[mid] = bestCost;
            compute(L, mid - 1, optL, bestM);
            compute(mid + 1, R, bestM, optR);
        };

        compute(j, n, j - 1, n - 1);
        dp_prev = dp_curr;
    }

    return dp_prev[n];
};
// @lc code=end

// TEST:
console.log(minPartitionScore([5, 1, 2, 1], 2)); // 25
console.log(minPartitionScore([1, 2, 3, 4], 1)); // 55
console.log(minPartitionScore([1, 1, 1], 3)); // 3
console.log(minPartitionScore([1], 1)); // 1
console.log(minPartitionScore([1, 2], 2)); // 4
console.log(minPartitionScore([3, 3, 3], 2)); // 27
