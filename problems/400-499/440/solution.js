/*
 * @lc app=leetcode id=440 lang=javascript
 *
 * [440] K-th Smallest in Lexicographical Order
 */

// @lc code=start
/**
 * Count how many numbers in [1, n] fall inside the subtree of `prefix`,
 * i.e. the count of numbers in the lexicographic range [prefix, prefix + 1).
 * @param {number} n
 * @param {number} prefix
 * @return {number}
 */
const countSteps = (n, prefix) => {
  let steps = 0;
  let cur = prefix;
  let next = prefix + 1;
  while (cur <= n) {
    steps += Math.min(n + 1, next) - cur;
    cur *= 10;
    next *= 10;
  }
  return steps;
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function findKthNumber(n, k) {
  let curr = 1;
  k--; // curr itself is the 1st smallest
  while (k > 0) {
    const steps = countSteps(n, curr);
    if (steps <= k) {
      // answer is beyond this subtree: skip it and move to the next sibling
      k -= steps;
      curr++;
    } else {
      // answer is inside this subtree: go deeper to the first child
      curr *= 10;
      k--;
    }
  }
  return curr;
}
// @lc code=end

// TEST:
console.log(findKthNumber(13, 2) === 10); // lex order: 1,10,11,12,13,2,...
console.log(findKthNumber(1, 1) === 1);
console.log(findKthNumber(100, 10) === 17); // 1,10,100,11,12,13,14,15,16,17
console.log(findKthNumber(13, 6) === 2); // 1,10,11,12,13,2
console.log(findKthNumber(1000000000, 1000000000) === 999999999); // last in lex order
console.log(findKthNumber(25, 13) === 20); // 1,10..19,2,20 -> 13th is 20
