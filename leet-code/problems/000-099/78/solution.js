/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let subs = []
  backtrace(nums, 0, subs);
  return subs;
};


function backtrace(nums, start, subs, sub = []) {
  subs.push([...sub]);
  for (let i = start; i < nums.length; i++) {
    sub.push(nums[i]);
    backtrace(nums, i + 1, subs, sub);
    sub.pop();
  }
}

/**
// TEST:

let nums = [1, 2, 3];
console.log(subsets(nums));
*/