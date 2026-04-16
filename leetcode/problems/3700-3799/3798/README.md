# [3798] Largest Even Number

## Description

[LeetCode Problem Description](https://leetcode.com/problems/largest-even-number/description/)

* algorithms
* Easy (69.30%)
* Likes:    66
* Dislikes: 1
* Testcase Example:  '"1112"'

```md
You are given a string s consisting only of the characters &#39;1&#39; and &#39;2&#39;.
You may delete any number of characters from s without changing the order of the remaining characters.
Return the largest possible resultant string that represents an even integer. If there is no such string, return the empty string ''.

Example 1:

Input: s = '1112'
Output: '1112'
Explanation:
The string already represents the largest possible even number, so no deletions are needed.

Example 2:

Input: s = '221'
Output: '22'
Explanation:
Deleting &#39;1&#39; results in the largest possible even number which is equal to 22.

Example 3:

Input: s = '1'
Output: ''
Explanation:
There is no way to get an even number.


Constraints:

1 <= s.length <= 100
s consists only of the characters &#39;1&#39; and &#39;2&#39;.


```

## 中文翻译

给定仅含 '1' 和 '2' 的字符串 s，可删除任意字符（不改变顺序），返回能组成的最大偶数字符串。

## 解题思路

偶数末尾必须是 '2'，所以找到 s 中最后一个 '2' 的位置，从开头到该位置即为答案。若不存在 '2' 则返回空串。

## Solution

[SourceCode](./solution.js)
