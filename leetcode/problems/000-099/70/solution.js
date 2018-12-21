/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let cache = {};
  cache[1] = 1;
  cache[2] = 2;
  return climbStairsRecursion(n, cache);
};

var climbStairsRecursion = function (n, cache) {
  if (cache[n]) {
    return cache[n];
  }
  cache[n - 1] = climbStairsRecursion(n - 1, cache);
  cache[n - 2] = climbStairsRecursion(n - 2, cache);
  return cache[n - 1] + cache[n - 2];
};