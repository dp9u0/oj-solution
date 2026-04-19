/*
 * @lc app=leetcode id=3679 lang=javascript
 *
 * [3679]  Minimum Discards to Balance Inventory
 */

// @lc code=start
/**
 * @param {number[]} arrivals
 * @param {number} w
 * @param {number} m
 * @return {number}
 */
var minArrivalsToDiscard = function(arrivals, w, m) {
  const map = new Map();
  let discards = 0;

  for (let i = 0; i < arrivals.length; i++) {
    const type = arrivals[i];
    if (!map.has(type)) map.set(type, []);
    const dq = map.get(type);

    while (dq.length > 0 && dq[0] < i - w + 1) dq.shift();

    if (dq.length < m) {
      dq.push(i);
    } else {
      discards++;
    }
  }

  return discards;
};
// @lc code=end

// TEST:
console.log(minArrivalsToDiscard([1, 2, 1, 3, 1], 4, 2)); // 0
console.log(minArrivalsToDiscard([1, 2, 3, 3, 3, 4], 3, 2)); // 1
console.log(minArrivalsToDiscard([1, 1, 1], 3, 1)); // 2
console.log(minArrivalsToDiscard([1, 2, 3], 3, 1)); // 0
console.log(minArrivalsToDiscard([5, 5, 5, 5], 2, 1)); // 2
