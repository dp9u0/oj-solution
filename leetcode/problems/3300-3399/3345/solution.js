/*
 * @lc app=leetcode id=3345 lang=javascript
 *
 * [3345] Smallest Divisible Digit Product I
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
  const digitProduct = (x) => {
    let p = 1;
    while (x > 0) {
      p *= x % 10;
      x = Math.floor(x / 10);
    }
    return p;
  };
  for (let i = n; ; i++) {
    if (digitProduct(i) % t === 0) return i;
  }
};
// @lc code=end

// TEST:
console.log(smallestNumber(10, 2)); // 10
console.log(smallestNumber(15, 3)); // 16
console.log(smallestNumber(1, 1)); // 1
console.log(smallestNumber(9, 5)); // 10
console.log(smallestNumber(100, 7)); // 100
