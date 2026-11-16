/*
 * @lc app=leetcode.cn id=3450 lang=javascript
 *
 * [3450] 一张长椅上的最多学生
 */

// @lc code=start
/**
 * @param {number[][]} students
 * @return {number}
 */
var maxStudentsOnBench = function(students) {
    const benches = new Map();
    for (const [sid, bid] of students) {
        if (!benches.has(bid)) benches.set(bid, new Set());
        benches.get(bid).add(sid);
    }
    let best = 0;
    for (const set of benches.values()) best = Math.max(best, set.size);
    return best;
};
// @lc code=end

// TEST:
console.log(maxStudentsOnBench([[1, 2], [2, 2], [3, 3], [1, 3], [2, 3]])); // 3
console.log(maxStudentsOnBench([[1, 1], [2, 1], [3, 1], [4, 2], [5, 2]])); // 3
console.log(maxStudentsOnBench([[1, 1], [1, 1]])); // 1 (duplicate on same bench counts once)
console.log(maxStudentsOnBench([])); // 0
console.log(maxStudentsOnBench([[1, 1], [1, 2], [1, 3]])); // 1 (same student on 3 benches)
console.log(maxStudentsOnBench([[5, 3], [5, 3], [6, 3], [7, 4]])); // 2
