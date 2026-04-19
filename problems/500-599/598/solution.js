/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  let minM = m,
    minN = n;
  ops.forEach(op => {
    minM = Math.min(minM, op[0]);
    minN = Math.min(minN, op[1]);
  });
  return minM * minN;
};