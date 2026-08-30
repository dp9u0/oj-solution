# [3945] Digit Frequency Score

## Description

[LeetCode Problem Description](https://leetcode.com/problems/digit-frequency-score/description/)

* algorithms
* Easy (91.66%)
* Likes:    52
* Dislikes: 1
* Testcase Example:  '122'

```md
You are given an integer n.
The score of n is defined as the sum of d * freq(d) over all distinct digits d, where freq(d) denotes the number of times the digit d appears in n.
Return an integer denoting the score of n.

Example 1:
Input: n = 122
Output: 5
Explanation:
The digit 1 appears 1 time, contributing 1 * 1 = 1.
The digit 2 appears 2 times, contributing 2 * 2 = 4.
Thus, the score of n is 1 + 4 = 5.
Example 2:
Input: n = 101
Output: 2
Explanation:
The digit 0 appears 1 time, contributing 0 * 1 = 0.
The digit 1 appears 2 times, contributing 1 * 2 = 2.
Thus, the score of n is 2.

Constraints:
1 <= n <= 109
Hint 1: The answer is the sum of the digits.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给你一个整数 n。

n 的分数定义为：对所有不同的数字 d，求 d * freq(d) 的总和，其中 freq(d) 表示数字 d 在 n 中出现的次数。

返回 n 的分数。

示例 1：
输入：n = 122
输出：5
解释：
数字 1 出现 1 次，贡献 1 * 1 = 1。
数字 2 出现 2 次，贡献 2 * 2 = 4。
因此 n 的分数为 1 + 4 = 5。

示例 2：
输入：n = 101
输出：2
解释：
数字 0 出现 1 次，贡献 0 * 1 = 0。
数字 1 出现 2 次，贡献 1 * 2 = 2。
因此 n 的分数为 2。

约束：
1 <= n <= 10^9

## 解题思路

关键观察：Σ d * freq(d) 恰好等于 n 的各位数字之和。

因为数字 d 每出现一次就在 "d * freq(d)" 中贡献一个 d，共贡献 freq(d) 个 d；对所有不同的 d 求和，等价于把每一位数字直接相加。

因此直接循环取出每一位并累加即可：时间复杂度 O(log n)，空间复杂度 O(1)。
