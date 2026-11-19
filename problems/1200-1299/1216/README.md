# [1216] 验证回文串 III

## Description


```md
https://leetcode.cn/problems/valid-palindrome-iii/description/
* algorithms
* Hard (57.40%)
* Likes:    73
* Dislikes: -
* Testcase Example:  '"abcdeca"\n2'
给出一个字符串 s 和一个整数 k，若这个字符串是一个「k 回文 」，则返回 true 。
如果可以通过从字符串中删去最多 k 个字符将其转换为回文，那么这个字符串就是一个「k 回文 」。

示例 1：
输入：s = "abcdeca", k = 2
输出：true
解释：删去字符 “b” 和 “e”。
示例 2:
输入：s = "abbababa", k = 1
输出：true

提示：
1 <= s.length <= 1000
s 中只含有小写英文字母
1 <= k <= s.length
Hint 1: Can you reduce this problem to a classic problem?
Hint 2: The problem is equivalent to finding any palindromic subsequence of length at least N-K where N is the length of the string.
Hint 3: Try to find the longest palindromic subsequence.
Hint 4: Use DP to do that.

```

## Solution

[SourceCode](./solution.js)

## Translation

Return true if s can become a palindrome by deleting at most k characters (k-palindrome).

- Example: s = "abcdeca", k = 2 → `true` (delete 'b','e')

## Approach

**最长回文子序列 DP**。最少删除数 = n − LPS(s)。区间 DP:dp[i][j] = s[i..j] 的 LPS;s[i]==s[j] 时 dp[i+1][j−1]+2,否则 max(dp[i+1][j], dp[i][j−1])。判定 n − dp[0][n−1] ≤ k。O(n²) = 10⁶。
