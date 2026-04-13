# [2182] Construct String With Repeat Limit

## Description

[LeetCode Problem Description](https://leetcode.com/problems/construct-string-with-repeat-limit/description/)

* algorithms
* Medium (70.82%)
* Likes:    1275
* Dislikes: 103
* Testcase Example:  '"cczazcc"\n3'

```md
You are given a string s and an integer repeatLimit. Construct a new string repeatLimitedString using the characters of s such that no letter appears more than repeatLimit times in a row. You do not have to use all characters from s.
Return the lexicographically largest repeatLimitedString possible.
A string a is lexicographically larger than a string b if in the first position where a and b differ, string a has a letter that appears later in the alphabet than the corresponding letter in b. If the first min(a.length, b.length) characters do not differ, then the longer string is the lexicographically larger one.

Example 1:

Input: s = 'cczazcc', repeatLimit = 3
Output: 'zzcccac'
Explanation: We use all of the characters from s to construct the repeatLimitedString 'zzcccac'.
The letter &#39;a&#39; appears at most 1 time in a row.
The letter &#39;c&#39; appears at most 3 times in a row.
The letter &#39;z&#39; appears at most 2 times in a row.
Hence, no letter appears more than repeatLimit times in a row and the string is a valid repeatLimitedString.
The string is the lexicographically largest repeatLimitedString possible so we return 'zzcccac'.
Note that the string 'zzcccca' is lexicographically larger but the letter &#39;c&#39; appears more than 3 times in a row, so it is not a valid repeatLimitedString.

Example 2:

Input: s = 'aababab', repeatLimit = 2
Output: 'bbabaa'
Explanation: We use only some of the characters from s to construct the repeatLimitedString 'bbabaa'.
The letter &#39;a&#39; appears at most 2 times in a row.
The letter &#39;b&#39; appears at most 2 times in a row.
Hence, no letter appears more than repeatLimit times in a row and the string is a valid repeatLimitedString.
The string is the lexicographically largest repeatLimitedString possible so we return 'bbabaa'.
Note that the string 'bbabaaa' is lexicographically larger but the letter &#39;a&#39; appears more than 2 times in a row, so it is not a valid repeatLimitedString.


Constraints:

1 <= repeatLimit <= s.length <= 105
s consists of lowercase English letters.


```

## 翻译

给定字符串 s 和整数 repeatLimit，用 s 中的字符构造新字符串，使没有字母连续出现超过 repeatLimit 次。返回字典序最大的结果。

## Approach

贪心 + 计数：统计每个字母出现次数，从大到小遍历（z→a）。对当前字母 c，尽可能添加 min(count[c], repeatLimit) 个，如果还有剩余，则添加一个次大字母作为间隔，然后继续添加 c。重复直到无法添加。

## Solution

[SourceCode](./solution.js)
