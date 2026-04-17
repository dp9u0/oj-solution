# [1639] Number of Ways to Form a Target String Given a Dictionary

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/description/)

* algorithms
* Hard (56.54%)
* Likes:    2072
* Dislikes: 120
* Testcase Example:  '["acca","bbbb","caca"]\n"aba"'

```md
You are given a list of strings of the same length words and a string target.
Your task is to form target using the given words under the following rules:

target should be formed from left to right.
To form the ith character (0-indexed) of target, you can choose the kth character of the jth string in words if target[i] = words[j][k].
Once you use the kth character of the jth string of words, you can no longer use the xth character of any string in words where x <= k. In other words, all characters to the left of or at index k become unusuable for every string.
Repeat the process until you form the string target.

Notice that you can use multiple characters from the same string in words provided the conditions above are met.
Return the number of ways to form target from words. Since the answer may be too large, return it modulo 109 + 7.

Example 1:

Input: words = ['acca','bbbb','caca'], target = 'aba'
Output: 6
Explanation: There are 6 ways to form target.
'aba' -> index 0 ('acca'), index 1 ('bbbb'), index 3 ('caca')
'aba' -> index 0 ('acca'), index 2 ('bbbb'), index 3 ('caca')
'aba' -> index 0 ('acca'), index 1 ('bbbb'), index 3 ('acca')
'aba' -> index 0 ('acca'), index 2 ('bbbb'), index 3 ('acca')
'aba' -> index 1 ('caca'), index 2 ('bbbb'), index 3 ('acca')
'aba' -> index 1 ('caca'), index 2 ('bbbb'), index 3 ('caca')

Example 2:

Input: words = ['abba','baab'], target = 'bab'
Output: 4
Explanation: There are 4 ways to form target.
'bab' -> index 0 ('baab'), index 1 ('baab'), index 2 ('abba')
'bab' -> index 0 ('baab'), index 1 ('baab'), index 3 ('baab')
'bab' -> index 0 ('baab'), index 2 ('baab'), index 3 ('baab')
'bab' -> index 1 ('abba'), index 2 ('baab'), index 3 ('baab')


Constraints:

1 <= words.length <= 1000
1 <= words[i].length <= 1000
All strings in words have the same length.
1 <= target.length <= 1000
words[i] and target contain only lowercase English letters.


```

## 翻译

给定等长字符串数组 words 和目标字符串 target。从左到右构建 target，每次从所有 words 的某一列中选一个匹配字符。已选列之前的列不能再选。返回构建 target 的方案数，对 10^9+7 取模。

## 解题思路

预处理每列每个字符的出现次数 count[k][c]。DP：dp[i][k] = 用前 k 列构建 target[0..i-1] 的方案数。
- 不选第 k 列：dp[i][k] = dp[i][k-1]
- 选第 k 列匹配 target[i-1]：dp[i][k] += dp[i-1][k-1] * count[k][target[i-1]]

空间优化：对 target 的位置从右往左更新，避免覆盖。时间 O(n*L + m*n)，其中 n=target长度，L=列数，m=words数。

## Solution

[SourceCode](./solution.js)
