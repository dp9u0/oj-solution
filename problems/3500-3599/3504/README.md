# [3504] Longest Palindrome After Substring Concatenation II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-palindrome-after-substring-concatenation-ii/description/)

* algorithms
* Hard (17.87%)
* Likes:    91
* Dislikes: 6
* Testcase Example:  '"a"\n"a"'

```md
You are given two strings, s and t.
You can create a new string by selecting a substring from s (possibly empty) and a substring from t (possibly empty), then concatenating them in order.
Return the length of the longest palindrome that can be formed this way.

Example 1:

Input: s = 'a', t = 'a'
Output: 2
Explanation:
Concatenating 'a' from s and 'a' from t results in 'aa', which is a palindrome of length 2.

Example 2:

Input: s = 'abc', t = 'def'
Output: 1
Explanation:
Since all characters are different, the longest palindrome is any single character, so the answer is 1.

Example 3:

Input: s = 'b', t = 'aaaa'
Output: 4
Explanation:
Selecting 'aaaa' from t is the longest palindrome, so the answer is 4.

Example 4:

Input: s = 'abcde', t = 'ecdba'
Output: 5
Explanation:
Concatenating 'abc' from s and 'ba' from t results in 'abcba', which is a palindrome of length 5.


Constraints:

1 <= s.length, t.length <= 1000
s and t consist of lowercase English letters.


```

## 翻译

给定两个字符串 s 和 t，可以从 s 选一个子串（可为空），从 t 选一个子串（可为空），按顺序拼接。返回能形成的最长回文串的长度。

## 解题思路

三种情况取最大值：
1. 仅从 s 中选子串形成的最长回文串
2. 仅从 t 中选子串形成的最长回文串
3. s 的子串和 t 的子串拼接形成的最长回文串

对于情况3：拼接后的回文串 = s_matched + middle_palindrome + t_matched_reversed。
- 设 rt = reverse(t)，预处理 lcp[i][j] = s[i..] 与 rt[j..] 的最长公共前缀。
- 预处理 maxPalStartS[i] = s 中从位置 i 开始的最长回文子串长度。
- 预处理 maxPalEndT[j] = t 中以位置 j 结束的最长回文子串长度。
- 枚举 (si, rj)，L = lcp[si][rj]，则答案候选为 2*L + maxPalStartS[si+L] 或 2*L + maxPalEndT[m-1-rj-L]。

时间复杂度 O(n*m + n^2 + m^2)。

## Solution

[SourceCode](./solution.js)
