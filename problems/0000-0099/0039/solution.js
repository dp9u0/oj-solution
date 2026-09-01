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

function backtrace(results, candidates, target, result = [], start = 0) {
  if (target === 0) {
    results.push([...result]);
  } else if (target > 0) {
    for (let index = start; index < candidates.length; index++) {
      const element = candidates[index];
      result.push(element);
      backtrace(results, candidates, target - element, result, index);
      result.pop();
    }
  }
}

// TEST:

let candidates, target;
candidates = [2, 3, 6, 7], target = 7
console.log(combinationSum(candidates, target));

candidates = [2, 3, 5], target = 8
console.log(combinationSum(candidates, target));