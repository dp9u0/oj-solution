# [3174] Clear Digits

## Description

[LeetCode Problem Description](https://leetcode.com/problems/clear-digits/description/)

* algorithms
* Easy (82.69%)
* Likes:    704
* Dislikes: 27
* Testcase Example:  '"abc"'

```md
You are given a string s.
Your task is to remove all digits by doing this operation repeatedly:

Delete the first digit and the closest non-digit character to its left.

Return the resulting string after removing all digits.
Note that the operation cannot be performed on a digit that does not have any non-digit character to its left.

Example 1:

Input: s = 'abc'
Output: 'abc'
Explanation:
There is no digit in the string.

Example 2:

Input: s = 'cb34'
Output: ''
Explanation:
First, we apply the operation on s[2], and s becomes 'c4'.
Then we apply the operation on s[1], and s becomes ''.


Constraints:

1 <= s.length <= 100
s consists only of lowercase English letters and digits.
The input is generated such that it is possible to delete all digits.


```

## 题目翻译

给定字符串 s，重复执行操作：删除第一个数字及其左边最近的非数字字符。返回移除所有数字后的字符串。

## 解题思路

用栈模拟：遍历字符串，遇到字母入栈，遇到数字则弹出栈顶字母。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
