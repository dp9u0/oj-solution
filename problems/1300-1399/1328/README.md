# [1328] Break a Palindrome

## Description

[LeetCode Problem Description](https://leetcode.com/problems/break-a-palindrome/description/)

* algorithms
* Medium (51.55%)
* Likes:    2446
* Dislikes: 755
* Testcase Example:  '"abccba"'

```md
Given a palindromic string of lowercase English letters palindrome, replace exactly one character with any lowercase English letter so that the resulting string is not a palindrome and that it is the lexicographically smallest one possible.
Return the resulting string. If there is no way to replace a character to make it not a palindrome, return an empty string.
A string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ, a has a character strictly smaller than the corresponding character in b. For example, 'abcc' is lexicographically smaller than 'abcd' because the first position they differ is at the fourth character, and &#39;c&#39; is smaller than &#39;d&#39;.

Example 1:

Input: palindrome = 'abccba'
Output: 'aaccba'
Explanation: There are many ways to make 'abccba' not a palindrome, such as 'zbccba', 'aaccba', and 'abacba'.
Of all the ways, 'aaccba' is the lexicographically smallest.

Example 2:

Input: palindrome = 'a'
Output: ''
Explanation: There is no way to replace a single character to make 'a' not a palindrome, so return an empty string.


Constraints:

1 <= palindrome.length <= 1000
palindrome consists of only lowercase English letters.


```

## 翻译

给定一个回文字符串，替换恰好一个字符使其不再是回文串，且字典序最小。返回结果字符串，无法则返回空串。

## Approach

贪心：从左到右找到第一个不是 'a' 的字符，改为 'a'。如果所有字符都是 'a'（长度 1 除外），则将最后一个字符改为 'b'。长度为 1 时无法操作返回空串。

## Solution

[SourceCode](./solution.js)
