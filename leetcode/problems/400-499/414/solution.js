/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let max1 = null;
  let max2 = null;
  let max3 = null;
  for (let n of nums) {
    if (n === max1 || n === max2 || n === max3) continue;
    if (max1 === null || n > max1) {
      max3 = max2;
      max2 = max1;
      max1 = n;
    } else if (max2 === null || n > max2) {
      max3 = max2;
      max2 = n;
    } else if (max3 === null || n > max3) {
      max3 = n;
    }
  }
  return max3 === null ? max1 : max3;
};