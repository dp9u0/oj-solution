/*
 * @lc app=leetcode.cn id=4045 lang=javascript
 *
 * [4045] 统计机器人组数
 */

// @lc code=start
/**
 * @param {number[]} position
 * @param {number[]} speed
 * @param {number} distance
 * @return {number}
 */
var countGroups = function(position, speed, distance) {
    const n = position.length;
    // Step 1: t=0 merges — each block represented by its rightmost robot's speed
    const vs = [];
    for (let i = 0; i < n; i++) {
        if (i > 0 && position[i] - position[i - 1] <= distance) {
            vs[vs.length - 1] = speed[i];
        } else {
            vs.push(speed[i]);
        }
    }
    // Step 2: scan right to left; v* = speed of nearest surviving group on the right
    let count = 0, vstar = Infinity;
    for (let i = vs.length - 1; i >= 0; i--) {
        if (vs[i] > vstar) continue; // eventually catches up and merges rightward
        count++;
        vstar = vs[i];
    }
    return count;
};
// @lc code=end

// TEST:
console.log(countGroups([1, 5, 6, 20], [4, 3, 2, 3], 1) === 2);
console.log(countGroups([1, 5, 9], [3, 2, 2], 2) === 2);
console.log(countGroups([9], [8], 5) === 1);
console.log(countGroups([1, 2, 3], [1, 1, 1], 1) === 1);        // all merge at t=0
console.log(countGroups([1, 10, 20], [1, 1, 1], 1) === 3);      // equal speeds never meet
console.log(countGroups([1, 10, 20], [5, 1, 2], 1) === 2);      // fastest catches middle, not the rightmost
console.log(countGroups([1, 100], [2, 1], 1) === 1);            // faster left catches eventually
