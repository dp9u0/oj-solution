# [3170] Lexicographically Minimum String After Removing Stars

## Description

[LeetCode Problem Description](https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/description/)

* algorithms
* Medium (50.95%)
* Likes:    593
* Dislikes: 89
* Testcase Example:  '"aaba*"'

```md
You are given a string s. It may contain any number of &#39;*&#39; characters. Your task is to remove all &#39;*&#39; characters.
While there is a &#39;*&#39;, do the following operation:

Delete the leftmost &#39;*&#39; and the smallest non-&#39;*&#39; character to its left. If there are several smallest characters, you can delete any of them.

Return the lexicographically smallest resulting string after removing all &#39;*&#39; characters.

Example 1:

Input: s = 'aaba*'
Output: 'aab'
Explanation:
We should delete one of the &#39;a&#39; characters with &#39;*&#39;. If we choose s[3], s becomes the lexicographically smallest.

Example 2:

Input: s = 'abc'
Output: 'abc'
Explanation:
There is no &#39;*&#39; in the string.


Constraints:

1 <= s.length <= 105
s consists only of lowercase English letters and &#39;*&#39;.
The input is generated such that it is possible to delete all &#39;*&#39; characters.


```

## 翻译

给定包含小写字母和 '*' 的字符串，每个 '*' 删除其左边最小的字符（选最右边的以得到字典序最小结果）。返回最终字符串。

## Approach

用 26 个栈分别记录每种字符出现的位置。遍历字符串，遇到字母就入栈，遇到 '*' 就找最小的非空栈弹出（删除最右边的最小字符）。最后按序拼接未删除的字符。

## Solution

[SourceCode](./solution.js)
