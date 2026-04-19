/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    let max = 0;
    for (let j = 1; j < i; j++) {
      // j * integerBreak(i-j) 
      // or j * (i - j)
      max = Math.max(max, j * dp[i - j], j * (i - j))
    }
    dp[i] = max;
  }
  return dp[n];
};

// TEST:
let n;
let result;
n = 10
result = integerBreak(n);
console.log(result)