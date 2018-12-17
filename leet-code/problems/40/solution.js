/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort();
  results = [];
  backtrace(results, candidates, target);
  return results;
};

function backtrace(results, candidates, target, current = 0, result = [], sum = 0, exist = {}) {
  if (sum > target || current > candidates.length - 1) {
    return;
  }
  // not take current, go next
  backtrace(results, candidates, target, current + 1, [...result], sum, exist);
  let currentValue = candidates[current];
  let sumWithCurrent = sum + currentValue;
  if (sumWithCurrent === target) {
    let toadd = [...result, currentValue];
    let key;
    for (var i = 0; i < toadd.length; i++) {
      key += toadd[i] + "_";
    }
    if (!exist[key]) {
      results.push([...result, currentValue]);
      exist[key] = true;
    }
    return;
  }
  // take current, go next
  backtrace(results, candidates, target, current + 1, [...result, currentValue], sumWithCurrent, exist);
}

let candidates, target;
candidates = [2, 3, 6, 7], target = 7
console.log(combinationSum2(candidates, target));

candidates = [2, 3, 5], target = 8
console.log(combinationSum2(candidates, target));

candidates = [10, 1, 2, 7, 6, 1, 5], target = 8
console.log(combinationSum2(candidates, target));