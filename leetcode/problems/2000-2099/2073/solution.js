/*
 * @lc app=leetcode id=2073 lang=javascript
 *
 * [2073] Time Needed to Buy Tickets
 */

// @lc code=start
/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let target = tickets[k];
    let time = 0;
    for (let i = 0; i < tickets.length; i++) {
        if (i <= k) {
            time += Math.min(tickets[i], target);
        } else {
            time += Math.min(tickets[i], target - 1);
        }
    }
    return time;
};
// @lc code=end

// TEST:
console.log(timeRequiredToBuy([2,3,2], 2)); // 6
console.log(timeRequiredToBuy([5,1,1,1], 0)); // 8
console.log(timeRequiredToBuy([1], 0)); // 1
