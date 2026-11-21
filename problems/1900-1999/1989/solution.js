/*
 * @lc app=leetcode.cn id=1989 lang=javascript
 *
 * [1989] 捉迷藏中可捕获的最大人数
 */

// @lc code=start
/**
 * @param {number[]} team
 * @param {number} dist
 * @return {number}
 */
var catchMaximumAmountofPeople = function(team, dist) {
    const n = team.length;
    let i = 0, j = 0, count = 0;
    while (i < n && j < n) {
        if (team[i] === 0) { i++; continue; }
        if (team[j] === 1) { j++; continue; }
        if (j >= i - dist && j <= i + dist) {
            count++;
            i++;
            j++;
        } else if (j < i - dist) {
            j++;
        } else {
            i++;
        }
    }
    return count;
};
// @lc code=end

// TEST:
console.log(catchMaximumAmountofPeople([0,1,0,1,0], 3)); // 2
console.log(catchMaximumAmountofPeople([1], 1)); // 0
console.log(catchMaximumAmountofPeople([0], 1)); // 0
console.log(catchMaximumAmountofPeople([0,1,1,0], 1)); // 2
console.log(catchMaximumAmountofPeople([1,1,0,0], 1)); // 1
