/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  let result = nums.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
  return /^0+$/.test(result) ? '0' : result;
};


// TEST:
console.log(largestNumber([10, 2]))
console.log(largestNumber([3, 30, 34, 5, 9]))
console.log(largestNumber([0, 0, 0, 0, 0]))