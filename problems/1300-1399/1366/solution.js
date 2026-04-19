/*
 * @lc app=leetcode id=1366 lang=javascript
 *
 * [1366] Rank Teams by Votes
 */

// @lc code=start
/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function(votes) {
    if (votes.length === 0) return '';
    const teams = votes[0].length;
    const count = {};
    for (const c of votes[0]) {
        count[c] = new Array(teams).fill(0);
    }
    for (const vote of votes) {
        for (let i = 0; i < teams; i++) {
            count[vote[i]][i]++;
        }
    }
    const sorted = votes[0].split('').sort((a, b) => {
        for (let i = 0; i < teams; i++) {
            if (count[a][i] !== count[b][i]) return count[b][i] - count[a][i];
        }
        return a.charCodeAt(0) - b.charCodeAt(0);
    });
    return sorted.join('');
};
// @lc code=end

// TEST:
console.log(rankTeams(["ABC","ACB","ABC","ACB","ACB"])); // "ACB"
console.log(rankTeams(["WXYZ","XYZW"])); // "XWYZ"
console.log(rankTeams(["ZMNAGUEDSJYLBOPHRQICWFXTVK"])); // "ZMNAGUEDSJYLBOPHRQICWFXTVK"
