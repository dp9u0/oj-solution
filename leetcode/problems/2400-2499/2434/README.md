# [2434] Using a Robot to Print the Lexicographically Smallest String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/description/)

* algorithms
* Medium (62.46%)
* Likes:    1156
* Dislikes: 309
* Testcase Example:  '"zza"'

```md
You are given a string s and a robot that currently holds an empty string t. Apply one of the following operations until s and t are both empty:

Remove the first character of a string s and give it to the robot. The robot will append this character to the string t.
Remove the last character of a string t and give it to the robot. The robot will write this character on paper.

Return the lexicographically smallest string that can be written on the paper.

Example 1:

Input: s = 'zza'
Output: 'azz'
Explanation: Let p denote the written string.
Initially p='', s='zza', t=''.
Perform first operation three times p='', s='', t='zza'.
Perform second operation three times p='azz', s='', t=''.

Example 2:

Input: s = 'bac'
Output: 'abc'
Explanation: Let p denote the written string.
Perform first operation twice p='', s='c', t='ba'.
Perform second operation twice p='ab', s='c', t=''.
Perform first operation p='ab', s='', t='c'.
Perform second operation p='abc', s='', t=''.

Example 3:

Input: s = 'bdda'
Output: 'addb'
Explanation: Let p denote the written string.
Initially p='', s='bdda', t=''.
Perform first operation four times p='', s='', t='bdda'.
Perform second operation four times p='addb', s='', t=''.


Constraints:

1 <= s.length <= 105
s consists of only English lowercase letters.


```

## 中文翻译

给定字符串 s 和一个机器人，机器人持有空字符串 t。可以执行两种操作：1) 将 s 的首字符移到 t 末尾；2) 将 t 的末尾字符写到纸上。求能写出的字典序最小的字符串。

## 解题思路

贪心 + 栈。预处理 suffixMin[i] 表示 s[i..] 中的最小字符。用栈模拟 t，遍历 s 的每个字符压入栈，每次入栈后检查栈顶是否 <= suffixMin 中剩余部分的最小值，若是则弹出写入结果（因为栈顶已经是最优选择了）。

## Solution

[SourceCode](./solution.js)
