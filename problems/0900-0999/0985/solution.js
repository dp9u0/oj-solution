/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (A, queries) {
  let result = [];
  let evenSum = 0;
  A.forEach(num => {
    if (num % 2 === 0) {
      evenSum += num;
    }
  });
  queries.forEach(query => {
    // A[query[1]] is even
    if (A[query[1]] % 2 === 0) {
      if (query[0] % 2 === 0) {
        // query[0] is even
        evenSum += query[0];
      } else {
        // query[0] is odd
        evenSum -= A[query[1]];
      }
    } else {
      // A[query[1]] is odd
      // query[0] is odd
      if (query[0] % 2 !== 0) {
        evenSum += (query[0] + A[query[1]]);
      }
    }
    A[query[1]] += query[0];
    result.push(evenSum);
  });
  return result;
};