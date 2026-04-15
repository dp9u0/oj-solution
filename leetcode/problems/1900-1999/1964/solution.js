/*
 * @lc app=leetcode id=1964 lang=javascript
 *
 * [1964] Find the Longest Valid Obstacle Course at Each Position
 */

// @lc code=start
/**
 * @param {number[]} obstacles
 * @return {number[]}
 */
var longestObstacleCourseAtEachPosition = function(obstacles) {
  const n = obstacles.length;
  const ans = new Array(n);
  const tails = [];

  for (let i = 0; i < n; i++) {
    const x = obstacles[i];
    // bisect_right: find first index where tails[idx] > x
    let lo = 0, hi = tails.length;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (tails[mid] <= x) lo = mid + 1;
      else hi = mid;
    }
    ans[i] = lo + 1;
    if (lo === tails.length) tails.push(x);
    else tails[lo] = x;
  }

  return ans;
};
// @lc code=end

// TEST:
console.log(JSON.stringify(longestObstacleCourseAtEachPosition([1,2,3,2]))); // [1,2,3,3]
console.log(JSON.stringify(longestObstacleCourseAtEachPosition([2,2,1]))); // [1,2,1]
console.log(JSON.stringify(longestObstacleCourseAtEachPosition([3,1,5,6,4,2]))); // [1,1,2,3,2,2]
