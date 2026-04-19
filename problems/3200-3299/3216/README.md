# [3216] Lexicographically Smallest String After a Swap

## Description

[LeetCode Problem Description](https://leetcode.com/problems/lexicographically-smallest-string-after-a-swap/description/)

* algorithms
* Easy (54.58%)
* Likes:    100
* Dislikes: 32
* Testcase Example:  '"45320"'

```md
Given a string s containing only digits, return the lexicographically smallest string that can be obtained after swapping adjacent digits in s with the same parity at most once.
Digits have the same parity if both are odd or both are even. For example, 5 and 9, as well as 2 and 4, have the same parity, while 6 and 9 do not.

Example 1:

Input: s = '45320'
Output: '43520'
Explanation:
s[1] == &#39;5&#39; and s[2] == &#39;3&#39; both have the same parity, and swapping them results in the lexicographically smallest string.

Example 2:

Input: s = '001'
Output: '001'
Explanation:
There is no need to perform a swap because s is already the lexicographically smallest.


Constraints:

2 <= s.length <= 100
s consists only of digits.


```

## 中文翻译

给定数字字符串 s，最多交换一次相邻的同奇偶数字，返回字典序最小的结果。

## 解题思路

从左到右遍历，找到第一个相邻且同奇偶、且左边大于右边的位置，交换即可。

## Solution

[SourceCode](./solution.js)
