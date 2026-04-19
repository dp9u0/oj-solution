/*
 * @lc app=leetcode id=2225 lang=javascript
 *
 * [2225] Find Players With Zero or One Losses
 */

// @lc code=start
/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
  const losses = new Map();
  for (const [winner, loser] of matches) {
    if (!losses.has(winner)) losses.set(winner, 0);
    losses.set(loser, (losses.get(loser) || 0) + 1);
  }
  const zero = [], one = [];
  for (const [player, count] of losses) {
    if (count === 0) zero.push(player);
    else if (count === 1) one.push(player);
  }
  return [zero.sort((a, b) => a - b), one.sort((a, b) => a - b)];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]))); // [[1,2,10],[4,5,7,8]]
console.log(JSON.stringify(findWinners([[2,3],[1,3],[5,4],[6,4]]))); // [[1,2,5,6],[]]
