/*
 * @lc app=leetcode id=4038 lang=javascript
 *
 * [4038] Count Integers Appearing in a Single Block
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function countSpecialIntegers(nums) {
  const first = new Map();
  const last = new Map();
  const count = new Map();

  nums.forEach((x, i) => {
    if (!first.has(x)) first.set(x, i);
    last.set(x, i);
    count.set(x, (count.get(x) || 0) + 1);
  });

  let res = 0;
  count.forEach((c, x) => {
    if (last.get(x) - first.get(x) + 1 === c) res++;
  });
  return res;
}
// @lc code=end

// TEST:
console.log(countSpecialIntegers([1, 2, 2, 1]) === 1);
console.log(countSpecialIntegers([3, 3, 1, 2, 2, 1]) === 2);
console.log(countSpecialIntegers([1]) === 1);
console.log(countSpecialIntegers([1, 2, 3, 4, 5]) === 5);
console.log(countSpecialIntegers([1, 1, 1]) === 1);
console.log(countSpecialIntegers([1, 2, 1, 2]) === 0);
console.log(countSpecialIntegers([5, 1, 5, 5, 1, 1]) === 0);
