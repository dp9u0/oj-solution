/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
  if (A.length === 0) {
    return A;
  }
  let results = new Array(A[0].length);
  A.forEach((row, i) => {
    row.forEach((el, j) => {
      if (!results[j]) {
        results[j] = new Array(A.length);
      }
      results[j][i] = el;
    });
  });
  return results;
};