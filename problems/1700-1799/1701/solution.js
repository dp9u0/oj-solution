/*
 * @lc app=leetcode id=1701 lang=javascript
 *
 * [1701] Average Waiting Time
 */

// @lc code=start
/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let cur = 0, totalWait = 0;
    for (const [arrival, time] of customers) {
        const start = Math.max(cur, arrival);
        cur = start + time;
        totalWait += cur - arrival;
    }
    return totalWait / customers.length;
};
// @lc code=end

// TEST:
console.log(averageWaitingTime([[1,2],[2,5],[4,3]])); // 5
console.log(averageWaitingTime([[5,2],[5,4],[10,3],[20,1]])); // 3.25
