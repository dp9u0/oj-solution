/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  results = [];
  backtrace(results, candidates, target);
  return results;
};

function backtrace(results, candidates, target, current = 0, result = [], sum = 0, flag = false) {
  if (sum > target || current > candidates.length - 1) {
    return;
  }
  if (!flag) {
    // not take current, go next
    backtrace(results, candidates, target, current + 1, [...result], sum);
  }
  let currentValue = candidates[current];
  let sumWithCurrent = sum + currentValue;
  if (sumWithCurrent === target) {
    results.push([...result, currentValue]);
    return;
  }
  // take current, go next
  backtrace(results, candidates, target, current + 1, [...result, currentValue], sumWithCurrent);
  // take current, go current again
  backtrace(results, candidates, target, current, [...result, currentValue], sumWithCurrent, true);
}

// TEST:

let candidates, target;
candidates = [2, 3, 6, 7], target = 7
console.log(combinationSum(candidates, target));

candidates = [2, 3, 5], target = 8
console.log(combinationSum(candidates, target));