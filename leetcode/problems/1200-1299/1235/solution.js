/*
 * @lc app=leetcode id=1235 lang=javascript
 *
 * [1235] Maximum Profit in Job Scheduling
 */

// @lc code=start
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    const n = startTime.length;
    const jobs = [];
    for (let i = 0; i < n; i++) {
        jobs.push({ start: startTime[i], end: endTime[i], profit: profit[i] });
    }
    jobs.sort((a, b) => a.end - b.end);

    const dp = new Int32Array(n + 1);
    for (let i = 0; i < n; i++) {
        // Binary search for last job ending <= jobs[i].start
        let lo = 0, hi = i;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (jobs[mid].end <= jobs[i].start) lo = mid + 1;
            else hi = mid;
        }
        const prev = lo; // first job ending > jobs[i].start, so prev-1 is last valid
        const take = jobs[i].profit + dp[prev];
        const skip = dp[i];
        dp[i + 1] = Math.max(take, skip);
    }

    return dp[n];
};
// @lc code=end

// TEST:
console.log(jobScheduling([1,2,3,3], [3,4,5,6], [50,10,40,70])); // 120
console.log(jobScheduling([1,2,3,4,6], [3,5,10,6,9], [20,20,100,70,60])); // 150
console.log(jobScheduling([1,1,1], [2,3,4], [5,6,4])); // 6
console.log(jobScheduling([1], [5], [10])); // 10
console.log(jobScheduling([1,4,5], [4,5,6], [10,10,10])); // 30