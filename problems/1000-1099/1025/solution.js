/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function (N) {
  return N % 2 === 0;
};


// TEST:
let N, result;

N = 3;
result = divisorGame(N);
console.log(result);

N = 2;
result = divisorGame(N);
console.log(result);