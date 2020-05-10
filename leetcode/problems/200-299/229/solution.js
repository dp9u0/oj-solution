/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const map = {};
  const length = nums.length
  for (let i = 0; i < length; i++) {
    const num = nums[i];
    map[num] = (map[num] || 0) + 1;
  };
  const result = [];
  const lengthD3 = length / 3
  for (let key in map) {
    if (map[key] > lengthD3) {
      result.push(key);
    }
  };
  return result;
};


// TEST:
console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2]))
console.log(majorityElement([1, 2]))
console.log(majorityElement([1, 2, 3]))