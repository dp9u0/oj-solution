/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let map = {},
    dump = 0,
    sumError = 0,
    sum = 0;
  nums.forEach((num, index) => {
    if (map[num]) {
      dump = num;
    }
    map[num] = true;
    sumError += num;
    sum += (index + 1);
  });
  return [dump, sum + dump - sumError];
};