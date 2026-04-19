/*
 * @lc app=leetcode id=1665 lang=javascript
 *
 * [1665] Minimum Initial Energy to Finish Tasks
 */

// @lc code=start
/**
 * @param {number[][]} tasks
 * @return {number}
 */
var minimumEffort = function(tasks) {
    // Sort by (minimum - actual) descending
    tasks.sort((a, b) => (b[1] - b[0]) - (a[1] - a[0]));

    let prefixSum = 0;
    let result = 0;
    for (const [actual, minimum] of tasks) {
        result = Math.max(result, prefixSum + minimum);
        prefixSum += actual;
    }

    return result;
};
// @lc code=end

// TEST:
console.log(minimumEffort([[1,2],[2,4],[4,8]])); // 8
console.log(minimumEffort([[1,3],[2,4],[10,11],[10,12],[8,9]])); // 32
console.log(minimumEffort([[1,7],[2,8],[3,9],[4,10],[5,11],[6,12]])); // 27
console.log(minimumEffort([[1,1]])); // 1
console.log(minimumEffort([[3,5],[4,8],[2,6]])); // 11
