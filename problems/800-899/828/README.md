# [828] Count Unique Characters of All Substrings of a Given String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/description/)

* algorithms
* Hard (53.57%)
* Likes:    2255
* Dislikes: 258
* Testcase Example:  '"ABC"'

```md
Let&#39;s define a function countUniqueChars(s) that returns the number of unique characters ins.

For example, calling countUniqueChars(s) if s = 'LEETCODE' then 'L', 'T', 'C', 'O', 'D' are the unique characters since they appear only once in s, therefore countUniqueChars(s) = 5.

Given a string s, return the sum of countUniqueChars(t) where t is a substring of s. The test cases are generated such that the answer fits in a 32-bit integer.
Notice that some substrings can be repeated so in this case you have to count the repeated ones too.

Example 1:

Input: s = 'ABC'
Output: 10
Explanation: All possible substrings are: 'A','B','C','AB','BC' and 'ABC'.
Every substring is composed with only unique letters.
Sum of lengths of all substring is 1 + 1 + 1 + 2 + 2 + 3 = 10

Example 2:

Input: s = 'ABA'
Output: 8
Explanation: The same as example 1, except countUniqueChars('ABA') = 1.

Example 3:

Input: s = 'LEETCODE'
Output: 92


Constraints:

1 <= s.length <= 105
s consists of uppercase English letters only.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

定义 countUniqueChars(s) 为字符串 s 中只出现一次的字符个数。返回 s 所有子串的 countUniqueChars 之和。

## 解题思路

贡献法。对每个位置 i，计算 s[i] 在多少个子串中恰好出现一次（作为唯一贡献者）。

设 prev 为 s[i] 的上一次出现位置（默认 -1），next 为下一次出现位置（默认 n）。
子串起点必须在 (prev, i]，终点必须在 [i, next)。
贡献 = (i - prev) × (next - i)。

预处理每个字符的 prev 和 next，O(n)。
