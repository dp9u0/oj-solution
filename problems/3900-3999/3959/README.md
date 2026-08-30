# [3959] Check Good Integer

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-good-integer/description/)

* algorithms
* Easy (83.28%)
* Likes:    32
* Dislikes: 1
* Testcase Example:  '1000\r'

```md
You are given a positive integer n.
Let digitSum be the sum of the digits of n, and let squareSum be the sum of the squares of the digits of n.
An integer is called good if squareSum - digitSum >= 50.
Return true if n is good. Otherwise, return false.

Example 1:
Input: n = 1000
Output: false
Explanation:
The digits of 1000 are 1, 0, 0, and 0.
The digitSum is 1 + 0 + 0 + 0 = 1.
The squareSum is 12 + 02 + 02 + 02 = 1.
The squareSum - digitSum is 1 - 1 = 0. As 0 is not greater than or equal to 50, the output is false.
Example 2:
Input: n = 19
Output: true
Explanation:
The digits of 19 are 1 and 9.
The digitSum is 1 + 9 = 10.
The squareSum is 12 + 92 = 1 + 81 = 82.
The squareSum - digitSum is 82 - 10 = 72. As 72 is greater than or equal to 50, the output is true.

Constraints:
1
Hint 1: Pure simulation problem.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译（中文）

给定一个正整数 n。

定义 digitSum 为 n 的各位数字之和，squareSum 为 n 的各位数字的平方和。

如果一个整数满足 squareSum - digitSum >= 50，则称其为"好整数"（good）。

如果 n 是好整数，返回 true；否则返回 false。

示例 1：
输入：n = 1000
输出：false
解释：1000 的各位数字是 1, 0, 0, 0。digitSum = 1，squareSum = 1，差为 0，不满足 >= 50，返回 false。

示例 2：
输入：n = 19
输出：true
解释：数字为 1 和 9。digitSum = 10，squareSum = 1 + 81 = 82，差为 72 >= 50，返回 true。

## 解题思路

纯模拟题。逐位取出 n 的每一位数字 d，累加 digitSum（d 之和）与 squareSum（d² 之和），最后判断 squareSum - digitSum >= 50。

进一步观察：squareSum - digitSum = Σ(d² - d) = Σ d*(d-1)，即每位贡献 d*(d-1)，只需判断该累加值是否 >= 50。位数为对数级别，时间复杂度 O(log n)，空间 O(1)。
