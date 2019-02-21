/**
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function (A) {
  let results = [];
  const reverse = (A, k) => {
    for (let i = 0, j = k - 1; i < j; i++, j--) {
      [A[i], A[j]] = [A[j], A[i]];
    }
  }
  let nexti = -1;
  for (let x = A.length, i; x > 1; x--) {
    if (nexti !== -1) {
      [i, nexti] = [x - nexti, -1];
    } else {
      for (i = x; A[i] !== x; i--) {
        if (A[i] === (x - 1)) {
          nexti = i;
        }
      }
    }
    reverse(A, i + 1);
    results.push(i + 1);
    reverse(A, x);
    results.push(x);
  }
  return results;
};

/**
// TEST:

console.log(pancakeSort([3, 2, 4, 1]));
*/