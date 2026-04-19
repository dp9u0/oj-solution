/*
 * @lc app=leetcode id=2895 lang=javascript
 *
 * [2895] Minimum Processing Time
 */

// @lc code=start
/**
 * @param {number[]} processorTime
 * @param {number[]} tasks
 * @return {number}
 */
var minProcessingTime = function(processorTime, tasks) {
    processorTime.sort((a, b) => a - b);
    tasks.sort((a, b) => b - a);

    let result = 0;
    for (let i = 0; i < processorTime.length; i++) {
        // This processor gets tasks[4*i] to tasks[4*i+3]
        // The max completion time for this processor
        result = Math.max(result, processorTime[i] + tasks[4 * i]);
    }

    return result;
};
// @lc code=end

// TEST:
console.log(minProcessingTime([8,10], [2,2,3,1,8,7,4,5]));          // 16
console.log(minProcessingTime([10,20], [2,3,1,2,5,8,4,3]));         // 23
