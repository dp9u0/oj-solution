/*
 * @lc app=leetcode id=3500 lang=javascript
 *
 * [3500] Minimum Cost to Divide Array Into Subarrays
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @param {number} k
 * @return {number}
 */
var minimumCost = function(nums, cost, k) {
    const n = nums.length;
    const prefixN = [0];
    const prefixC = [0];
    for (let i = 0; i < n; i++) {
        prefixN[i + 1] = prefixN[i] + nums[i];
        prefixC[i + 1] = prefixC[i] + cost[i];
    }

    const INF = Infinity;
    let prev = new Array(n + 1).fill(INF);
    prev[0] = 0;

    let ans = INF;

    // dp[j][t] = min cost to partition nums[0..j-1] into t subarrays
    // dp[j][t] = (prefixN[j]+k*t)*prefixC[j] + min_i { prev[i] - (prefixN[j]+k*t)*prefixC[i] }
    // CHT: lines y = -prefixC[i]*x + prev[i], query at x = prefixN[j]+k*t
    for (let t = 1; t <= n; t++) {
        const curr = new Array(n + 1).fill(INF);
        const deque = [];
        let front = 0;

        for (let j = t; j <= n; j++) {
            // Add line for i = j-1
            const idx = j - 1;
            if (prev[idx] < INF) {
                while (deque.length - front >= 2) {
                    const a = deque[deque.length - 2];
                    const b = deque[deque.length - 1];
                    const sa = prefixC[a], sb = prefixC[b], si = prefixC[idx];
                    const ia = prev[a], ib = prev[b], ii = prev[idx];
                    if ((ii - ib) * (sb - sa) <= (ib - ia) * (si - sb)) {
                        deque.pop();
                    } else {
                        break;
                    }
                }
                deque.push(idx);
            }

            // Query at x = prefixN[j] + k*t
            const x = prefixN[j] + k * t;
            while (deque.length - front >= 2) {
                const a = deque[front];
                const b = deque[front + 1];
                if (-prefixC[a] * x + prev[a] >= -prefixC[b] * x + prev[b]) {
                    front++;
                } else {
                    break;
                }
            }

            if (front < deque.length) {
                const li = deque[front];
                curr[j] = x * (prefixC[j] - prefixC[li]) + prev[li];
            }
        }

        if (curr[n] < ans) ans = curr[n];
        prev = curr;
    }

    return ans;
};
// @lc code=end

// TEST:
console.log(minimumCost([3,1,4], [4,6,6], 1)); // 110
console.log(minimumCost([4,8,5,1,14,2,2,12,1], [7,2,8,4,2,2,1,1,2], 7)); // 985
console.log(minimumCost([1], [1], 1)); // (1+1)*1 = 2
console.log(minimumCost([1,2], [1,1], 10)); // (3+10)*2 = 26
console.log(minimumCost([5,5,5], [1,1,1], 1)); // one sub: (15+1)*3=48; two: (5+1)*1+(15+2)*2=6+34=40; three: (5+1)*1+(10+2)*1+(15+3)*1=6+12+18=36
