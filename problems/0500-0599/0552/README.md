# [552] Student Attendance Record II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/student-attendance-record-ii/description/)

* algorithms
* Hard (56.91%)
* Likes:    2390
* Dislikes: 291
* Testcase Example:  '2'

```md
An attendance record for a student can be represented as a string where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:
'A': Absent.
'L': Late.
'P': Present.
Any student is eligible for an attendance award if they meet both of the following criteria:
The student was absent ('A') for strictly fewer than 2 days total.
The student was never late ('L') for 3 or more consecutive days.
Given an integer n, return the number of possible attendance records of length n that make a student eligible for an attendance award. The answer may be very large, so return it modulo 109 + 7.

Example 1:
Input: n = 2
Output: 8
Explanation: There are 8 records with length 2 that are eligible for an award:
"PP", "AP", "PA", "LP", "PL", "AL", "LA", "LL"
Only "AA" is not eligible because there are 2 absences (there need to be fewer than 2).
Example 2:
Input: n = 1
Output: 3
Example 3:
Input: n = 10101
Output: 183236316

Constraints:
1

```

## Solution

[SourceCode](./solution.js)

## 题目翻译（中文）

学生的出勤记录可以用一个字符串表示，每个字符表示该学生当天是缺勤、迟到还是到场。记录只包含以下三个字符：

- `'A'`：缺勤（Absent）
- `'L'`：迟到（Late）
- `'P'`：到场（Present）

如果学生同时满足以下两个条件，则有资格获得出勤奖励：

1. 缺勤（`'A'`）总天数严格少于 2 天
2. 从未连续 3 天或以上迟到（`'L'`）

给定整数 `n`，返回长度为 `n` 且能获得出勤奖励的出勤记录数量。答案可能很大，返回对 `10^9 + 7` 取模的结果。

示例 1：
输入：n = 2
输出：8
解释：有 8 条长度为 2 的记录有资格获奖："PP", "AP", "PA", "LP", "PL", "AL", "LA", "LL"。只有 "AA" 不符合，因为它有 2 次缺勤（需要少于 2 次）。

示例 2：
输入：n = 1
输出：3

示例 3：
输入：n = 10101
输出：183236316

## 解题思路

动态规划（状态机 DP），时间 O(n)，空间 O(1)（滚动数组）。

状态定义：`dp[a][l]` 表示当前已构造长度下，满足条件的记录数，其中：
- `a`：已使用的 `'A'` 个数（0 或 1）
- `l`：结尾连续 `'L'` 的个数（0、1、2）

初始：`dp[0][0] = 1`（空记录）。

每天在末尾追加一个字符，转移如下（`sum = dp[a][0] + dp[a][1] + dp[a][2]`）：
- 追加 `'P'`：清空结尾 L，`next[a][0] += sum`
- 追加 `'L'`：`next[a][1] += dp[a][0]`，`next[a][2] += dp[a][1]`（连续 L 不能超过 2）
- 追加 `'A'`（仅当 `a == 0`）：`next[1][0] += sum`

答案为 `dp[0][0..2]` 与 `dp[1][0..2]` 之和。验证：n=1 时 {P, A, L} 共 3 种；n=2 时 8 种，与示例一致。
