/*
 * @lc app=leetcode id=1953 lang=javascript
 *
 * [1953] Maximum Number of Weeks for Which You Can Work
 */

// @lc code=start
/**
 * @param {number[]} milestones
 * @return {number}
 */
var numberOfWeeks = function(milestones) {
    let max = 0, total = 0;
    for (const m of milestones) {
        if (m > max) max = m;
        total += m;
    }
    const rest = total - max;
    // Can finish all iff max project can be separated by others: max <= rest + 1
    if (max <= rest + 1) return total;
    return 2 * rest + 1;
};
// @lc code=end

// TEST:
console.log(numberOfWeeks([1,2,3]));      // 6
console.log(numberOfWeeks([5,2,1]));       // 7
console.log(numberOfWeeks([1]));            // 1
console.log(numberOfWeeks([1,1]));         // 2
console.log(numberOfWeeks([1000000000]));  // 1
