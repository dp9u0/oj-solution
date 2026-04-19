/*
 * @lc app=leetcode id=2410 lang=javascript
 *
 * [2410] Maximum Matching of Players With Trainers
 */

// @lc code=start
/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
    players.sort((a, b) => a - b);
    trainers.sort((a, b) => a - b);
    let i = 0, j = 0, res = 0;
    while (i < players.length && j < trainers.length) {
        if (players[i] <= trainers[j]) {
            res++;
            i++;
            j++;
        } else {
            j++;
        }
    }
    return res;
};
// @lc code=end

// TEST:
console.log(matchPlayersAndTrainers([4,7,9], [8,2,5,8])); // 2
console.log(matchPlayersAndTrainers([1,1,1], [10])); // 1
console.log(matchPlayersAndTrainers([1,2,3], [1,2,3])); // 3
