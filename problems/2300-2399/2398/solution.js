/*
 * @lc app=leetcode id=2398 lang=javascript
 *
 * [2398] Maximum Number of Robots Within Budget
 */

// @lc code=start
/**
 * @param {number[]} chargeTimes
 * @param {number[]} runningCosts
 * @param {number} budget
 * @return {number}
 */
var maximumRobots = function(chargeTimes, runningCosts, budget) {
    const n = chargeTimes.length;
    const dq = [];
    let sum = 0, ans = 0, l = 0;

    for (let r = 0; r < n; r++) {
        sum += runningCosts[r];
        while (dq.length && chargeTimes[dq[dq.length - 1]] <= chargeTimes[r]) dq.pop();
        dq.push(r);

        while (l <= r) {
            const maxCharge = chargeTimes[dq[0]];
            if (BigInt(maxCharge) + BigInt(r - l + 1) * BigInt(sum) <= BigInt(budget)) break;
            sum -= runningCosts[l];
            if (dq[0] === l) dq.shift();
            l++;
        }
        ans = Math.max(ans, r - l + 1);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(maximumRobots([3, 6, 1, 3, 4], [2, 1, 3, 4, 5], 25)); // 3
console.log(maximumRobots([11, 12, 19], [10, 8, 7], 19)); // 0
console.log(maximumRobots([1], [1], 1)); // 1
console.log(maximumRobots([1, 2], [1, 1], 3)); // 1
console.log(maximumRobots([5, 5], [1, 1], 10)); // 2
