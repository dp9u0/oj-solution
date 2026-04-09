/*
 * @lc app=leetcode id=1723 lang=javascript
 *
 * [1723] Find Minimum Time to Finish All Jobs
 */

// @lc code=start
/**
 * @param {number[]} jobs
 * @param {number} k
 * @return {number}
 */
var minimumTimeRequired = function(jobs, k) {
    const n = jobs.length;
    // Sort descending for better pruning
    jobs.sort((a, b) => b - a);

    let lo = jobs[0];
    let hi = jobs.reduce((s, v) => s + v, 0);

    const canAssign = (limit) => {
        const workers = new Array(k).fill(0);

        const dfs = (idx) => {
            if (idx === n) return true;
            const job = jobs[idx];
            for (let i = 0; i < k; i++) {
                if (workers[i] + job <= limit) {
                    workers[i] += job;
                    if (dfs(idx + 1)) return true;
                    workers[i] -= job;
                }
                // Pruning: if worker has 0 load, no need to try other empty workers
                if (workers[i] === 0) break;
            }
            return false;
        };

        return dfs(0);
    };

    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (canAssign(mid)) {
            hi = mid;
        } else {
            lo = mid + 1;
        }
    }

    return lo;
};
// @lc code=end

// TEST:
console.log(minimumTimeRequired([3,2,3], 3));          // 3
console.log(minimumTimeRequired([1,2,4,7,8], 2));      // 11
console.log(minimumTimeRequired([5,5,4,4,4], 2));      // 12
