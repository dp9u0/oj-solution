/*
 * @lc app=leetcode id=1700 lang=javascript
 *
 * [1700] Number of Students Unable to Eat Lunch
 */

// @lc code=start
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
  const count = [0, 0];
  for (const s of students) count[s]++;
  for (const s of sandwiches) {
    if (count[s] === 0) break;
    count[s]--;
  }
  return count[0] + count[1];
};
// @lc code=end

// TEST:
console.log(countStudents([1,1,0,0], [0,1,0,1]));           // 0
console.log(countStudents([1,1,1,0,0,1], [1,0,0,0,1,1]));  // 3
