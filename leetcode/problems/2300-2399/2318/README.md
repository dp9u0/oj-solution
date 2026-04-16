# [2318] Number of Distinct Roll Sequences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-distinct-roll-sequences/description/)

* algorithms
* Hard (58.12%)
* Likes:    458
* Dislikes: 20
* Testcase Example:  '4'

```md
You are given an integer n. You roll a fair 6-sided dice n times. Determine the total number of distinct sequences of rolls possible such that the following conditions are satisfied:

The greatest common divisor of any adjacent values in the sequence is equal to 1.
There is at least a gap of 2 rolls between equal valued rolls. More formally, if the value of the ith roll is equal to the value of the jth roll, then abs(i - j) > 2.

Return the total number of distinct sequences possible. Since the answer may be very large, return it modulo 109 + 7.
Two sequences are considered distinct if at least one element is different.

Example 1:

Input: n = 4
Output: 184
Explanation: Some of the possible sequences are (1, 2, 3, 4), (6, 1, 2, 3), (1, 2, 3, 1), etc.
Some invalid sequences are (1, 2, 1, 3), (1, 2, 3, 6).
(1, 2, 1, 3) is invalid since the first and third roll have an equal value and abs(1 - 3) = 2 (i and j are 1-indexed).
(1, 2, 3, 6) is invalid since the greatest common divisor of 3 and 6 = 3.
There are a total of 184 distinct sequences possible, so we return 184.
Example 2:

Input: n = 2
Output: 22
Explanation: Some of the possible sequences are (1, 2), (2, 1), (3, 2).
Some invalid sequences are (3, 6), (2, 4) since the greatest common divisor is not equal to 1.
There are a total of 22 distinct sequences possible, so we return 22.


Constraints:

1 <= n <= 104


```

## 题目翻译

给定整数 n，掷一枚公平的 6 面骰子 n 次。求满足以下条件的不同序列总数：
1. 序列中任意相邻两个值的最大公约数为 1。
2. 相同值之间至少间隔 2 次掷骰（即如果第 i 次和第 j 次的值相同，则 abs(i-j) > 2）。

返回对 10^9+7 取模的结果。

## 解题思路

**动态规划**

设 dp[i][prev][prevPrev] 表示第 i 次掷骰时，上一次掷出 prev、上上次掷出 prevPrev 的合法序列数。

状态转移：
- 第 i 次掷出的值 cur ∈ [1,6]
- 约束：gcd(cur, prev) == 1（相邻互质）
- 约束：cur != prevPrev（间隔至少 2）

初始化：dp[1][j][0] = 1 for j ∈ [1,6]

时间复杂度 O(n × 6 × 6 × 6) = O(n)。

## Solution

[SourceCode](./solution.js)
