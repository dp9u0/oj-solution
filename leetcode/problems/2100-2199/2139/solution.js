/*
 * @lc app=leetcode id=2139 lang=javascript
 *
 * [2139] Minimum Moves to Reach Target Score
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
var minMoves = function(target, maxDoubles) {
    let moves = 0;
    let t = target;
    while (t > 1 && maxDoubles > 0) {
        if (t % 2 === 0) {
            t /= 2;
            maxDoubles--;
        } else {
            t--;
        }
        moves++;
    }
    return moves + (t - 1);
};
// @lc code=end

// TEST:
console.log(minMoves(5, 0));   // 4
console.log(minMoves(19, 2));  // 7
console.log(minMoves(10, 4));  // 4
