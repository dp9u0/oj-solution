/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} A
 * @param {Interval[]} B
 * @return {Interval[]}
 */
var intervalIntersection = function (A, B) {
  let i = 0,
    j = 0;
  let results = [];
  while (i < A.length && j < B.length) {
    if (A[i].start <= B[j].end && B[j].start <= A[i].end) {
      results.push({
        start: Math.max(B[j].start, A[i].start),
        end: Math.min(B[j].end, A[i].end)
      })
    }
    A[i].end > B[j].end ? j++ : i++
  }
  return results;
};

/**
// TEST:

let A, B;
A = [
  [0, 2],
  [5, 10],
  [13, 23],
  [24, 25]
], B = [
  [1, 5],
  [8, 12],
  [15, 24],
  [25, 26]
]
console.log(intervalIntersection(A, B))
*/