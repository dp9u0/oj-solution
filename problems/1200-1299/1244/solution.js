/*
 * @lc app=leetcode.cn id=1244 lang=javascript
 *
 * [1244] 力扣排行榜
 */

// @lc code=start

var Leaderboard = function() {
    this.scores = new Map(); // playerId -> total score
};

/**
 * @param {number} playerId
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
    this.scores.set(playerId, (this.scores.get(playerId) || 0) + score);
};

/**
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
    const vals = [...this.scores.values()].sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < K; i++) sum += vals[i];
    return sum;
};

/**
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
    this.scores.delete(playerId);
};

/**
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */
// @lc code=end

// TEST:
const lb = new Leaderboard();
lb.addScore(1, 73);
lb.addScore(2, 56);
lb.addScore(3, 39);
lb.addScore(4, 51);
lb.addScore(5, 4);
console.log(lb.top(1)); // 73
lb.reset(1);
lb.reset(2);
lb.addScore(2, 51);
console.log(lb.top(3)); // 141 (51+51+39)
console.log(lb.top(2)); // 102
