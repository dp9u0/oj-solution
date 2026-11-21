/*
 * @lc app=leetcode.cn id=2323 lang=javascript
 *
 * [2323] 完成所有工作的最短时间 II
 */

// @lc code=start
/**
 * @param {number[]} jobs
 * @param {number[]} workers
 * @return {number}
 */
var minimumTime = function(jobs, workers) {
    const js = jobs.slice().sort((a, b) => b - a);
    const ws = workers.slice().sort((a, b) => b - a);
    let days = 0;
    for (let i = 0; i < js.length; i++) {
        const d = Math.ceil(js[i] / ws[i]);
        if (d > days) days = d;
    }
    return days;
};
// @lc code=end

// TEST:
console.log(minimumTime([5,2,4], [1,7,5])); // 2
console.log(minimumTime([3,18,15,9], [6,5,1,3])); // 3
console.log(minimumTime([5,5,4], [5,5,4])); // 1
console.log(minimumTime([1], [1])); // 1
console.log(minimumTime([7], [2])); // 4 (ceil(7/2))
