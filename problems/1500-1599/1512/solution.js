/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const map = {};
  let result = 0;
  nums.forEach(num => {
    let v = map[num] || 0;
    result += v;
    map[num] = v + 1
  });
  return result;
};


// TEST:
let nums, result;
nums = [1, 2, 3, 1, 1, 3]
result = numIdenticalPairs(nums)
console.log(result)

nums = [1, 1, 1, 1]
result = numIdenticalPairs(nums)
console.log(result)