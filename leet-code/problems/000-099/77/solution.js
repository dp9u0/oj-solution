/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let results = [];
  backtrace(n, k, results);
  return results;
};

function backtrace(n, rest, results, result = [], current = 1) {
  if (rest === 0) {
    results.push([...result]);
    return;
  }
  let i = n;
  while (current <= n) {
    result.push(current);
    backtrace(n, rest - 1, results, result, current + 1);
    result.pop();
    current++;
  }
}

/**
// TEST: 

console.log(combine(4, 2));
*/