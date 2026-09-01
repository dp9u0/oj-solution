/*
 * @lc app=leetcode id=826 lang=javascript
 *
 * [826] Most Profit Assigning Work
 */

// @lc code=start
/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    const n = difficulty.length;
    const jobs = difficulty.map((d, i) => [d, profit[i]]);
    jobs.sort((a, b) => a[0] - b[0]);

    let best = 0;
    for (let i = 0; i < n; i++) {
        best = Math.max(best, jobs[i][1]);
        jobs[i][1] = best;
    }

    const sorted = [...worker].sort((a, b) => a - b);
    let result = 0, j = 0;
    for (const ability of sorted) {
        while (j < n && jobs[j][0] <= ability) j++;
        if (j > 0) result += jobs[j - 1][1];
    }
    return result;
};
// @lc code=end

// TEST:
console.log(maxProfitAssignment([2,4,6,8,10], [10,20,30,40,50], [4,5,6,7]));  // 100
console.log(maxProfitAssignment([85,47,57], [24,66,99], [40,25,25]));           // 0
