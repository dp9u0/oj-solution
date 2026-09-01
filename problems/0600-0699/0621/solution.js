/*
 * @lc app=leetcode id=621 lang=javascript
 *
 * [621] Task Scheduler
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const freq = new Array(26).fill(0);
    for (const task of tasks) {
        freq[task.charCodeAt(0) - 65]++;
    }

    let maxFreq = 0;
    let maxCount = 0;
    for (const count of freq) {
        if (count > maxFreq) {
            maxFreq = count;
            maxCount = 1;
        } else if (count === maxFreq) {
            maxCount++;
        }
    }

    return Math.max(tasks.length, (maxFreq - 1) * (n + 1) + maxCount);
};
// @lc code=end

// TEST:
console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2)); // 8
console.log(leastInterval(['A', 'C', 'A', 'B', 'D', 'B'], 1)); // 6
console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 3)); // 10
console.log(leastInterval(['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], 2)); // 16
console.log(leastInterval(['A'], 0)); // 1
console.log(leastInterval(['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D'], 0)); // 8
console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B', 'C'], 2)); // 8