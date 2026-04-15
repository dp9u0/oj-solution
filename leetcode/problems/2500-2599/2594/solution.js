/*
 * @lc app=leetcode id=2594 lang=javascript
 *
 * [2594] Minimum Time to Repair Cars
 */

// @lc code=start
/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function(ranks, cars) {
  // Group by rank (ranks[i] <= 100) for O(100) per check instead of O(n)
  const freq = new Array(101).fill(0);
  let minRank = 100;
  for (const r of ranks) {
    freq[r]++;
    if (r < minRank) minRank = r;
  }

  const canRepair = (time) => {
    let total = 0;
    for (let r = 1; r <= 100; r++) {
      if (!freq[r]) continue;
      total += freq[r] * Math.floor(Math.sqrt(time / r));
      if (total >= cars) return true;
    }
    return false;
  };

  let lo = 1, hi = minRank * cars * cars;
  while (lo < hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (canRepair(mid)) hi = mid;
    else lo = mid + 1;
  }
  return lo;
};
// @lc code=end

// TEST:
console.log(repairCars([4,2,3,1], 10)); // 16
console.log(repairCars([5,1,8], 6)); // 16
console.log(repairCars([1], 1)); // 1
