/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let results = [];
  backtrace(nums, nums.length, results);
  return results;
};

function backtrace(nums, target, results, result = []) {
  if (target === 0) {
    results.push([...result]);
    return;
  }
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (element !== null) {
      result.push(element);
      nums[index] = null;
      backtrace(nums, target - 1, results, result);
      nums[index] = element;
      result.pop()
    }
  }
}

console.log(permute([1, 2, 3]))

console.log(permute([0, 1, 2, 3]))