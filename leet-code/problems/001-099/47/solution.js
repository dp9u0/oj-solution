/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort();
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
    if (element !== null && (index === 0 || element !== nums[index - 1])) {
      result.push(element);
      nums[index] = null;
      backtrace(nums, target - 1, results, result);
      nums[index] = element;
      result.pop()
    }
  }
}

console.log(permuteUnique([1, 2, 3]))
console.log(permuteUnique([1, 1, 2, 3]))
console.log(permuteUnique([0, 1, 2, 3]))
console.log(permuteUnique([3, 0, 3, 3]))