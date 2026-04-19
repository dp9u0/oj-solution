/*
 * @lc app=leetcode id=1073 lang=javascript
 *
 * [1073] Adding Two Negabinary Numbers
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var addNegabinary = function(arr1, arr2) {
  const result = [];
  let i = arr1.length - 1, j = arr2.length - 1, carry = 0;
  while (i >= 0 || j >= 0 || carry !== 0) {
    const a = i >= 0 ? arr1[i--] : 0;
    const b = j >= 0 ? arr2[j--] : 0;
    let sum = a + b + carry;
    if (sum >= 2) {
      result.push(sum - 2);
      carry = -1;
    } else if (sum < 0) {
      result.push(sum + 2);
      carry = 1;
    } else {
      result.push(sum);
      carry = 0;
    }
  }
  while (result.length > 1 && result[result.length - 1] === 0) result.pop();
  return result.reverse();
};
// @lc code=end

// TEST:
console.log(JSON.stringify(addNegabinary([1, 1, 1, 1, 1], [1, 0, 1]))); // [1,0,0,0,0]
console.log(JSON.stringify(addNegabinary([0], [0]))); // [0]
console.log(JSON.stringify(addNegabinary([0], [1]))); // [1]
console.log(JSON.stringify(addNegabinary([1], [1]))); // [1,1,0] (1+1=2=(-2)^2+(-2)^1=4-2=2)
console.log(JSON.stringify(addNegabinary([1, 0, 1], [1, 0, 1]))); // [1,1,1,1,0]
