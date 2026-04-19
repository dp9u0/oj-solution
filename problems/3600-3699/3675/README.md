# [3675] Minimum Operations to Transform String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-transform-string/description/)

* algorithms
* Medium (61.91%)
* Likes:    74
* Dislikes: 7
* Testcase Example:  '"yz"'

```md
You are given a string s consisting only of lowercase English letters.
You can perform the following operation any number of times (including zero):


Choose any character c in the string and replace every occurrence of c with the next lowercase letter in the English alphabet.


Return the minimum number of operations required to transform s into a string consisting of only &#39;a&#39; characters.
Note: Consider the alphabet as circular, thus &#39;a&#39; comes after &#39;z&#39;.

Example 1:

Input: s = 'yz'
Output: 2
Explanation:

Change &#39;y&#39; to &#39;z&#39; to get 'zz'.
Change &#39;z&#39; to &#39;a&#39; to get 'aa'.
Thus, the answer is 2.


Example 2:

Input: s = 'a'
Output: 0
Explanation:

The string 'a' only consists of &#39;a&#39;​​​​​​​ characters. Thus, the answer is 0.



Constraints:

1 <= s.length <= 5 * 105
s consists only of lowercase English letters.


```

## 翻译

给定字符串s，每次操作选一个字符c，将所有c替换为字母表下一个字母（z→a循环）。求变为全'a'的最少操作数。

## 解题思路

从距离最大的字符开始推进，沿途吸收其他字符。答案=所有独特字符到'a'的最大距离(26-(c-'a'))%26。

## Solution

[SourceCode](./solution.js)
