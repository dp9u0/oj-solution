/*
 * @lc app=leetcode id=2746 lang=javascript
 *
 * [2746] Decremental String Concatenation
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var minimizeConcatenatedLength = function(words) {
    let n = words.length;
    let INF = Infinity;
    // dp[first][last] = min length with these boundary chars
    let dp = Array.from({ length: 26 }, () => new Array(26).fill(INF));
    let w0 = words[0];
    let f0 = w0.charCodeAt(0) - 97, l0 = w0.charCodeAt(w0.length - 1) - 97;
    dp[f0][l0] = w0.length;

    for (let i = 1; i < n; i++) {
      let w = words[i];
      let wf = w.charCodeAt(0) - 97, wl = w.charCodeAt(w.length - 1) - 97;
      let wlen = w.length;
      let ndp = Array.from({ length: 26 }, () => new Array(26).fill(INF));
      for (let first = 0; first < 26; first++) {
        for (let last = 0; last < 26; last++) {
          if (dp[first][last] === INF) continue;
          let len = dp[first][last];
          // option 1: join(result, w) => first stays, new last = wl
          let len1 = len + wlen - (last === wf ? 1 : 0);
          ndp[first][wl] = Math.min(ndp[first][wl], len1);
          // option 2: join(w, result) => new first = wf, last stays
          let len2 = len + wlen - (wl === first ? 1 : 0);
          ndp[wf][last] = Math.min(ndp[wf][last], len2);
        }
      }
      dp = ndp;
    }

    let ans = INF;
    for (let i = 0; i < 26; i++)
      for (let j = 0; j < 26; j++)
        ans = Math.min(ans, dp[i][j]);
    return ans;
};
// @lc code=end

// TEST:
console.log(minimizeConcatenatedLength(["aa","ab","bc"]));
console.log(minimizeConcatenatedLength(["ab","b"]));
console.log(minimizeConcatenatedLength(["aaa","c","aba"]));
