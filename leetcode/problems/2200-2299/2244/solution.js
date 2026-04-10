/*
 * @lc app=leetcode id=2244 lang=javascript
 *
 * [2244] Minimum Rounds to Complete All Tasks
 */

// @lc code=start
/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    const freq = new Map();
    for (const t of tasks) {
        freq.set(t, (freq.get(t) || 0) + 1);
    }

    let rounds = 0;
    for (const count of freq.values()) {
        if (count === 1) return -1;
        rounds += Math.ceil(count / 3);
    }

    return rounds;
};
// @lc code=end

// TEST:
console.log(minimumRounds([2,2,3,3,2,4,4,4,4,4]));
console.log(minimumRounds([2,3,3]));
console.log(minimumRounds([5,5,5,5]));
