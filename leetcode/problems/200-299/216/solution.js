/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  if (n > 45) return [];
  const results = [];
  bt(k, n, 1, [], results);
  return results;
};

const bt = (k, n, current, result, results) => {
  if (k === 0 && n === 0) results.push([...result]);
  for (let i = current; i <= 9 && i <= n; i++) {
    result.push(i);
    bt(k - 1, n - i, i + 1, result, results);
    result.pop();
  }
}

// TEST:
console.log(combinationSum3(3, 7));
console.log(combinationSum3(3, 9));


