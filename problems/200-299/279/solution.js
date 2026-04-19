
const SquareValues = Array.from({ length: 101 }, (v, k) => k * k);
const Squares = new Set(SquareValues);
console.log(SquareValues)

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let count = 1;
  while (count < n && !cabDividedBy(n, count)) {
    count++;
  }
  return count;
};

/**
 * 能否将 number 拆分成 count 个 square
 * @param {number} n number
 * @param {number} count count
 */
const cabDividedBy = (n, count) => {
  if (n < 0) return false;
  if (count === 1) return Squares.has(n);
  for (const square of SquareValues) {
    if (cabDividedBy(n - square, count - 1)) {
      return true;
    }
  }
  return false;
}


// TEST:
let n, result;
n = 12;
result = numSquares(n);
console.log(result);

n = 13;
result = numSquares(n);
console.log(result);