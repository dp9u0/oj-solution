# [1432] Max Difference You Can Get From Changing an Integer

## Description

[LeetCode Problem Description](https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/description/)

* algorithms
* Medium (48.76%)
* Likes:    599
* Dislikes: 377
* Testcase Example:  '555'

```md
You are given an integer num. You will apply the following steps to num two separate times:

Pick a digit x (0 <= x <= 9).
Pick another digit y (0 <= y <= 9). Note y can be equal to x.
Replace all the occurrences of x in the decimal representation of num by y.

Let a and b be the two results from applying the operation to num independently.
Return the max difference between a and b.
Note that neither a nor b may have any leading zeros, and must not be 0.

Example 1:

Input: num = 555
Output: 888
Explanation: The first time pick x = 5 and y = 9 and store the new integer in a.
The second time pick x = 5 and y = 1 and store the new integer in b.
We have now a = 999 and b = 111 and max difference = 888

Example 2:

Input: num = 9
Output: 8
Explanation: The first time pick x = 9 and y = 9 and store the new integer in a.
The second time pick x = 9 and y = 1 and store the new integer in b.
We have now a = 9 and b = 1 and max difference = 8


Constraints:

1 <= num <= 108


```

## 题目翻译

给定整数 num，两次独立操作：每次选一个数字 x 替换为 y（0-9），结果分别为 a 和 b。求 a - b 的最大值。不允许前导零，结果不为 0。

## 解题思路

枚举 num 中所有出现的数字 x 和所有目标 y（0-9），过滤前导零，取最大 a 和最小 b。数字最多8位，枚举量小。

## Solution

[SourceCode](./solution.js)
