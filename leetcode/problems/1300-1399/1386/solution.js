/*
 * @lc app=leetcode id=1386 lang=javascript
 *
 * [1386] Cinema Seat Allocation
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
  const rowMap = {};
  for (const [row, seat] of reservedSeats) {
    if (!rowMap[row]) rowMap[row] = 0;
    rowMap[row] |= (1 << seat);
  }

  const LEFT = (1<<2)|(1<<3)|(1<<4)|(1<<5);   // seats 2-5
  const MID = (1<<4)|(1<<5)|(1<<6)|(1<<7);     // seats 4-7
  const RIGHT = (1<<6)|(1<<7)|(1<<8)|(1<<9);   // seats 6-9

  let ans = (n - Object.keys(rowMap).length) * 2;

  for (const mask of Object.values(rowMap)) {
    let canLeft = (mask & LEFT) === 0;
    let canRight = (mask & RIGHT) === 0;
    if (canLeft && canRight) {
      ans += 2;
    } else if (canLeft || canRight || (mask & MID) === 0) {
      ans += 1;
    }
  }

  return ans;
};
// @lc code=end

// TEST:
console.log(maxNumberOfFamilies(3, [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]])); // 4
console.log(maxNumberOfFamilies(2, [[2,1],[1,8],[2,6]])); // 2
console.log(maxNumberOfFamilies(4, [[4,3],[1,4],[4,6],[1,7]])); // 4
