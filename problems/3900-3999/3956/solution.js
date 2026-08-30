/*
 * @lc app=leetcode id=3956 lang=javascript
 *
 * [3956] Maximum Sum of M Non-Overlapping Subarrays I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} m
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var maximumSum = function(nums, m, l, r) {
    const n = nums.length;
    const P = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) P[i + 1] = P[i] + nums[i];

    // dp[j][i]: 至多 j 个子数组、前 i 个元素内的最大总和（允许空选，值为 0）
    // dp[j][i] = max(dp[j][i-1], max_{k in [i-r, i-l], k>=0} dp[j-1][k] + P[i] - P[k])
    // 窗口内 dp[j-1][k] - P[k] 的最大值用单调队列维护
    let prev = new Array(n + 1).fill(0);
    let best = -Infinity;

    for (let j = 1; j <= m; j++) {
        const cur = new Array(n + 1).fill(0);
        const deque = [];
        let head = 0;
        let layerBest = -Infinity;
        for (let i = 1; i <= n; i++) {
            const kNew = i - l; // 新进入窗口的起点
            if (kNew >= 0) {
                const val = prev[kNew] - P[kNew];
                while (deque.length > head) {
                    const tail = deque[deque.length - 1];
                    if (prev[tail] - P[tail] > val) break;
                    deque.pop();
                }
                deque.push(kNew);
            }
            const kMin = i - r;
            while (deque.length > head && deque[head] < kMin) head++;
            if (deque.length > head) {
                const k = deque[head];
                const t = prev[k] + P[i] - P[k];
                if (t > cur[i - 1]) cur[i] = t; else cur[i] = cur[i - 1];
                if (t > layerBest) layerBest = t;
            } else {
                cur[i] = cur[i - 1];
            }
        }
        if (layerBest > best) best = layerBest;
        prev = cur;
    }
    return best;
};
// @lc code=end

// TEST:
console.log(maximumSum([4, 1, -5, 2], 2, 1, 3)); // 7
console.log(maximumSum([1, 0, 3, 4], 2, 1, 2)); // 8
console.log(maximumSum([-1, 7, -4], 1, 2, 3)); // 6
console.log(maximumSum([-3, -4, -1], 2, 1, 2)); // -1
console.log(maximumSum([1, -100, 1, -100, 1], 3, 1, 1)); // 3
console.log(maximumSum([5], 1, 1, 1)); // 5
console.log(maximumSum([-2], 1, 1, 1)); // -2
console.log(maximumSum([3, -2, 5, -1, 4], 2, 2, 3)); // 9 ([3,-2]=1 与 [5,-1,4]=8)
console.log(maximumSum([1, -100, 1, -100, 1], 1, 1, 1)); // 1
