/*
 * @lc app=leetcode id=1986 lang=javascript
 *
 * [1986] Minimum Number of Work Sessions to Finish the Tasks
 */

// @lc code=start
/**
 * @param {number[]} tasks
 * @param {number} sessionTime
 * @return {number}
 */
var minSessions = function(tasks, sessionTime) {
    const n = tasks.length, N = 1 << n;
    const dp = Array.from({ length: N }, () => [Infinity, 0]);
    dp[0] = [1, sessionTime];
    for (let mask = 0; mask < N; mask++) {
        const [sess, rem] = dp[mask];
        if (sess === Infinity) continue;
        for (let i = 0; i < n; i++) {
            if (mask & (1 << i)) continue;
            const nm = mask | (1 << i);
            const [ns, nr] = rem >= tasks[i]
                ? [sess, rem - tasks[i]]
                : [sess + 1, sessionTime - tasks[i]];
            if (ns < dp[nm][0] || (ns === dp[nm][0] && nr > dp[nm][1]))
                dp[nm] = [ns, nr];
        }
    }
    return dp[N - 1][0];
};
// @lc code=end

// TEST:
console.log(minSessions([1,2,3], 3)); // 2
console.log(minSessions([3,1,3,1,1], 8)); // 2
console.log(minSessions([1,2,3,4,5], 15)); // 1
console.log(minSessions([2], 3)); // 1
console.log(minSessions([1,1,1], 3)); // 1
