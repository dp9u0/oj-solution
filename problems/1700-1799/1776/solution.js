/*
 * @lc app=leetcode id=1776 lang=javascript
 *
 * [1776] Car Fleet II
 */

// @lc code=start
/**
 * @param {number[][]} cars
 * @return {number[]}
 */
var getCollisionTimes = function(cars) {
    let n = cars.length;
    let ans = new Array(n).fill(-1);
    let stack = [];
    for (let i = n - 1; i >= 0; i--) {
      let [pi, si] = cars[i];
      while (stack.length > 0) {
        let j = stack[stack.length - 1];
        let [pj, sj] = cars[j];
        if (si <= sj) {
          stack.pop();
          continue;
        }
        let t = (pj - pi) / (si - sj);
        if (ans[j] !== -1 && t > ans[j]) {
          stack.pop();
          continue;
        }
        ans[i] = t;
        break;
      }
      stack.push(i);
    }
    return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(getCollisionTimes([[1,2],[2,1],[4,3],[7,2]])));
console.log(JSON.stringify(getCollisionTimes([[3,4],[5,4],[6,3],[9,1]])));
