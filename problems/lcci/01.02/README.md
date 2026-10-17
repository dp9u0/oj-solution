# [面试题 01.02] 判定是否互为字符重排

## Description


```md
https://leetcode.cn/problems/check-permutation-lcci/description/
* lcci
* Easy (65.71%)
* Likes:    190
* Dislikes: -
* Testcase Example:  '"abc"\n"bca"'
给定两个由小写字母组成的字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。
示例 1：
输入: s1 = "abc", s2 = "bca"
输出: true
示例 2：
输入: s1 = "abc", s2 = "bad"
输出: false
说明：
0 <= len(s1) <= 100
0 <= len(s2) <= 100
Hint 1: 描述两个字符串是否互为字符重排的含义。现在，看看你提供的定义，你能否根据这个定义检查字符串
Hint 2: 有一种解法需要O(NlogN)的时间。另一种解法需要使用一些空间，但需要运行时间为O(N)
Hint 3: 散列表有用吗
Hint 4: 两个重排的字符串应该具有相同的字符，但顺序不同。你可以让它们的顺序一样吗？

```

## Description (English)

Given two strings s1 and s2 of lowercase letters, write a program to determine whether one string is a rearrangement of the other.

Example 1:
Input: s1 = "abc", s2 = "bca"
Output: true

Example 2:
Input: s1 = "abc", s2 = "bad"
Output: false

Notes: 0 <= len(s1) <= 100; 0 <= len(s2) <= 100.

## 思路

长度不等直接 false；否则 26 位计数数组做差分（s1 加、s2 减），全部归零即互为重排，O(n)/O(1)。

## Solution

[SourceCode](./solution.js)
