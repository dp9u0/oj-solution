/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  let f = new Array(100).fill(0);
  dominoes.forEach(([a, b]) => {
    if (a > b) [a, b] = [b, a];
    f[a + b * 10]++;
  });
  return f.reduce((p, v) => p + v * (v - 1) / 2, 0)
};

// TEST:
let dominoes;
let result;
dominoes = [[1, 2], [2, 1], [3, 4], [5, 6]]
result = numEquivDominoPairs(dominoes);
console.log(result);

dominoes = [
  [2, 1], [5, 4], [3, 7], [6, 2], [4, 4],
  [1, 8], [9, 6], [5, 3], [7, 4], [1, 9],
  [1, 1], [6, 6], [9, 6], [1, 3], [9, 7],
  [4, 7], [5, 1], [6, 5], [1, 6], [6, 1],
  [1, 8], [7, 2], [2, 4], [1, 6], [3, 1],
  [3, 9], [3, 7], [9, 1], [1, 9], [8, 9]]
result = numEquivDominoPairs(dominoes);
console.log(result);