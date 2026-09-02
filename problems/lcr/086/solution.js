/*
 * @lc app=leetcode.cn id=LCR 086 lang=javascript
 *
 * [LCR 086] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const n = s.length
  // dp[i][j] 表示 s[i..j] 是否为回文
  const dp = Array.from({ length: n }, () => new Array(n).fill(false))
  for (let j = 0; j < n; j++) {
    for (let i = 0; i <= j; i++) {
      if (s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1])) {
        dp[i][j] = true
      }
    }
  }

  const ans = []
  const path = []

  const backtrack = (start) => {
    if (start === n) {
      ans.push(path.slice())
      return
    }
    for (let end = start; end < n; end++) {
      if (dp[start][end]) {
        path.push(s.slice(start, end + 1))
        backtrack(end + 1)
        path.pop()
      }
    }
  }

  backtrack(0)
  return ans
};
// @lc code=end

// TEST: 官方示例1
console.log(JSON.stringify(partition('google')) === JSON.stringify([["g", "o", "o", "g", "l", "e"], ["g", "oo", "g", "l", "e"], ["goog", "l", "e"]]))
// TEST: 官方示例2
console.log(JSON.stringify(partition('aab')) === JSON.stringify([["a", "a", "b"], ["aa", "b"]]))
// TEST: 官方示例3
console.log(JSON.stringify(partition('a')) === JSON.stringify([["a"]]))
// TEST: 单字符重复串 "aaa",所有划分均为回文,共 4 种
console.log(partition('aaa').length === 4)
// TEST: 双字符回文 "aa"
console.log(JSON.stringify(partition('aa')) === JSON.stringify([["a", "a"], ["aa"]]))
// TEST: 无长度为2以上回文 "ab",仅逐字符划分
console.log(JSON.stringify(partition('ab')) === JSON.stringify([["a", "b"]]))
