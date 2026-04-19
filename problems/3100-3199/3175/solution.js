/*
 * @lc app=leetcode id=3175 lang=javascript
 *
 * [3175] Find The First Player to win K Games in a Row
 */

// @lc code=start
/**
 * @param {number[]} skills
 * @param {number} k
 * @return {number}
 */
var findWinningPlayer = function(skills, k) {
    let champion = 0;
    let wins = 0;
    for (let i = 1; i < skills.length; i++) {
        if (skills[i] > skills[champion]) {
            champion = i;
            wins = 1;
        } else {
            wins++;
        }
        if (wins === k) return champion;
    }
    return champion;
};
// @lc code=end

// TEST:
console.log(findWinningPlayer([4,2,6,3,9], 2)); // 2
console.log(findWinningPlayer([2,5,4], 3)); // 1
