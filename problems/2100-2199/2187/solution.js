/*
 * @lc app=leetcode id=2187 lang=javascript
 *
 * [2187] Minimum Time to Complete Trips
 */

// @lc code=start
/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
  const minTime = Math.min(...time);
  let left = 1;
  let right = minTime * totalTrips;

  const canComplete = (t) => {
    let trips = 0;
    for (const bus of time) {
      trips += Math.floor(t / bus);
      if (trips >= totalTrips) return true;
    }
    return false;
  };

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (canComplete(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};
// @lc code=end

// TEST:
console.log(minimumTime([1,2,3], 5)); // 3
console.log(minimumTime([2], 1)); // 2
console.log(minimumTime([10000000], 10000000)); // 100000000000000
