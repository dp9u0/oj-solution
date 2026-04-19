/*
 * @lc app=leetcode id=2517 lang=javascript
 *
 * [2517] Maximum Tastiness of Candy Basket
 */

// @lc code=start
/**
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
var maximumTastiness = function(price, k) {
  price.sort((a, b) => a - b);
  const canPick = (gap) => {
    let count = 1, prev = price[0];
    for (let i = 1; i < price.length; i++) {
      if (price[i] - prev >= gap) {
        count++;
        prev = price[i];
        if (count >= k) return true;
      }
    }
    return false;
  };
  let lo = 0, hi = price[price.length - 1] - price[0];
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    if (canPick(mid)) lo = mid;
    else hi = mid - 1;
  }
  return lo;
};
// @lc code=end

// TEST:
console.log(maximumTastiness([13, 5, 1, 8, 21, 2], 3)); // 8
console.log(maximumTastiness([1, 3, 1], 2)); // 2
console.log(maximumTastiness([7, 7, 7, 7], 2)); // 0
console.log(maximumTastiness([1, 2, 3, 4, 5], 3)); // 2
console.log(maximumTastiness([1, 100], 2)); // 99
console.log(maximumTastiness([1, 2, 5, 8, 13, 21], 4)); // 5
