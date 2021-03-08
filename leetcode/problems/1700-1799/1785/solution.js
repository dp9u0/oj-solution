/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function (nums, limit, goal) {
  let summary = nums.reduce((p, c) => p + c, 0);
  let need = Math.abs(goal - summary);
  return Math.ceil(need / limit);
};

// TEST:
let nums = [1, -1, 1], limit = 3, goal = -4
let results = minElements(nums, limit, goal);
console.log(results);

nums = [1, -10, 9, 1], limit = 100, goal = 0
results = minElements(nums, limit, goal);
console.log(results);

nums = [-1, 0, 1, 1, 1], limit = 1, goal = 771843707
results = minElements(nums, limit, goal);
console.log(results);

nums = [1, 2, 3], limit = 300, goal = 6
results = minElements(nums, limit, goal);
console.log(results);