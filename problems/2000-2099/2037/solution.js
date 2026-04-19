/*
 * @lc app=leetcode id=2037 lang=javascript
 *
 * [2037] Minimum Number of Moves to Seat Everyone
 */

// @lc code=start
/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  let moves = 0;
  for (let i = 0; i < seats.length; i++) {
    moves += Math.abs(seats[i] - students[i]);
  }
  return moves;
};
// @lc code=end

// TEST:
console.log(minMovesToSeat([3, 1, 5], [2, 7, 4])); // 4
console.log(minMovesToSeat([4, 1, 5, 9], [1, 3, 2, 6])); // 7
console.log(minMovesToSeat([2, 2, 6, 6], [1, 3, 2, 6])); // 4
