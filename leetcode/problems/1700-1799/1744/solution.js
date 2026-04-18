/*
 * @lc app=leetcode id=1744 lang=javascript
 *
 * [1744] Can You Eat Your Favorite Candy on Your Favorite Day?
 */

// @lc code=start
/**
 * @param {number[]} candiesCount
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canEat = function(candiesCount, queries) {
  const n = candiesCount.length;
  const prefix = new Array(n + 1).fill(0n);
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + BigInt(candiesCount[i]);
  }
  return queries.map(([t, d, cap]) => {
    const before = prefix[t];
    const after = prefix[t + 1];
    return BigInt(d + 1) * BigInt(cap) > before && BigInt(d) < after;
  });
};
// @lc code=end

// TEST:
console.log(JSON.stringify(canEat([7, 4, 5, 3, 8], [[0, 2, 2], [4, 2, 4], [2, 13, 1000000000]]))); // [true,false,true]
console.log(JSON.stringify(canEat([5, 2, 6, 4, 1], [[3, 1, 2], [4, 10, 3], [3, 10, 100], [4, 100, 30], [1, 3, 1]]))); // [false,true,true,false,false]
console.log(JSON.stringify(canEat([1], [[0, 0, 1]]))); // [true]
console.log(JSON.stringify(canEat([10], [[0, 0, 1], [0, 9, 1], [0, 10, 1]]))); // [true,true,false]
console.log(JSON.stringify(canEat([3, 1], [[1, 0, 2]]))); // [false]
