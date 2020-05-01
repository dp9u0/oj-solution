/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  if (!s) return 0;
  let sLength = s.length;
  let dp = new Array(sLength).fill(0);
  let ispal = new Array(sLength);
  for (let i = 0; i < ispal.length; i++) {
    ispal[i] = new Array(sLength).fill(false);
  }
  for (let j = 0; j < sLength; j++) {
    dp[j] = j;
    ispal[j][j] = true;
    for (let i = 0; i <= j; i++) {
      if (s[i] === s[j] && (j - i <= 1 || ispal[i + 1][j - 1])) {
        if (i === 0)
          dp[j] = 0;
        else {
          ispal[i][j] = true;
          dp[j] = Math.min(dp[i - 1] + 1, dp[j]);
        }
      }
    }
  }
  return dp[sLength - 1];
};

// TEST:
console.log(minCut("aab"));
