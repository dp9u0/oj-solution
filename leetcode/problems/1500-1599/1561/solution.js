/*
 * @lc app=leetcode id=1561 lang=javascript
 *
 * [1561] Maximum Number of Coins You Can Get
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
  piles.sort((a, b) => a - b);
  const n = piles.length / 3;
  let coins = 0;
  for (let i = 0; i < n; i++) {
    coins += piles[piles.length - 2 - 2 * i];
  }
  return coins;
};
// @lc code=end

// TEST:
console.log(maxCoins([2, 4, 1, 2, 7, 8])); // 9
console.log(maxCoins([2, 4, 5])); // 4
console.log(maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4])); // 18
