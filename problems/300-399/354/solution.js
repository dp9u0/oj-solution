/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  envelopes.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const length = envelopes.length;
  const dp = new Array(length).fill(1)
  let max = 0;
  for (let i = 0; i < length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      let ei = envelopes[i];
      let ej = envelopes[j];
      if (ei[0] > ej[0] && ei[1] > ej[1]) { dp[i] = Math.max(dp[i], dp[j] + 1); }
    }
    max = Math.max(dp[i], max);
  }
  return max;
};

// TEST:
let envelopes, result;
envelopes = [[5, 4], [6, 4], [6, 7], [2, 3]]
result = maxEnvelopes(envelopes);
console.log(result);
envelopes = [[1, 1], [1, 1], [1, 1]]
result = maxEnvelopes(envelopes);
console.log(result);