/*
 * @lc app=leetcode id=2105 lang=javascript
 *
 * [2105] Watering Plants II
 */

// @lc code=start
/**
 * @param {number[]} plants
 * @param {number} capacityA
 * @param {number} capacityB
 * @return {number}
 */
var minimumRefill = function(plants, capacityA, capacityB) {
  const n = plants.length;
  let a = capacityA, b = capacityB, refill = 0;
  let l = 0, r = n - 1;

  while (l < r) {
    if (a < plants[l]) { a = capacityA; refill++; }
    a -= plants[l++];
    if (b < plants[r]) { b = capacityB; refill++; }
    b -= plants[r--];
  }

  if (l === r) {
    if (a >= b) {
      if (a < plants[l]) refill++;
    } else {
      if (b < plants[l]) refill++;
    }
  }

  return refill;
};
// @lc code=end

// TEST:
console.log(minimumRefill([2,2,3,3], 5, 5)); // 1
console.log(minimumRefill([2,2,3,3], 3, 4)); // 2
console.log(minimumRefill([5], 10, 8)); // 0
console.log(minimumRefill([1,2,3,4,5], 6, 6)); // ?
console.log(minimumRefill([2,2,2,2], 3, 3)); // 2
