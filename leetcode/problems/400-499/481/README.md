# [481] Magical String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/magical-string/description/)

* algorithms
* Medium (54.93%)
* Likes:    383
* Dislikes: 1425
* Testcase Example:  '6'

```md
A magical string s consists of only &#39;1&#39; and &#39;2&#39; and obeys the following rule:

Concatenating the sequence of lengths of its consecutive groups of identical characters &#39;1&#39; and &#39;2&#39; generates the string s itself.

The first few elements of s is s = '1221121221221121122&hellip;&hellip;'. If we group the consecutive 1&#39;s and 2&#39;s in s, it will be '1 22 11 2 1 22 1 22 11 2 11 22 ......' and counting the occurrences of 1&#39;s or 2&#39;s in each group yields the sequence'1 2 2 1 1 2 1 2 2 1 2 2 ......'.
You can see that concatenating the occurrence sequence gives uss itself.
Given an integer n, return the number of 1&#39;s in the first n number in the magical string s.

Example 1:

Input: n = 6
Output: 3
Explanation: The first 6 elements of magical string s is '122112' and it contains three 1&#39;s, so return 3.

Example 2:

Input: n = 1
Output: 1


Constraints:

1 <= n <= 105


```

## 翻译

魔法字符串 s 仅由 '1' 和 '2' 组成，将其连续相同字符分组后的长度序列恰好等于 s 本身。给定 n，返回 s 前 n 个字符中 '1' 的个数。

## 解题思路

双指针构建字符串。初始 s = [1,2,2]，read 指针从索引 2 开始读取要生成的数量，每次交替追加 1 或 2。同时统计前 n 个字符中 1 的个数。

## Solution

[SourceCode](./solution.js)
