# [2400] Number of Ways to Reach a Position After Exactly k Steps

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/description/)

* algorithms
* Medium (36.89%)
* Likes:    843
* Dislikes: 68
* Testcase Example:  '1\n2\n3'

```md
You are given two positive integers startPos and endPos. Initially, you are standing at position startPos on an infinite number line. With one step, you can move either one position to the left, or one position to the right.
Given a positive integer k, return the number of different ways to reach the position endPos starting from startPos, such that you perform exactly k steps. Since the answer may be very large, return it modulo 109 + 7.
Two ways are considered different if the order of the steps made is not exactly the same.
Note that the number line includes negative integers.

Example 1:

Input: startPos = 1, endPos = 2, k = 3
Output: 3
Explanation: We can reach position 2 from 1 in exactly 3 steps in three ways:
- 1 -> 2 -> 3 -> 2.
- 1 -> 2 -> 1 -> 2.
- 1 -> 0 -> 1 -> 2.
It can be proven that no other way is possible, so we return 3.
Example 2:

Input: startPos = 2, endPos = 5, k = 10
Output: 0
Explanation: It is impossible to reach position 5 from position 2 in exactly 10 steps.


Constraints:

1 <= startPos, endPos, k <= 1000


```

## 中文翻译

在无限数轴上从 startPos 出发，每步可以向左或向右移动一格，恰好走 k 步到达 endPos 的方案数。结果对 10^9+7 取模。

## 解题思路

设 d = |endPos - startPos|。需要在 k 步中选 r 步向正方向走，k-r 步向反方向走，使得 r - (k-r) = d，即 r = (k+d)/2。所以要求 k+d 为偶数且 r >= 0 且 r <= k。答案为 C(k, r)。

预计算阶乘和逆元求组合数。

时间复杂度：O(k)，空间复杂度：O(k)

## Solution

[SourceCode](./solution.js)
