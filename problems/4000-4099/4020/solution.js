/*
 * @lc app=leetcode id=4020 lang=javascript
 *
 * [4020] Total Time to Serve All Requests
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} requests
 * @return {number}
 */
var elevatorRequests = function(n, requests) {
  let cur = 0;
  let total = 0;
  for (const f of requests) {
    total += Math.abs(f - cur);
    cur = f;
  }
  return total;
};
// @lc code=end

// TEST:
console.log(elevatorRequests(5, [2, 1, 4, 3]) === 7);
console.log(elevatorRequests(3, [2, 0, 0]) === 4);
console.log(elevatorRequests(1, [0, 0, 0]) === 0);
console.log(elevatorRequests(100, [99, 0, 99]) === 297);
console.log(elevatorRequests(2, [1]) === 1);
