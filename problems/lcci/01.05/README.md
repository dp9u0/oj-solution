# [面试题 01.05] 一次编辑

## Description


```md
https://leetcode.cn/problems/one-away-lcci/description/
* lcci
* Medium (34.60%)
* Likes:    274
* Dislikes: -
* Testcase Example:  '"horse"\n"ros"'
字符串有三种编辑操作:插入一个英文字符、删除一个英文字符或者替换一个英文字符。 给定两个字符串，编写一个函数判定它们是否只需要一次(或者零次)编辑。

示例 1：
输入：
first = "pale"
second = "ple"
输出：True

示例 2：
输入：
first = "pales"
second = "pal"
输出：False
Hint 1: 从容易的事情开始。你能分别检查一下每一个条件吗？
Hint 2: “插入字符”选项和“删除字符”选项之间是何关系？这些需要分开检查吗？
Hint 3: 你能一次完成三次检查吗？

```

## Description (English)

There are three types of edits on a string: insert a character, delete a character, or replace a character. Given two strings, write a function to check whether they are one edit (or zero edits) away.

Example 1:
Input: first = "pale", second = "ple"
Output: True

Example 2:
Input: first = "pales", second = "pal"
Output: False

## 思路

双指针一次扫描 O(n)：长度差 > 1 直接否决；逐位比对，首次失配消耗唯一的编辑机会——等长则双指针同进（替换），不等长则只推进较长串的指针（插入/删除互为逆操作，统一处理）；再次失配即 false。循环结束时串尾至多剩一个字符，与长度差 ≤ 1 的前提吻合。

## Solution

[SourceCode](./solution.js)
