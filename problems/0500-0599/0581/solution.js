/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  var max = -Infinity,
    min = Infinity,
    start = 0,
    end = 0;
  nums.forEach(function (value, index) {
    max = Math.max(value, max);
    if (value < max) {
      min = Math.min(min, value);
      end = index;
    }
  });
  if (end === 0) {
    return end;
  }
  for (var i = 0; i < nums.length; i++) {
    if (min < nums[i]) {
      start = i;
      break;
    }
  }
  return end - start + 1;
};