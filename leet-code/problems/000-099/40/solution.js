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

function backtrace(results, candidates, target, result = [], start = 0) {
  if (target === 0) {
    results.push([...result]);
  } else if (target > 0) {
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] == candidates[i-1]) continue; // 去重 当前位置不需要重复的内容
      const element = candidates[i];
      result.push(element);
      backtrace(results, candidates, target - element, result, i + 1);
      result.pop();
    }
  }
}

let candidates, target;
candidates = [2, 3, 6, 7], target = 7
console.log(combinationSum2(candidates, target));

candidates = [2, 3, 5], target = 8
console.log(combinationSum2(candidates, target));

candidates = [10, 1, 2, 7, 6, 1, 5], target = 8
console.log(combinationSum2(candidates, target));