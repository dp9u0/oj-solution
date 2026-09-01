/*
 * @lc app=leetcode id=898 lang=javascript
 *
 * [898] Bitwise ORs of Subarrays
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function(arr) {
  const all = new Set();
  let cur = new Set();

  for (const num of arr) {
    const next = new Set([num]);
    for (const val of cur) {
      next.add(val | num);
    }
    cur = next;
    for (const val of cur) {
      all.add(val);
    }
  }

  return all.size;
};
// @lc code=end

// TEST:
console.log(subarrayBitwiseORs([0])); // 1
console.log(subarrayBitwiseORs([1,1,2])); // 3
console.log(subarrayBitwiseORs([1,2,4])); // 6
