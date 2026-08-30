/*
 * @lc app=leetcode id=3921 lang=javascript
 *
 * [3921] Score Validator
 */

// @lc code=start
/**
 * @param {string[]} events
 * @return {number[]}
 */
var scoreValidator = function(events) {
  let score = 0;
  let counter = 0;
  for (const e of events) {
    if (e === 'W') {
      counter++;
      if (counter === 10) break;
    } else if (e === 'WD' || e === 'NB') {
      score++;
    } else {
      score += Number(e);
    }
  }
  return [score, counter];
};
// @lc code=end

// TEST:
console.log(JSON.stringify(scoreValidator(['1', '4', 'W', '6', 'WD'])), JSON.stringify([12, 1]));
console.log(JSON.stringify(scoreValidator(['WD', 'NB', '0', '4', '4'])), JSON.stringify([10, 0]));
console.log(JSON.stringify(scoreValidator(['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'])), JSON.stringify([0, 10]));
console.log(JSON.stringify(scoreValidator(['2', '3', '6', '0'])), JSON.stringify([11, 0]));
console.log(JSON.stringify(scoreValidator(['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', '6', 'W', '1'])), JSON.stringify([6, 10]));
console.log(JSON.stringify(scoreValidator(['NB'])), JSON.stringify([1, 0]));
