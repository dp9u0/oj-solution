# [2911] Minimum Changes to Make K Semi-palindromes

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-changes-to-make-k-semi-palindromes/description/)

* algorithms
* Hard (36.13%)
* Likes:    132
* Dislikes: 108
* Testcase Example:  '"abcac"\n2'

```md
Given a string s and an integer k, partition s into k substrings such that the letter changes needed to make each substring a semi-palindromeare minimized.
Return the minimum number of letter changes required.
A semi-palindrome is a special type of string that can be divided into palindromes based on a repeating pattern. To check if a string is a semi-palindrome:​

Choose a positive divisor d of the string&#39;s length. d can range from 1 up to, but not including, the string&#39;s length. For a string of length 1, it does not have a valid divisor as per this definition, since the only divisor is its length, which is not allowed.
For a given divisor d, divide the string into groups where each group contains characters from the string that follow a repeating pattern of length d. Specifically, the first group consists of characters at positions 1, 1 + d, 1 + 2d, and so on; the second group includes characters at positions 2, 2 + d, 2 + 2d, etc.
The string is considered a semi-palindrome if each of these groups forms a palindrome.

Consider the string 'abcabc':

The length of 'abcabc' is 6. Valid divisors are 1, 2, and 3.
For d = 1: The entire string 'abcabc' forms one group. Not a palindrome.
For d = 2:

Group 1 (positions 1, 3, 5): 'acb'
Group 2 (positions 2, 4, 6): 'bac'
Neither group forms a palindrome.


For d = 3:

Group 1 (positions 1, 4): 'aa'
Group 2 (positions 2, 5): 'bb'
Group 3 (positions 3, 6): 'cc'
All groups form palindromes. Therefore, 'abcabc' is a semi-palindrome.




Example 1:

Input:   s = 'abcac', k = 2
Output:   1
Explanation:  Divide s into 'ab' and 'cac'. 'cac' is already semi-palindrome. Change 'ab' to 'aa', it becomes semi-palindrome with d = 1.

Example 2:

Input:   s = 'abcdef', k = 2
Output:   2
Explanation:  Divide s into substrings 'abc' and 'def'. Eachneeds one change to become semi-palindrome.

Example 3:

Input:   s = 'aabbaa', k = 3
Output:   0
Explanation:  Divide s into substrings 'aa', 'bb' and 'aa'.All are already semi-palindromes.


Constraints:

2 <= s.length <= 200
1 <= k <= s.length / 2
s contains only lowercase English letters.


```

## 中文翻译

将字符串 s 分成 k 个子串，每个子串改为 semi-palindrome 的最少字母修改次数。Semi-palindrome 定义为：存在长度因子 d（1 <= d < len），按步长 d 分组后每组都是回文。

## 解题思路

**预处理 + 区间 DP**

1. 预处理 cost[l][r]：使子串 s[l..r] 成为 semi-palindrome 的最小修改数
   - 枚举 len 的所有因子 d（1 <= d < len）
   - 按 d 分组，每组做回文配对统计不匹配数
   - 取所有 d 中最小的修改数
2. DP：dp[j][i] = 将 s[0..i] 分成 j+1 个子串的最小修改数
   - dp[0][i] = cost[0][i]
   - dp[j][i] = min(dp[j-1][p] + cost[p+1][i])

时间复杂度：O(n^3)，空间复杂度：O(n^2)

## Solution

[SourceCode](./solution.js)
