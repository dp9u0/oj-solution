# [935] Knight Dialer

## Description

[LeetCode Problem Description](https://leetcode.com/problems/knight-dialer/description/)

* algorithms
* Medium (61.82%)
* Likes:    3204
* Dislikes: 452
* Testcase Example:  '1'

```md
The chess knight has a unique movement,it may move two squares vertically and one square horizontally, or two squares horizontally and one square vertically (with both forming the shape of an L). The possible movements of chess knight are shown in this diagram:
A chess knight can move as indicated in the chess diagram below:

We have a chess knight and a phone pad as shown below, the knight can only stand on a numeric cell(i.e. blue cell).

Given an integer n, return how many distinct phone numbers of length n we can dial.
You are allowed to place the knight on any numeric cell initially and then you should perform n - 1 jumps to dial a number of length n. All jumps should be valid knight jumps.
As the answer may be very large, return the answer modulo 109 + 7.

Example 1:

Input: n = 1
Output: 10
Explanation: We need to dial a number of length 1, so placing the knight over any numeric cell of the 10 cells is sufficient.

Example 2:

Input: n = 2
Output: 20
Explanation: All the valid number we can dial are [04, 06, 16, 18, 27, 29, 34, 38, 40, 43, 49, 60, 61, 67, 72, 76, 81, 83, 92, 94]

Example 3:

Input: n = 3131
Output: 136006598
Explanation: Please take care of the mod.


Constraints:

1 <= n <= 5000


```

## 中文翻译

国际象棋骑士有独特的移动方式：走"日"字形（两格+一格的L形）。

在手机拨号盘上（数字键 0-9），骑士只能站在数字格上。给定整数 n，返回能拨出的长度为 n 的不同电话号码数量。

骑士可以从任意数字格开始，然后执行 n-1 次合法的骑士跳跃来拨号。答案对 10^9+7 取模。

## 解题思路

**动态规划：**

1. 预处理每个数字可以跳跃到的数字列表（骑士在拨号盘上的合法跳跃）
2. dp[i] 表示到达数字 i 的方案数，初始化 dp[i] = 1
3. 每次跳跃，新 dp[j] = sum(dp[所有能跳到 j 的数字])
4. 跳跃映射：0↔[4,6], 1↔[6,8], 2↔[7,9], 3↔[4,8], 4↔[0,3,9], 5↔[], 6↔[0,1,7], 7↔[2,6], 8↔[1,3], 9↔[2,4]

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
