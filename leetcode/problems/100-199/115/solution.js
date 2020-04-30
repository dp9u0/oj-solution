/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  let tLength = t.length;
  let sLength = s.length;
  const dp = new Array(tLength + 1).fill(0);
  dp[0] = 1;
  for (let j = 1; j <= sLength; j++) {
    let pre = 1;
    for (let i = 1; i <= tLength; i++) {
      [pre, dp[i]] = [dp[i], dp[i] + (t[i - 1] === s[j - 1] ? pre : 0)];
    }
  }
  return dp[tLength];
};

// TEST:
console.log(numDistinct('rabbbit', 'rabbit'));
console.log(numDistinct('babgbag', 'bag'));
