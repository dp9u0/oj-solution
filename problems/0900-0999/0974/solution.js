/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function (A, K) {
  let map = {};
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i];
    const key = ((sum % K) + K) % K; // make sure it's postive
    map[key] = (map[key] || 0) + 1;
  }
  let count = 0;
  for (let i = 0; i < K; i++) {
    if (map[i] > 1) {
      count += (map[i] * (map[i] - 1)) / 2;  // sum of 1 to map[i] - 1;
    }
  }
  return count + (map[0] || 0);
};


/**
// TEST:
subarraysDivByK([14, 15, 0, -2, -3, 1], 5)
*/