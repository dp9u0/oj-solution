/*
 * @lc app=leetcode.cn id=544 lang=javascript
 *
 * [544] 输出比赛匹配对
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var findContestMatch = function(n) {
    let teams = Array.from({ length: n }, (_, i) => String(i + 1));
    while (teams.length > 1) {
        const next = [];
        for (let i = 0; i < teams.length / 2; i++) {
            next.push('(' + teams[i] + ',' + teams[teams.length - 1 - i] + ')');
        }
        teams = next;
    }
    return teams[0];
};
// @lc code=end

// TEST:
console.log(findContestMatch(1)); // "1"
console.log(findContestMatch(2)); // "(1,2)"
console.log(findContestMatch(4)); // "((1,4),(2,3))"
console.log(findContestMatch(8)); // "((((1,8),(4,5)),((2,7),(3,6))))"
console.log(findContestMatch(16)); // "((((1,16),(8,9)),((4,13),(5,12))),(((2,15),(7,10)),((3,14),(6,11))))"
