/*
 * @lc app=leetcode.cn id=2297 lang=javascript
 *
 * [2297] 跳跃游戏 VIII
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} costs
 * @return {number}
 */
var minCost = function(nums, costs) {
    const n = nums.length;
    const nextGE = new Int32Array(n).fill(-1);
    const nextSmall = new Int32Array(n).fill(-1);
    const st1 = [], st2 = [];
    for (let i = n - 1; i >= 0; i--) {
        while (st1.length && nums[st1[st1.length - 1]] < nums[i]) st1.pop();
        nextGE[i] = st1.length ? st1[st1.length - 1] : -1;
        st1.push(i);
        while (st2.length && nums[st2[st2.length - 1]] >= nums[i]) st2.pop();
        nextSmall[i] = st2.length ? st2[st2.length - 1] : -1;
        st2.push(i);
    }
    const INF = Infinity;
    const dp = new Float64Array(n).fill(INF);
    dp[0] = 0;
    for (let i = 0; i < n; i++) {
        if (dp[i] === INF) continue;
        if (nextGE[i] !== -1) {
            const j = nextGE[i];
            if (dp[i] + costs[j] < dp[j]) dp[j] = dp[i] + costs[j];
        }
        if (nextSmall[i] !== -1) {
            const j = nextSmall[i];
            if (dp[i] + costs[j] < dp[j]) dp[j] = dp[i] + costs[j];
        }
    }
    return dp[n - 1];
};
// @lc code=end

// TEST:
console.log(minCost([3,2,4,4,1], [3,7,6,4,2])); // 8
console.log(minCost([0,1,2], [1,1,1])); // 2
console.log(minCost([1], [5])); // 0
console.log(minCost([2,2], [1,3])); // 3 (0->1, equal values case (a))
console.log(minCost([5,1,1,5], [4,2,2,1])); // 1 (direct 0->3 via equal values)
