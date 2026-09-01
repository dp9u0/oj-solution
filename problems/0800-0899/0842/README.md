# [842] Split Array into Fibonacci Sequence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/split-array-into-fibonacci-sequence/description/)

* algorithms
* Medium (40.29%)
* Likes:    1184
* Dislikes: 310
* Testcase Example:  '"1101111"'

```md
You are given a string of digits num, such as '123456579'. We can split it into a Fibonacci-like sequence [123, 456, 579].
Formally, a Fibonacci-like sequence is a list f of non-negative integers such that:

0 <= f[i] < 231, (that is, each integer fits in a 32-bit signed integer type),
f.length >= 3, and
f[i] + f[i + 1] == f[i + 2] for all 0 <= i < f.length - 2.

Note that when splitting the string into pieces, each piece must not have extra leading zeroes, except if the piece is the number 0 itself.
Return any Fibonacci-like sequence split from num, or return [] if it cannot be done.

Example 1:

Input: num = '1101111'
Output: [11,0,11,11]
Explanation: The output [110, 1, 111] would also be accepted.

Example 2:

Input: num = '112358130'
Output: []
Explanation: The task is impossible.

Example 3:

Input: num = '0123'
Output: []
Explanation: Leading zeroes are not allowed, so '01', '2', '3' is not valid.


Constraints:

1 <= num.length <= 200
num contains only digits.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个数字字符串 num，将其拆分成斐波那契式的序列。要求：每个数 < 2^31，序列长度 >= 3，每个数 f[i] + f[i+1] == f[i+2]。不允许前导零（除非数字本身就是 0）。返回任意一个合法拆分，无法拆分则返回空数组。

## 解题思路

**回溯 / 枚举前两个数**

前两个数确定了整个序列。枚举第一个数的长度 i 和第二个数的长度 j（各不超过一半长度），然后验证后续是否匹配斐波那契规则。

剪枝条件：
- 前导零：长度 > 1 且以 0 开头则跳过
- 数值溢出：超过 2^31 - 1 则跳过
- 前两个数之和已超过剩余字符串能表示的范围

时间复杂度 O(n^2)（枚举前两个数），空间复杂度 O(n)。
