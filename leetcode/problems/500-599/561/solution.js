/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  let sum = 0;
  nums.sort((a, b) => {
    return a - b;
  });
  nums.forEach((value, index) => {
    if (index % 2 === 0) {
      sum += value;
    }
  });
  return sum;
};